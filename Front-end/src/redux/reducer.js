import { dataActions } from "./action"


const initState={
    loading:false,
    error:false,
    data:[]
}


export const dataReducer=(state=initState,action)=>{
        switch(action.state){
            case dataActions.DATA_ADD_FAILURE :{
                return {
                    ...state,
                    loading:false,
                    error:true
                }
            }
            case dataActions.DATA_ADD_REQUEST:{
                return {
                    ...state,
                    loading:true,
                    error:false
                }
            }
            case dataActions.DATA_ADD_SUCCESS :{
                return {
                    ...state,
                    loading:false,
                    error:false,
                    data:[...data,action.payload]
                }
            }
            default :
            return state
        }
}
