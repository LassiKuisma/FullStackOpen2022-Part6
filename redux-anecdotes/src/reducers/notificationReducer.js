import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: null
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setMessage(state, action) {
            const message = action.payload
            state.message = message
        },
        clearMessage(state, _action) {
            state.message = null
        }
    }
})

export const setNotification = (message, duration) => {
    return async dispatch => {
        dispatch(setMessage(message))

        setTimeout(() => {
            dispatch(clearMessage())
        }, duration * 1000)
    }
}

export const { clearMessage, setMessage } = notificationSlice.actions
export default notificationSlice.reducer
