export const PRODUCTDESC = 'PRODUCTDESC';
export const CREDENTIALS = 'CREDENTIALS'
export const ISLOGGEDIN = 'ISLOGGEDIN'
// Action creators

export const productdesc=(data)=>({
    type: PRODUCTDESC,
    data: data
})

export const credentials=(data)=>{
    console.log(data)
    return ({
    type: CREDENTIALS,
    data: data
})}

export const loggedin=(data)=>({
    type: ISLOGGEDIN,
    data: data
})