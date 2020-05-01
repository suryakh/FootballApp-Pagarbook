const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const COMPDATA ='COMPDATA'
const SENTREQUEST = 'SENTREQUEST'

const login =(data)=>{
    return{
        type:LOGIN,
        payload:data
    }
}
const logout =()=>{
    return{
        type:LOGOUT
    }
}

const storedata =(data)=>{
    return {
        type:COMPDATA,
        payload:data
    }
}
const sentrequest=()=>{
    return{
        type:SENTREQUEST
    }
}
export {login,logout,storedata,sentrequest}