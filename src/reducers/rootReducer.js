import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { birdsData } from './birdsDataReducer';
import { currentBird } from './currentBirdReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  birdsData: birdsData,
  currentBird: currentBird
})