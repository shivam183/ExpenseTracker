import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { PersistedReducer } from './Reducers'
import ReduxThunk from 'redux-thunk'

export const ConfigureStore = () => createStore(PersistedReducer, composeWithDevTools(applyMiddleware(ReduxThunk)))