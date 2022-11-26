import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    message: "Beep boop I'm a notification"
}

const notificationSlice = createSlice({
    name: 'notification',
    initialState,
})

export default notificationSlice.reducer
