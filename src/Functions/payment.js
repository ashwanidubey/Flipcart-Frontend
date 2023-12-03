const makepayment = async ( item,token ) => {
    const host = process.env.REACT_APP_HOST

    const UserProduct={
        "product":item,
        "quantity":item.quantity || 1
    }
    
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
       
        const result=await response.json()
        return result;
    } 
    catch (error) {
        return { result: false }
    }
}

export default makepayment ;

