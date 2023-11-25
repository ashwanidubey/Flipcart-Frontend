import React,{ useState } from 'react'

export default function CardPayment({setIsPaymentSelected}) {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [cardCvv, setCardCvv] = useState('');
    const [cardExpiry, setCardExpiry] = useState(''); 
   
    return (
        <div>
            <form>
                <div className="mb-3">
                    <label htmlFor="cardNumber" className="form-label">
                        Card Number
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="cardNumber"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cardName" className="form-label">
                        Cardholder Name
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="cardName"
                        value={cardName}
                        onChange={(e) => setCardName(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cardCvv" className="form-label">
                        CVV
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="cardCvv"
                        value={cardCvv}
                        onChange={(e) => setCardCvv(e.target.value)}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="cardExpiry" className="form-label">
                        Expiry Date
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="cardExpiry"
                        value={cardExpiry}
                        onChange={(e) => setCardExpiry(e.target.value)}
                    />
                </div>
                <button type="button" className="btn btn-primary" onClick={()=>{setIsPaymentSelected(true)}}>
                    Verify Card Details
                </button>
            </form>
        </div>
    )
}
