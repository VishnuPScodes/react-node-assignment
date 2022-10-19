


export const dataActions={
    DATA_ADD_REQUEST:"DATA_ADD_REQUEST",
    DATA_ADD_SUCCESS:"DATA_ADD_SUCCESS",
    DATA_ADD_FAILURE:"DATA_ADD_FAILURE"
}


export const dataAddSuccess=(data)=>{
    return {
        type:dataActions.DATA_ADD_SUCCESS,
        payload:data
    }
}

export const dataAddFailure=()=>{
    return {
        type:dataActions.DATA_ADD_FAILURE
    }
}

export const dataAddRequest=()=>{
    return {
        type:dataActions.DATA_ADD_REQUEST
    }
}