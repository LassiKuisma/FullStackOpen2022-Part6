import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: null,
    timer: null,
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
        },
        clearPreviousTimer(state, _action) {
            const timer = state.timer
            if (timer !== null) {
                clearTimeout(timer)
            }
        },
        setTimer(state, action) {
            state.timer = action.payload
        },
    }
})

export const setNotification = (message, duration) => {
    return async dispatch => {
        dispatch(setMessage(message))

        dispatch(clearPreviousTimer())

        const newTimer = setTimeout(() => {
            dispatch(clearMessage())
        }, duration * 1000)

        dispatch(setTimer(newTimer))
    }
}

export const { clearMessage, setMessage, clearPreviousTimer, setTimer } = notificationSlice.actions
export default notificationSlice.reducer
