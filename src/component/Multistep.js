import React ,{useContext,useState} from 'react';
import { Steps } from '../Main';

function Multistep() {
    const [currentStep, setCurrentStep] = useState(1);
    const {userData,setUserData,submitData}=useContext(Steps)
    
    const handleSubmit = (e) => {
        e.preventDefault();
      };
      const nextStep = () => {
        setCurrentStep(currentStep + 1);
      };
    
      const prevStep = () => {
        setCurrentStep(currentStep - 1);
      };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            { currentStep===1 && (
                <>
            <label> Name: <input type='text' name='name'  value={userData["name"]} onChange={(e)=>setUserData({...userData,"name":e.target.value})}  /> </label> <br/>
            <label> DOB: <input type='date' name='date' value={userData["date"]} onChange={(e)=>setUserData({...userData,"date":e.target.value})} /> </label> <br/>
            <label> Email: <input type='email' name='email'value={userData["email"]} onChange={(e)=>setUserData({...userData,"email":e.target.value})} /> </label> <br/>
            <label> Number: <input type='number'name='number' value={userData["number"]} onChange={(e)=>setUserData({...userData,"number":e.target.value})} /> </label> <br/>
            <button onClick={nextStep}>Next</button>
            </> 
            )}
            { currentStep===2 && (
                <>
            <label> Area: <input type='text' name='area' value={userData["area"]} onChange={(e)=>setUserData({...userData,"area":e.target.value})}/> </label> <br/>
            <label> City: <input type='text' name='city' value={userData["city"]} onChange={(e)=>setUserData({...userData,"city":e.target.value})} /> </label> <br/>
            <label> District: <input type='text' name='district'value={userData["district"]} onChange={(e)=>setUserData({...userData,"district":e.target.value})} /> </label> <br/>
            <label> State: <input type='text' name='state' value={userData["state"]} onChange={(e)=>setUserData({...userData,"state":e.target.value})} /> </label> <br/>
            <label> Pincode: <input type='number' name='pincode'value={userData["pincode"]} onChange={(e)=>setUserData({...userData,"pincode":e.target.value})} /> </label> <br/>
            <button onClick={prevStep}>Prev</button>
            <button onClick={nextStep}>Next</button>
            </>
            )}
            { currentStep===3 &&(
                <>
            <label> Your Likes: <input type='text'name='likes' value={userData["likes"]} onChange={(e)=>setUserData({...userData,"likes":e.target.value})} /> </label> <br/>
            <button onClick={prevStep} >Prev</button>
            <button onClick={submitData}>Submit</button>
            </>
            )}

        </form>

    </div>
  )
}

export default Multistep