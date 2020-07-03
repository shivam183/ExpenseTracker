export const REGISTER_USER= 'REGISTER_USER'
export const registerUser=user=>({
    type: REGISTER_USER,
    payload: user
})


export const REGISTER_ERROR='REGISTER_ERROR'
export const registerError= error=>({
    type: REGISTER_ERROR,
    payload: error
})