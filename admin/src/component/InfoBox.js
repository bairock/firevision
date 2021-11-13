import '../App';

const InfoBox = (props) => {
    return(
        <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', fontSize:'18px', fontWeight:'300', marginTop:'20px', alignItems:'flex-end', width:'300px'}}>
            <div style={{width:'160px'}}>
            {props.txtone}
            </div>
            <div>
            {props.txttwo}
            </div>
        </div>
    )
  }

  export default InfoBox