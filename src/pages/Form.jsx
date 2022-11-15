import React from 'react';
import {useState} from "react"

function Form() {
  const [fname,setfName] = useState('');
  const [lname,setLName] = useState('');
  const [age,setAge] = useState('');
  const [address,setAddress] = useState('');
  const [mobile,setMobile] = useState('');
   const [gender, setGender] = useState('male')
  
  function changeValues(event) {
    let {name,type} = event.target;
    let value = type==='checkbox'? event.target.checked : event.target.value;
    if(name==='fname') setfName(value);
    if(name==='lname') setLName(value);
    if(name==='age') setAge(value);
    if(name==='address') setAddress(value);
    if(name==='mobile') setMobile(value);
    if(name==='gender') setGender(value)
  }

  return (
    <div>
<p>First Name : {fname} </p>
<p>Last Name : {lname} </p>
<p>Age : {age} </p>
<p>Address: {address} </p>
<p>Mobile : {mobile} </p>
<p> Gender : {gender}</p>
    <form>
      <input type='text' onChange={changeValues}   name='fname' autoComplete='false' />
      <br/><br/>
      <input type='text' onChange={changeValues}   name='lname' autoComplete='false' />
      <br/><br/>
      <input type='text' onChange={changeValues}   name='age' autoComplete='false' />
      <br/><br/>
      <input type='text' onChange={changeValues}   name='address' autoComplete='false' />
      <br/><br/>
      <input type='text' onChange={changeValues}   name='mobile' autoComplete='false' />
      <br/>
      
      <p>Gender:</p>
      <label>
      <input type='radio' onChange={changeValues} name='gender' value='male' checked={gender === 'male'}/>
      Male
      </label>
      <label>
      <input type='radio' onChange={changeValues} name='gender' value='female' checked={gender==='female'}/>
      Female
      </label>
      </form>
    </div>
  );
}
export default Form;