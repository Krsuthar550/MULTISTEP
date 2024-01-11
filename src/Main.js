import React, {useState } from 'react';
import App from './App';
export const Steps=React.createContext();


function Main() {
    
    const [userData,setUserData]=useState([]);
    const [finalData,setFinal]=useState([]);
    function submitData(){
        //  setFinal(userData)
        setFinal(finalData=>[...finalData, userData])
         setUserData(' ')
         
         console.log(userData);
         
      }
    
  return (
    <div>
        <Steps.Provider value={{userData,setUserData,finalData,setFinal,submitData}} >
           <App/>
        </Steps.Provider>
    </div>
  )
}

export default Main