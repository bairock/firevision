// import logo from './logo.svg';
import './App.css';
// import { ScrollView } from 'react-native';
import OneCam from './component/OneCam';
import InfoBox from './component/InfoBox';
import Iframe from './component/test';

import Icon from './img/Vector.png';
import Img from './img/img.png';
import RedIcon from './img/redfire.png';

function App() {
  return (
    <div className="App">
      <Iframe source='https://www.iqair.com/air-quality-map?lat=61.97382&lng=129.75403&zoomLevel=10'/>
      <div style={{width:'100vw', height:'100vh', position:'absolute', display:'flex', justifyContent:'space-between', flexDirection:'column'}}>
        <div className='box'>
          <div className='video'>

          </div>
          <div className='info'>
            <div style={{padding:'36px'}}>
              <div className='infofirsttxt'>Пожар №242</div>
              <div className='uroven'>
                <div className='infofirsttxt' style={{padding:'16px'}}>Низкая</div>
                <div style={{display:'flex', flexDirection:'row'}}>
                  <img src={RedIcon} alt={"RedIcon"} className='iconfire'></img>
                  <img src={Icon} alt={"Icon"} className='iconfire'></img>
                  <img src={Icon} alt={"Icon"} className='iconfire'></img>
                </div>
              </div>
              <InfoBox txtone="Дата обнаружения" txttwo='13.11.2021'/>
              <InfoBox txtone="Координаты: " txttwo='52.933, 182.032'/>
              <InfoBox txtone="Площадь:" txttwo='132,002'/>
              <InfoBox txtone="Ущерб:" txttwo='256 000'/>
              <InfoBox txtone="Вероятность самотушения:" txttwo='34%'/>
              <InfoBox txtone="Вероятность распространения:"/>
              <div style={{width:'100%', display:'flex', justifyContent:'center', marginTop:'20px'}}>
                <img src={Img} alt={"Img"} className='img'/>
              </div>
            </div>
          </div>
        </div>
        <div className='cameras'>
          <OneCam number='1'/>
          <OneCam number='2'/>
          <OneCam number='3'/>
          <OneCam number='4'/>
        </div>
      </div>
      {/* </Iframe> */}
    </div>
  );
}

export default App;
