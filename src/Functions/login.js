const login = async ( email, password ) => {
    const host = process.env.REACT_APP_HOST

    try {
        const userdata = {  email, password }
        const url = `${host}/auth/login`
        var response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userdata)
        });

        const result=await response.json()
        return result;
    } 
    catch (error) {
        
        return { result: false }
    }
}

export default login ;

