import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { dataAddSuccess } from '../../redux/action';
import './page1.css'



export const Page1=(()=>{
    const [data,setData]=useState([]);
    const dispatch=useDispatch();
    const navigate=useNavigate()
    //function to take the input from the form and save it in redux
    const handleSubmit=(e)=>{     
        e.preventDefault()
       console.log('yes');
       console.log(data)
       navigate('/Page2')
       dispatch(dataAddSuccess(data))
    }
    //storing the data

    const handleChange=((e)=>{
       const {id,value}=e.target;
       setData({...data,
       [id]:value
       }
    )
    })
    return <div>
       <h2>Page 1</h2>
        <form action="" onSubmit={handleSubmit}>
        <div className="main">
            <div className='left'>
                <h3>Partnered Pharmacy Registration Form</h3>
                <div className='fill'>Please fill the details below</div>              
                <div className='name'>     
                <label className='name'>Name:</label><span class="req">*</span> <br />
                <input id='name' onChange={handleChange} className='input-name' placeholder='Enter your name'  type="text" required />
                </div>  
                <br />
                <div className='name'>  
                <label className='name'>Mobile number:</label><span class="req">*</span> <br />
                <input id='mobileNumber' onChange={handleChange} type="number" className='input-name' placeholder=''  />
                </div>
              
            </div>
            <div className='right'>
            <div className='name'>  
                <label className='name'>Email:</label><span class="req">*</span> <br />
                <input id='email' onChange={handleChange} type="email" className='input-name' placeholder='Enter your email' required />
            </div>
            </div>
        </div>
        <div className="submit">
            <input className='submit-btn' type="submit" value="Next" />
        </div>
        </form>
        
      
    </div>
})