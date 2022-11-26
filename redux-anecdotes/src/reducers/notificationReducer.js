import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: null
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
    reducers: {
        setNotification(state, action) {
            const message = action.payload
            state.message = message
        },
        clearNotification(state, _action) {
            state.message = null
        }
    }
})

export const { setNotification, clearNotification } = notificationSlice.actions
export default notificationSlice.reducer
