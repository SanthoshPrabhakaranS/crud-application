import { createSlice } from "@reduxjs/toolkit";
let initialState = [{
    id:'1',
    username:'Santhosh',
    role:'Super-admin',
    status:'Active',
    password:'123',
    confirmPassword:'123',
    data:'12345',
    image:'https://websta.me/wp-content/uploads/2020/11/Chevron-1024x1024.jpg'
}]

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers: {
        addUser: (state, action) => {
            state.push(action.payload)
        },
        updateUser: (state, action) => {
            const { id, username, role, status, password, confirmPassword, data, image } = action.payload
            const existingUser = state.find(user => user.id === id)
            if(existingUser){
                existingUser.username = username
                existingUser.role = role
                existingUser.status = status
                existingUser.password = password
                existingUser.confirmPassword = confirmPassword
                existingUser.data = data
                existingUser.image = image
            }

        },
        deleteUser: (state, action) => {
            const { id } = action.payload
            const existingUser = state.find(user => user.id === id)
            if(existingUser){
                return state.filter(user => user.id !== id)
            }
        },
        sortingUser : (state, action) => {
         if( 'ASC' === action.payload ){
            console.log('Ascending Done');
            console.log(initialState);
            const sorted = [...initialState].sort((a,b) =>
                (a.username.toLowerCase() > b.username.toLowerCase()) ? 1 : -1
            )
            
            initialState = sorted
            console.log(initialState);
        }
        
    }}
})

export default userSlice.reducer

export const { addUser, editUser, deleteUser, updateUser, sortingUser } = userSlice.actions