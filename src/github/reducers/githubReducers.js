import {GET_GITHUB_REPOSITORY} from '../types'

const initialState = {
    github:[],
    loading:true
}

export default function(state = initialState, action){

    switch(action.type){

        case GET_GITHUB_REPOSITORY:
        return {
            ...state,
            github:action.payload,
            loading:false

        }
        default: return state
    }

}