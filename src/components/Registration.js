import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { socket } from '../socket';

function Registration() {
const key = {'name':'','email':'','password':'','confirmPassword':''};
const [formData,setFormData] = useState(key);

const handleChange = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value})
}
const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.get('/test-message').then((response)=>{
        console.log(response);
    });
    console.log(formData);
}

useEffect (()=>{
    socket.on("connect", () => {
        console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    // socket.emit('message','hello server, from client side')
    // socket.on('server_message',(message)=>{
    //     console.log(message);
    // });
    });

},[]);
  return (
    <div>
        <h2 className='text-center'>
            Registration Form
        </h2>
        <div class="container">
            <form onSubmit={handleSubmit}>
                <div className='row'>
                    <label>Name</label>
                    <div class = "col-md-5">
                     <input type='text' name="name" onChange={handleChange}/>
                    </div>
                </div>
                <div className='row'>
                    <label>Email</label>
                    <div class = "col-md-5">
                     <input type='text' name="email" onChange={handleChange}/>
                    </div>
                </div>
                <div className='row'>
                    <label>Password</label>
                    <div class = "col-md-5">
                     <input type='password' name="password" onChange={handleChange}/>
                    </div>
                </div>
                <div className='row'>
                    <label>Confirm Password</label>
                    <div class = "col-md-5">
                     <input type='password' name="confirmPassword" onChange={handleChange}/>
                    </div>
                </div>
                <button className='btn btn-primary' type="submit">Register</button>
            </form>
        </div>
    </div>
  )
}

export default Registration