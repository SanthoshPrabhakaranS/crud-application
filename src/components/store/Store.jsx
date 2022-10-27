import { configureStore } from '@reduxjs/toolkit'
import ModalSlice from '../features/ModalSlice'
import userDataSlice from '../features/userDataSlice'
import NetworkModalSlice from '../features/NetworkModalSlice'
import networkDataSlice from '../features/networkDataSlice'

const store = configureStore({
    reducer:{
        modal: ModalSlice,
        users: userDataSlice,
        networkModal: NetworkModalSlice,
        networkData: networkDataSlice
    }
})

export default store