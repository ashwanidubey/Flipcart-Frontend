const credentialdata=JSON.parse(localStorage.getItem("credential"))

const initialvalue = {
    productDetails: {},
    credentials:{email:credentialdata.email,name:credentialdata.name,token:credentialdata.token},
    isLoggedin:credentialdata.isLoggedin
};
export default initialvalue;