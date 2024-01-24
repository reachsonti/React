import { legacy_createStore as createStore,applyMiddleware,compose} from 'redux'
//thunk is used to make asyncronus calls
import { thunk } from 'redux-thunk'
import {reducers} from '../reducers'
//by default if we do not mention the name then by default it will take the index.js from reducers folder

//a store is created using createStore of redux. This store will store the data sent by the reducer
//we apply the middleware to use the thunk which is a asynchronus call 
//In React, middleware is typically used to modify, intercept, or augment data or actions before they reach the reducers (in the case of state management libraries like Redux) or components
//compose() is used when you want to pass multiple store enhancers to the store.
//applyMiddleware(thunk) helps to make asyn calls inside the actions
export const store = createStore(
    reducers,
    compose(
        applyMiddleware(thunk)
    )
)
