import { createStore, combineReducers } from 'redux'
import reducer from "./reducer"
import { reducer as formReducer } from 'redux-form'


const rootReducer = combineReducers({
    reducer:reducer,
    form: formReducer
  })

const store = createStore(rootReducer)

export default store;