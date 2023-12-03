import React, { useState } from 'react';

export default function CardPayment({ setIsPaymentSelected }) {
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');
  const [errors, setErrors] = useState({
    cardNumber: '',
    cardName: '',
    cardCvv: '',
    cardExpiry: '',
  });

  const verify = () => {
    // Validate cardNumber (assuming 12 digits for simplicity)
    if (!/^\d{12}$/.test(cardNumber)) {
      setErrors((prevErrors) => ({ ...prevErrors, cardNumber: 'Card number should be 12 digits' }));
      return;
    }

    // Validate cardName (at least 4 characters)
    if (cardName.length < 4) {
      setErrors((prevErrors) => ({ ...prevErrors, cardName: 'Cardholder name should be at least 4 characters' }));
      return;
    }

    // Validate cardCvv (3 digits)
    if (!/^\d{3}$/.test(cardCvv)) {
      setErrors((prevErrors) => ({ ...prevErrors, cardCvv: 'CVV should be 3 digits' }));
      return;
    }

    // Validate cardExpiry (expiry should be more than current date)
    const currentDate = new Date().toISOString().split('T')[0];
    if (cardExpiry <= currentDate) {
      setErrors((prevErrors) => ({ ...prevErrors, cardExpiry: 'Expiry date should be in the future' }));
      return;
    }

    // If all validations pass, set isPaymentSelected to true
    setIsPaymentSelected(true);
  };

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
            onChange={(e) => {
              setCardNumber(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, cardNumber: '' })); // Clear error on change
            }}
          />
          {errors.cardNumber && <div className="text-danger">{errors.cardNumber}</div>}
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
            onChange={(e) => {
              setCardName(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, cardName: '' })); // Clear error on change
            }}
          />
          {errors.cardName && <div className="text-danger">{errors.cardName}</div>}
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
            onChange={(e) => {
              setCardCvv(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, cardCvv: '' })); // Clear error on change
            }}
          />
          {errors.cardCvv && <div className="text-danger">{errors.cardCvv}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="cardExpiry" className="form-label">
            Expiry Date
          </label>
          <input
            type="date"
            className="form-control"
            id="cardExpiry"
            value={cardExpiry}
            onChange={(e) => {
              setCardExpiry(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, cardExpiry: '' })); // Clear error on change
            }}
          />
          {errors.cardExpiry && <div className="text-danger">{errors.cardExpiry}</div>}
        </div>
        <button type="button" className="btn btn-primary" onClick={verify}>
          Verify Card Details
        </button>
      </form>
    </div>
  );
}
