import { transactions as transactionReducer } from './transaction.reducer'
import { combineReducers } from 'redux'
import { login as loginReducer } from './login.reducer'
import { register as registerReducer } from './register.reducer'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import storage from 'redux-persist/lib/storage/session'
import { persistReducer } from 'redux-persist'


const persistConfig={
    key:'root',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist:['loginReducer']
}

const reducers = { transactionReducer, loginReducer, registerReducer };

const rootReducer=combineReducers(reducers)


export const PersistedReducer = persistReducer(persistConfig, rootReducer); 