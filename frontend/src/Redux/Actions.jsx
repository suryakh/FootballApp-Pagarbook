import axios from 'axios'
const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const COMPDATA ='COMPDATA'
const SENTREQUEST = 'SENTREQUEST'
const SENTTEAMREQUEST= 'SENTTEAMREQUEST'
const TEAMDATA ='TEAMDATA'

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
const teams =(data)=>{
    return {
        type:TEAMDATA,
        payload:data
    }
}
const sentteamsrequest=()=>{
    return{
        type:SENTTEAMREQUEST
    }
}


    const logindata = (data) => {
        return dispatch => {
            axios({
                method: 'POST',
                url: 'http://localhost:5000/auth/login',
                data: data
            })
                .then(res => {
                    if (res.data.token){
                        dispatch(login(res.data))
                    }
                    else {
                        alert("invalid credentials")
                    }
                }
                )
        };
    }
    const singupdata = (data)=>{
        return dispatch =>{
            axios({
                method:"POST",
                url:"http://localhost:5000/auth/signup",
                data:data,
            })
            .then((res)=>{
                alert("user suceessfully registered")
            })
            .catch ((res)=>{
                console.log("error")
            })
        }
    }
    const getcompetitions = (token)=>{
        return dispatch =>{
        dispatch(sentrequest())
            axios({
                method:'GET',
                url:'http://localhost:5000/competitions/info',
                headers: {'Authorization':token}
            })
            .then((res)=>dispatch(storedata(res.data)))
            .catch((err)=>console.log(err))

        }
    }
    const getteamlists = (id,token)=>{
        return dispatch =>{
            dispatch(sentteamsrequest())
            axios({
                method:'GET',
                url:`http://localhost:5000/competitions/teams/${id}`,
                headers: {'Authorization':token}
            })
            .then((res)=>dispatch(teams(res.data)))
        }
    }

export {logindata,logout,singupdata,getcompetitions,getteamlists}