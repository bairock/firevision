import './css/App.css';
import { useState, useEffect } from 'react'
import OneCam from './component/OneCam';
import InfoBox from './component/InfoBox';
import Iframe from './component/Iframe';

import Icon from './img/Vector.png';
import Img from './img/img.png';
import RedIcon from './img/redfire.png';

import { useQuery } from '@apollo/client'
import { FIND_MANY_CAMERA } from './gql/quaries'

import { ReactFlvPlayer } from 'react-flv-player'
const App = () => {
  // const [fireCardVisible, setFireCardVisible] = useState()
  const [url, setUrl] = useState()
  const [sizeFire, setSizeFire] = useState()
  const [dataFire, setDataFire] = useState()
  const [area, setArea] = useState()
  const [latlng, setLatlng] = useState()
  const [damage, setDamage] = useState()
  const [selfExtinguishing, setSelfExtinguishing] = useState()
  const [distribution, setDistribution] = useState()

  const SwitchCamera = (item) => {
    setUrl(item?.url)
    setSizeFire(item?.sizeFire)
    setDataFire(item?.dataFire)
    setArea(item?.area)
    setLatlng(item?.latlng)
    setDamage(item?.damage)
    setSelfExtinguishing(item?.selfExtinguishing)
    setDistribution(item?.distribution)
  }
  // rtsp://10.71.13.244:5540/ch0
  const { data, loading } = useQuery(
    FIND_MANY_CAMERA,
    { fetchPolicy: "cache-and-network" }
  );

  if (!loading) {
    console.log(data.findManyCamera[0])
  }

  return (
    <div className="App">
      <ReactFlvPlayer isLive={1} hasVideo={1} />
      {/* <div style={{width:'100%', height:'120%'}}> */}
      <Iframe source='https://www.iqair.com/air-quality-map?lat=61.97382&lng=129.75403&zoomLevel=10' />
      {/* </div> */}
      {/* <div style={{width:'100vw', height:'100vh', position:'absolute', display:'flex', justifyContent:'space-between', flexDirection:'column'}}> */}
      {sizeFire==0 ? null : 
      <div className='box'>
        <div className='info'>
          <div style={{ padding: '36px' }}>
            <div className='infofirsttxt'>Пожар №242</div>
            <div className='uroven'>
              <div className='infofirsttxt' style={{ padding: '16px' }}>Низкая</div>
              <div style={{ display: 'flex', flexDirection: 'row' }}>
                <img src={RedIcon} alt={"RedIcon"} className='iconfire'></img>
                <img src={Icon} alt={"Icon"} className='iconfire'></img>
                <img src={Icon} alt={"Icon"} className='iconfire'></img>
              </div>
            </div>
           

            <InfoBox txtone="Дата обнаружения" txttwo={dataFire} />
            <InfoBox txtone="Координаты: " txttwo={latlng} />
            <InfoBox txtone="Площадь:" txttwo={area} />
            <InfoBox txtone="Ущерб:" txttwo={damage} />
            <InfoBox txtone="Вероятность самотушения:" txttwo={selfExtinguishing} />
            <InfoBox txtone="Вероятность распространения:" />

            <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
              <img src={Img} alt={"Img"} className='img' />
            </div>
          </div>
        </div>
      </div>}
      <div className='cameras'>
        {data?.findManyCamera?.map((item) => {
          return (<button onClick={() => { SwitchCamera(item) }} className='onecam' ><OneCam number={item?.cameraNumber} /></button>)
        })}
        {/* <OneCam number='1'/>
            <OneCam number='2'/>
            <OneCam number='3'/>
            <OneCam number='4'/> */}
      </div>
      {/* </Iframe> */}
    </div>


  );
}

export default App;
