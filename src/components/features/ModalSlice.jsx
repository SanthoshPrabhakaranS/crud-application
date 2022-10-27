import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    valid: false,
    formOpen: false,
    deleteModal: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        validSuccess: (state) => {
            state.valid = true
        },
        validFailed: (state) => {
            state.valid = false
        },
        openModal: (state) => {
            state.formOpen = true
        },
        closeModal: (state) => {
            state.formOpen = false
        },
        openDeleteModal: (state) => {
            state.deleteModal = true
        },
        closeDeleteModal: (state) => {
            state.deleteModal = false
        },
}
})


export const { openModal, closeModal, openEditModal, closeEditModal, validSuccess, openDeleteModal, closeDeleteModal } = modalSlice.actions

export default modalSlice.reducer