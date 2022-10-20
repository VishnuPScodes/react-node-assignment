import {Route, Routes} from  'react-router-dom'
import { Page1 } from '../pages/page1/Page1'
import { Page2 } from '../pages/page2/Page2'




export const Allroutes=(()=>{
    return <Routes>
        <Route path='/' element={<Page1/>} />
        <Route path='/page2' element={<Page2/>} />
    </Routes>
})