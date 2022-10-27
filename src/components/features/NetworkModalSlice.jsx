import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    valid: false,
    formOpen: false,
}

const networkSlice = createSlice({
    name: 'networkModal',
    initialState,
    reducers: {
        validSuccess: (state, action) => {
            state.valid = true
        },
        validFailed: (state, action) => {
            state.valid = false
        },
        openNetworkModal: (state, action) => {
            state.formOpen = true
        },
        closeNetworkModal: (state, action) => {
            state.formOpen = false
        },
}
})


export const { openNetworkModal, closeNetworkModal, openEditModal, closeEditModal, validSuccess } = networkSlice.actions

export default networkSlice.reducer