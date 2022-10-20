import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { dataAddSuccess } from '../../redux/action';
import './page2.css'



export const Page2=(()=>{
    const [data,setData]=useState([]);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const dataStored=useSelector((state)=>state.data)
    console.log(dataStored,typeof(dataStored))
    //function to take the input from the form and save it in redux
    const handleSubmit=(e)=>{
    //    let dataIs=dataStored;
       const object3 = {...dataStored, ...data}
       e.preventDefault()
      
     
     //  dataIs=[...dataIs,data]
       dispatch(dataAddSuccess(object3))     
    }
    const handleChange=((e)=>{
       const {id,value}=e.target;
       setData({...data,
       [id]:value
       }
    )
    })
    return <div>
       
        <form action="" onSubmit={handleSubmit}>
        <div className="main-2">
            <div className='left'>           
                <div className='name'>     
                <label className='name'>(City/Town) of your pharmacy:</label><span class="req">*</span> <br />
                <input id='City/Town' onChange={handleChange} className='input-name'   type="text" required />
                </div>  
                <br />
                <div className='name'>  
                <label className='name'>Pharmacy address:</label><span class="req">*</span> <br />
                <input id='Pharmacy Address' onChange={handleChange} type="text" className='input-name' placeholder=''  />
                </div>
                <div className='name'>     
                <label className='name'>Pin code location of your pharmacy</label><span class="req">*</span> <br />
                <input id='Pincode of pharmacy' onChange={handleChange} className='input-name' placeholder='Enter your name'  type="number" required />
                </div>  
                <br />
                <div className='name'>  
                <label className='name'>Pharmacy GST number</label><span class="req">*</span> <br />
                <input id='Pharmacy GST number' onChange={handleChange} type="number" className='input-name' placeholder='' required />
                </div>
                <div className="name">
                  <label htmlFor="" className='name'>What is the approximate size of your pharmacy</label>
                  <section onChange={handleChange} id='Size of pharmacy'>
                    <div> 
                  
                    <div> 
                    
                    <input  onChange={handleChange} type="radio" name="120" id="Size of pharmacy" value={'124'} />
                    <label htmlFor="">120 to 150 Square feet</label>
                    </div>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange} type="radio" name="120" id="Size of pharmacy" value={'150 to 200 Square feet'} />
                    <label htmlFor="">150 to 200 Square feet</label>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange} type="radio" name="120" id="Size of pharmacy" value={'200 to 300 Square feet'} />
                    <label htmlFor="">200 to 300 Square feet</label>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange}  type="radio" name="120" id="Size of pharmacy" value={'300 to 500 Square feet'} />
                    <label htmlFor="">300 to 500 Square feet</label>
                    </div>

                    <div> 
                   
                   <input onChange={handleChange} type="radio" name="120" id="Size of pharmacy" value={'More than 500 Square feet'} />
                   <label htmlFor="">More than  500 Square feet</label>
                   </div>
                  </section>  
                </div>
              
            </div>
            <div className='right-2'>
            <div className='name'>  
                <label className='name'>Do you own /run a pharmacy/medical /chemist store?</label><span class="req">*</span> <br />
                <section id="Do you own a pharmacy">
                    <input  onChange={handleChange}  type="radio" value='yes' name="" id="Do you own a pharmacy" />
                 <label htmlFor="">Yes</label>
                 <input  onChange={handleChange} type="radio" value='No' name="" id="Do you own a pharmacy" />
                 <label htmlFor="" >No</label>
                </section>
              
            </div>
            <div className='name'>  
                <label className='name'>Pharmacy name</label><span class="req">*</span> <br />
                <input required id='Pharmacy name' onChange={handleChange} type="text" className='input-name' placeholder=''  />
            </div>
            <div className='name'>  
                <label className='name'>Bussiness type</label><span class="req">*</span> <br />
                <input required id='Bussiness type' onChange={handleChange} type="text" className='input-name' placeholder=''  />
            </div>
            <div className='name'>  
                <label className='name'>Company name(If pharmacy name and company name are different)</label> <br />
                <input id='Company name' onChange={handleChange} type="text" className='input-name' placeholder=''  />
            </div>

            </div>
        </div>
        <div className="submit">
            <button onClick={()=>{
                navigate('/')
            }} className='btn-back'>Back</button>
            <input className='submit-btn-2' type="submit" value="Next" />
        </div>
        </form>
        
      
    </div>
})