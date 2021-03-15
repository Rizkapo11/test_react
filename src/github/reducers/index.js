import { combineReducers } from 'redux'
import githubReducers from './githubReducers'

export default combineReducers({
  github: githubReducers
})