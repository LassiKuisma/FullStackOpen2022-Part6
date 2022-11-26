import { createSlice } from '@reduxjs/toolkit'
import anecdoteService from '../services/anecdotes'


const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    appendAnecdote(state, action) {
      state.push(action.payload)
    },
    setAnecdotes(_state, action) {
      return action.payload
    },
    updateAnecdote(state, action) {
      const changed = action.payload
      return state.map(anecdote => anecdote.id !== changed.id ? anecdote : changed)
    }
  }
})

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()
    dispatch(setAnecdotes(anecdotes))
  }
}

export const createAnecdote = content => {
  return async dispatch => {
    const newAnecdote = await anecdoteService.createNew(content)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = anecdote => {
  return async dispatch => {
    const newObject = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    const updated = await anecdoteService.update(newObject.id, newObject)
    dispatch(updateAnecdote(updated))
  }
}

export const { setAnecdotes, appendAnecdote, updateAnecdote } = anecdoteSlice.actions
export default anecdoteSlice.reducer
