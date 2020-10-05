import { combineReducers } from 'redux';
import { appReducer } from './appReducer';
import { birdsData } from './birdsDataReducer'

export const rootReducer = combineReducers({
  app: appReducer,
  birdsData: birdsData
})