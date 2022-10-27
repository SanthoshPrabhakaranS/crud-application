import { createSlice } from "@reduxjs/toolkit";
const initialState = [{
    id:'1',
    networkName: 'Airtel',
    description:'Fastest 4G network'
}]

const networkDataSlice = createSlice({
    name:'networkData',
    initialState,
    reducers: {
        addNetwork: (state, action) => {
            state.push(action.payload)
        },
        updateNetwork: (state, action) => {
            const { id, networkName, description } = action.payload
            const existingUser = state.find(user => user.id === id)
            if(existingUser){
                existingUser.networkName = networkName
                existingUser.description = description
            }
        },

        deleteNetwork: (state, action) => {
            const { id } = action.payload
            const existingUser = state.find(network => network.id === id)
            if(existingUser){
                return state.filter(network => network.id !== id)
            }
        },
    }
})

export default networkDataSlice.reducer

export const { addNetwork, deleteNetwork, updateNetwork } = networkDataSlice.actions