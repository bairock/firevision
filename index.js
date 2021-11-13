const rtsp = require('rtsp-ffmpeg')
const stream = new rtsp.FFMpeg({ input: 'rtsp://192.168.31.45:5540/ch0' })

const tf = require('@tensorflow/tfjs-node')



const labelMap = {
    1: { name: 'Fire', color: 'red' }
}

const drawRect = (boxes, classes, scores, threshold) => {
    console.log('scan...')
    for (let i = 0; i <= boxes.length; i++) {
        if (boxes[i] && classes[i] && scores[i] > threshold) {
            const [y, x, height, width] = boxes[i]
            const text = classes[i]
            console.log(labelMap[text])
        }
    }
}

let buffer

const startFireDetection = async () => {
    const model = await tf.loadGraphModel('file://models/fire/model.json')

    setInterval(async () => {
        if (buffer) {
            const image = await tf.node.decodeImage(buffer)
            const resized = tf.image.resizeBilinear(image, [640, 480])
            const casted = resized.cast('int32')
            const expanded = casted.expandDims(0)
            const obj = await model.executeAsync(expanded)
            const boxes = await obj[3].array()
            const classes = await obj[0].array()
            const scores = await obj[1].array()

            drawRect(
                boxes[0],
                classes[0],
                scores[0],
                0.3,
            )
        } else {
            console.log('stream empty')
        }
    }, 1000)
}
startFireDetection()


stream.on('data', (data) => buffer = data)