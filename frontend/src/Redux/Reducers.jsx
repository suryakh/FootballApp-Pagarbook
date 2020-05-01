const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const COMPDATA ='COMPDATA'
const SENTREQUEST ='SENTREQUEST'

const initialstate = {
    login:false,
    user:"",
    token:""
}
const initialdatastate = {
    getcompdata:false,
    teamdata:false,
    error:false,
    competitions:[],
    teamslist:[]
}

const loginreducers=(state=initialstate,action)=>{
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

const datareducer = (state=initialdatastate,action)=>{
    switch(action.type){
        case SENTREQUEST:{
            return {
                ...state,
                getcompdata:false
            }
        }
        case COMPDATA:{
            return{
                ...state,
                competitions:action.payload,
                getcompdata:true
            }
        }
        default:{
            return state
        }
    }

}

export {loginreducers,datareducer}