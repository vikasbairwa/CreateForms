import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'radio',
    initialState: {
        radio: {},
        inputData:null
    },
    reducers: {
        add: (state, action) => {
            console.log(action.payload)
            const a = action.payload.key;
            const b = action.payload.value;
            const temp = {}
            temp[a] = b;
            console.log(state.radio[a])
            if(state.radio[a]!==null){
                state.radio[a] = b;
            }else{
                state.radio = { ...state.radio, ...temp }
            }
        },
        inputData: (state,action) => {
            state.inputData = action.payload
        },
        del: (state) => {
            state.radio ={}
        },
        delKey: (state, action) => {
            delete state.radio[action.payload]
        },
    },
})

export const { add, inputData, del, delKey } = slice.actions
export const addData = (el) => dispatch => {
    dispatch(add(el))

}
export const inputJsonData = (el) => dispatch => {
    dispatch(inputData(el))
}
export const deleteData = () => dispatch => {
    dispatch(del())
}
export const delkey = (el) => dispatch => {
    dispatch(delKey(el))
}


export default slice.reducer