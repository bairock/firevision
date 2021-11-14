// import '../App';

const OneCam = (props) => {


    return(

        <div className='cambox'> 
          <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'100%', fontSize:'18px', fontWeight:'bold'}}>
            Камера {props.number}
            <div className='round'/>
          </div>
          <div className='txttwo'>
            Местность 
          </div>
        </div>

    )
  }

  export default OneCam