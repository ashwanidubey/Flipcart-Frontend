const makepayment = async ( item,token ) => {
    const host = process.env.REACT_APP_HOST

    const UserProduct={
        "product":item,
        "quantity":item.quantity || 1
    }
    console.log("UserProduct",UserProduct)
    try {
        const url = `${host}/orders/placeorder`
        var response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "token": token
            },
            body: JSON.stringify(UserProduct)
        });
       
        console.log("mytoken ",token )
        console.log(response)
        const result=await response.json()
        console.log(result)
        return result;
    } 
    catch (error) {
        console.error('Error in payment:', error);
        return { result: false }
    }
}

export default makepayment ;

