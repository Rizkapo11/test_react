import {GET_GITHUB_REPOSITORY, GITHUB_ERROR} from '../types'
import axios from 'axios'

export const getGithub = (user) => async dispatch => {
    
    try{
        const res = await axios.get('https://api.github.com/users/'+user+'/repos')
        dispatch( {
            type: GET_GITHUB_REPOSITORY,
            payload: res.data
        })
    }
    catch(e){
        dispatch( {
            type: GITHUB_ERROR,
            payload: console.log(e),
        })
    }

}