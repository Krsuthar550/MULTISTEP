import React, { useContext } from 'react';
import { Steps } from '../Main'
import './Viewdata.css'
function Viewdata() {
    const {finalData} =useContext(Steps)

    
  return (
    <div>
<table>
    <thead className='heading'>
    <tr>
    <th>Name</th>
    <th>DOB</th>
    <th>Email</th>
    <th>Number</th>
    <th>area</th>
    <th>City</th>
    <th>District</th>
    <th>State</th>
    <th>Pincode</th>
    <th>Likes</th>
    </tr>
    </thead>
    <tbody className='tabledata'>
        {finalData.map(data=>{
            return(
    <tr key={data.email}>
        <td >{data.name}</td>
        <td>{data.date}</td>
        <td>{data.email}</td>
        <td>{data.number}</td>
        <td>{data.area}</td>
        <td>{data.city}</td>
        <td>{data.district}</td>
        <td>{data.state}</td>
        <td>{data.pincode}</td>
        <td>{data.likes}</td>
    </tr>
)})}
    </tbody>
</table>
    </div>
  )
}

export default Viewdata