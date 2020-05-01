const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

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

export {login,logout}