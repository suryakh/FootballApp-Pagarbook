import axios from 'axios'
const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const COMPDATA = 'COMPDATA'
const SENTCOMPEREQUEST = 'SENTCOMPEREQUEST'
const SENTTEAMREQUEST = 'SENTTEAMREQUEST'
const TEAMDATA = 'TEAMDATA'
const ADDFAV = 'ADDFAV'
const FAVLIST = 'FAVLIST'

const login = (data) => {
    return {
        type: LOGIN,
        payload: data
    }
}
const logout = () => {
    return {
        type: LOGOUT
    }
}

const storedata = (data) => {
    return {
        type: COMPDATA,
        payload: data
    }
}
const sentrequest = () => {
    return {
        type: SENTCOMPEREQUEST
    }
}
const teams = (data) => {
    return {
        type: TEAMDATA,
        payload: data
    }
}
const sentteamsrequest = () => {
    return {
        type: SENTTEAMREQUEST
    }
}
const addfav = (id) => {
    return {
        type: ADDFAV,
        payload: id
    }
}

const addfavlist = (data) => {
    console.log(data)
    return {
        type: FAVLIST,
        payload: data
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
                if (res.data.token) {
                    dispatch(login(res.data))
                }
                else {
                    alert("invalid credentials")
                }
            }
            )
    };
}
const singupdata = (data) => {
    return dispatch => {
        axios({
            method: "POST",
            url: "http://localhost:5000/auth/signup",
            data: data,
        })
            .then((res) => {
                alert("user suceessfully registered")
            })
            .catch((res) => {
                console.log("error")
            })
    }
}
const getcompetitions = (token) => {
    return dispatch => {
        dispatch(sentrequest())
        axios({
            method: 'GET',
            url: 'http://localhost:5000/competitions/info',
            headers: { 'Authorization': token }
        })
            .then((res) => dispatch(storedata(res.data)))
            .catch((err) => console.log(err))

    }
}
const getteamlists = (id, token) => {
    return dispatch => {
        dispatch(sentteamsrequest())
        axios({
            method: 'GET',
            url: `http://localhost:5000/competitions/teams/${id}`,
            headers: { 'Authorization': token }
        })
            .then((res) => dispatch(teams(res.data)))
            .catch((err) => console.log(err))
    }
}
const toFav = (id, token) => {
    return dispatch => {
        axios({
            method: 'POST',
            url: `http://localhost:5000/auth/addfav/${id}`,
            headers: { 'Authorization': token }
        })
            .then((res) => dispatch(addfav(res.data.id)))
            .catch((err) => console.log(err))
    }
}
const getuserfav = (token) => {
    console.log(token)
    return dispatch => {
        axios({
            method: 'GET',
            url: `http://localhost:5000/auth/addfav/${1}`,
            headers: { 'Authorization': token }
        })
            .then((res) => dispatch(addfavlist(res.data)))
            .catch((err) => console.log(err))

    }
}
export { logindata, logout, singupdata, getcompetitions, getteamlists, toFav, getuserfav }