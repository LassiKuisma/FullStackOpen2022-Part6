import { configureStore } from '@reduxjs/toolkit'
import anecdoteReducer from './reducers/anecdoteReducer'

const createStore = () => {
    return configureStore({
        reducer: {
            anecdotes: anecdoteReducer
        }
    })
}

export default createStore
