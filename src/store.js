import {createStore, applyMiddleware, combineReducers, compose} from 'redux'
import ReduxThunk from 'redux-thunk'
import reducers from './reducers'
import io from 'socket.io-client'

const socket = io.connect('http://localhost:3002')

socket.on('action', payload => store.dispatch(payload))
socket.on('add_rsvps', payload => store.dispatch(payload))

const reducer = combineReducers(reducers)
const devTools = window.devToolsExtension ? window.devToolsExtension() : f => f

const enhancer = compose(
	applyMiddleware(ReduxThunk),
	devTools
)

const store = createStore(reducer, enhancer)

export default store
