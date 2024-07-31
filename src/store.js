import {configureStore} from '@reduxjs/toolkit'
import rootReducer from './reducers/rootReducer'



const store=configureStore(
    {
    reducer:{
        store:rootReducer
    },
},
)

export default store