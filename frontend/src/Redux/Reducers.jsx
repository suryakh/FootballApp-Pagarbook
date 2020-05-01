const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"

const initialstate = {
    login:false,
    user:"",
    token:""
}


const loginreducer=(state=initialstate,action)=>{
    switch(action.type){
        case LOGIN:{
            return{
                ...state,
                login:true,
                user:action.payload.username,
                token:action.payload.token
            }
        }
        case LOGOUT:{
            return{
                ...state,
                login:false,
                user:"",
                token:""
            }
        }
        default :{
            return state
        }
    }
}

export default loginreducer