import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { dataAddSuccess } from '../../redux/action';
import './page3.css'



export const Page3=(()=>{
    const [data,setData]=useState([]);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const dataStored=useSelector((state)=>state.data)
    console.log(dataStored,typeof(dataStored))
    //function to take the input from the form and save it in redux
    const handleSubmit=(e)=>{
       const object3 = {...dataStored, ...data}
       e.preventDefault();
       dispatch(dataAddSuccess(object3));
    }
    const handleChange=((e)=>{
       const {id,value}=e.target;
       setData({...data,
       [id]:value
       }
    )
    })
    return <div>
         <h2>Page 3</h2>
        <form action="" onSubmit={handleSubmit}>
        <div className="main-3">
            <div className='left'>           
                <div className='name'>     
                <label className='name'>How many pharmacists are working in your company?</label><span class="req">*</span> <br />
                <input id='TotalPharma' onChange={handleChange} className='input-name'   type="number" required />
                </div>  
                <br />
               
             
                <div className="name">
                  <label htmlFor="" className='name'>How many staffs are woring in your pharmacy</label>
                  <section onChange={handleChange} id='TotalStaffs'>
                    <div> 
                  
                    <div> 
                    
                    <input  onChange={handleChange} type="radio" name="120" id="TotalStaffs" value={'1-2'} />
                    <label htmlFor="">1-2</label>
                    </div>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange} type="radio" name="120" id="TotalStaffs" value={'2-4'} />
                    <label htmlFor="">2-4</label>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange} type="radio" name="120" id="TotalStaffs" value={'5-10'} />
                    <label htmlFor="">5-10</label>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange}  type="radio" name="120" id="TotalStaffs" value={'More than 10'} />
                    <label htmlFor="">More than 10</label>
                    </div>
                  </section>  
                </div>

                <div className="name">
                  <label htmlFor="" className='name'>Do you provide discounts for health care products to your customers</label>
                  <section onChange={handleChange} id='Discounts_on_health'>
                    <div> 
                  
                    <div> 
                    
                    <input  onChange={handleChange} type="radio" name="120" id="Discounts_on_health" value={'Yes ,I give up to 60% on on certain categories'} />
                    <label htmlFor="">Yes ,I give up to 60% on on certain categories</label>
                    </div>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange} type="radio" name="120" id="Discounts_on_health" value={'Yes ,I give up to 40% on on certain categories'} />
                    <label htmlFor="">Yes ,I give up to 40% on on certain categories</label>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange} type="radio" name="120" id="Discounts_on_health" value={'Yes ,I give various discounts'} />
                    <label htmlFor="">Yes ,I give various discounts</label>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange}  type="radio" name="120" id="Discounts_on_health" value={'No,I do not provide discounts on health care products'} />
                    <label htmlFor="">No,I do not provide discounts on health care products</label>
                    </div>
                  </section>  
                </div>

                <div className='name'>  
                <label className='name'>Do you have a delivery person or a staff to deliver products to your customers?</label><span class="req">*</span> <br />
                <section id="DeliveryOption">
                    <input  onChange={handleChange}  type="radio" value='yes' name=""id="DeliveryOption" />
                 <label htmlFor="">Yes</label>
                 <input  onChange={handleChange} type="radio" value='No' name=""id="DeliveryOption" />
                 <label htmlFor="" >No</label>
                </section>
              
            </div>

            <div className="name">
                  <label htmlFor="" className='name'>Are you currently part of any online platform /health-tech platform ?</label><span class="req">*</span>
                  <section onChange={handleChange} id='OnlinePlatforms'>
                    
                    <div> 
                   
                    <input  onChange={handleChange} type="radio" name="120" id="OnlinePlatforms" value={'Yes ,I am currently part of any online platform /health-tech platform'} />
                    <label htmlFor="">Yes ,I am currently part of any online platform /health-tech platform</label>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange} type="radio" name="120" id="OnlinePlatforms" value={'No ,I am not currently part of any online platform /health-tech platform'} />
                    <label htmlFor="">No ,I am not currently part of any online platform /health-tech platform</label>
                    </div>
                  
                  </section>  
                </div>
              
            </div>
            <div className='right-2'>
            <div className='name'>     
                <label className='name'>Your pharmacy license number?</label><span class="req">*</span> <br />
                <input id='License' onChange={handleChange} className='input-name'   type="number" required />
                </div>  
                <br />
               
             
                <div className="name">
                  <label htmlFor="" className='name'>Do you provide discounts on your medicines to your customers?</label><span class="req">*</span>
                  <section onChange={handleChange} id='Discounts_on_meds'>
                    <div> 
                  
                    <div> 
                    
                    <input  onChange={handleChange} type="radio" name="120" id="Discounts_on_meds" value={'Yes,I provide 10% discounts on medicines'} />
                    <label htmlFor="">Yes,I provide 10% discounts on medicines</label>
                    </div>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange} type="radio" name="120" id="Discounts_on_meds" value={'Yes,I provide 15% discounts on medicines'} />
                    <label htmlFor="">Yes,I provide 15% discounts on medicines</label>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange} type="radio" name="120" id="Discounts_on_meds" value={'No,I do not provide any discounts on medicines'} />
                    <label htmlFor="">No,I don't provide any discounts on medicines</label>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange}  type="radio" name="120" id="Discounts_on_meds" value={'Others'} />
                    <label htmlFor="">Others</label>
                    </div>
                  </section>  
                </div>

                <div className="name">
                  <label htmlFor="" className='name'>Do you have wholesale license</label><span class="req">*</span>
                  <section onChange={handleChange} id='HaveWholeSaleLicense'>
                    <div> 
                  
                    <div> 
                    
                    <input  onChange={handleChange} type="radio" name="120" id="HaveWholeSaleLicense" value={'Yes ,I have both wholesale and retail license'} />
                    <label htmlFor="">Yes ,I have both wholesale and retail license</label>
                    </div>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange} type="radio" name="120" id="HaveWholeSaleLicense" value={'No,I have only retail license'} />
                    <label htmlFor="">No,I have only retail license</label>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange} type="radio" name="120" id="HaveWholeSaleLicense" value={'Yes ,I have wholesale license'} />
                    <label htmlFor="">Yes ,I have wholesale license</label>
                    </div>
                  </section>  
                </div>


            <div className="name">
                  <label htmlFor="" className='name'>Do you currently uses any billing /sales /ERP software ?</label><span class="req">*</span>
                  <section onChange={handleChange} id='BillingSoftware'>
                    
                    <div> 
                   
                    <input  onChange={handleChange} type="radio" name="120" id="BillingSoftware" value={'Yes ,I am using the following billing / sales /ERP software'} />
                    <label htmlFor="">Yes ,I am using the following billing / sales /ERP software</label>
                    </div>
                    <div> 
                   
                    <input  onChange={handleChange} type="radio" name="120" id="BillingSoftware" value={'No ,I am  not using any billing / sales /ERP software'} />
                    <label htmlFor="">No ,I am  not using any billing / sales /ERP software</label>
                    </div>
                  
                  </section>  
                </div>

            </div>
        </div>
        <div className="submit">
            <button onClick={()=>{
                navigate('/Page2')
            }} className='btn-back'>Back</button>
            <input className='submit-btn-2' type="submit" value="Register" />
        </div>
        </form>
        
      
    </div>
})