
import React,{useContext} from 'react';
import './App.css';
import Multistep from './component/Multistep';
import Viewdata from './component/Viewdata';
import { Steps } from './Main';

function App() {
 const { userData } =useContext(Steps)

  return (
    <div className="App">
      <header className="App-header">
       <Multistep/>
       {userData.length >=0 ? <Viewdata/>:''}
       {/* <Viewdata/> */}

       
      </header>
    </div>
  );
}

export default App;
