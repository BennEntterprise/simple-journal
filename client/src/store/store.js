import { combineReducers, createStore } from 'redux'

// Bring in Reducers
import JournalReducer from './reducers/journal'

const rootReducer = combineReducers({
    journal: JournalReducer
})


const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store