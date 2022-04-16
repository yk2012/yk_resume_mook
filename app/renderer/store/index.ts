import logger from 'redux-logger'
import RcReduxModel from 'rc-redux-model'
import { createStore, applyMiddleware, combineReducers } from 'redux'
// 引入 model
import globalModel from './globalModel'
import resumeModel from './resumeModel'
// 得到 reduxModel
const reduxModel = new RcReduxModel([globalModel, resumeModel])

// 无侵入式的使用redux
const reducerList = combineReducers(reduxModel.reducers)
// 导出创建的store
export default createStore(reducerList, applyMiddleware(reduxModel.thunk, logger))