
import React, { useState } from 'react';

const Checkoutbackup = () => {
  // State variables
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedAddress, setSelectedAddress] = useState('');
  const [selectedPaymentMode, setSelectedPaymentMode] = useState('');
  const [isProceedButtonEnabled, setProceedButtonEnabled] = useState(false);
  const [showButton,setShowButton]=useState("");
  // State variables for payment forms
  const [upiId, setUpiId] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardName, setCardName] = useState('');
  const [cardCvv, setCardCvv] = useState('');
  const [cardExpiry, setCardExpiry] = useState('');

  // Function to handle login
  const handleLogin = () => {
    setIsLoggedIn(true); // Set to true for the sake of the example
  };

  // Function to handle address selection
  const handleAddressSelection = (address) => {
    setSelectedAddress(address);
    setProceedButtonEnabled(true); // Enable the button after address selection
  };


  // Function to handle payment mode selection
  const handlePaymentMode = (mode) => {
    setSelectedPaymentMode(mode);
    setProceedButtonEnabled(false); // Disable the button until payment details are entered
  };

  // Function to handle UPI form submission
  const handleUpiSubmit = () => {
      setProceedButtonEnabled(true);
  };

  // Function to handle card form submission
  const handleCardSubmit = () => {
     setProceedButtonEnabled(true);
  };

  // Function to handle proceed button click
  const handleProceedButtonClick = () => {
    //console.log('Proceed button clicked!');
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="card" style={{ width: '60%' }}>
          <div className="card-header text-left">
            Step 1: Login
          </div>
          <div className="card-body text-left">
            {isLoggedIn ? (
              <div>
                <p>Login: <span>Ashwani Dubey</span></p>
              </div>
            ) : (
              <button className="btn btn-primary" onClick={handleLogin}>
                Go to Login
              </button>
            )}
          </div>
        </div>
      </div>


      <div className="row justify-content-center mt-4">
        <div className="card" style={{ width: '60%' }}>
          <div className="card-header text-left">
            Step 2: Delivery Address
          </div>
        </div>
        {isLoggedIn && <>
        <div className="card" style={{ width: '60%' }}>
          <div className="card-header text-left">
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="address1"
                name="selectedAddress"
                value="Ashwani Dubey"
                checked={selectedAddress === 'Ashwani Dubey'}
                onChange={() => setShowButton('Ashwani Dubey')}
              />
              <label className="form-check-label" htmlFor="address1">
                Ashwani Dubey 8887802756
                <p>dubey kirana store, sukrauly, sant kabir nagar, 273211</p>
              </label>
            </div>
            {showButton === 'Ashwani Dubey' && (
              <button onClick={() => handleAddressSelection('Ashwani Dubey')}>Select this Address</button>
            )}
          </div>
        </div>
        <div className="card" style={{ width: '60%' }}>
          <div className="card-header text-left">
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="address2"
                name="selectedAddress"
                value="Sunny Dubey"
                checked={selectedAddress === 'Sunny Dubey'}
                onChange={() => setShowButton('Sunny Dubey')}
              />
              <label className="form-check-label" htmlFor="address2">
                Sunny Dubey 8887802756
                <p>dubey kirana store, sukrauly, sant kabir nagar, 273211</p>
              </label>
            </div>
            {showButton === 'Sunny Dubey' && (
              <button onClick={() => handleAddressSelection('Sunny Dubey')}>Select this Address</button>
            )}
          </div>
        </div> 
        <div className="card" style={{ width: '60%' }}>
          + Add New Address
        </div></>}
      </div>

      <div className="row justify-content-center mt-4">
        <div className="card" style={{ width: '60%' }}>
          <div className="card-header text-left">
            Step 3: Payment Options
          </div>
          {selectedAddress &&<>
          <div className="card-body text-left">
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="upiRadio"
                name="paymentMode"
                value="upi"
                checked={selectedPaymentMode === 'upi'}
                onChange={() => handlePaymentMode('upi')}
                disabled={!isLoggedIn}
              />
              <label className="form-check-label" htmlFor="upiRadio">
                UPI
              </label>
            </div>

            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                id="cardsRadio"
                name="paymentMode"
                value="cards"
                checked={selectedPaymentMode === 'cards'}
                onChange={() => handlePaymentMode('cards')}
                disabled={!isLoggedIn}
              />
              <label className="form-check-label" htmlFor="cardsRadio">
                Cards
              </label>
            </div>

            {/* Display respective forms based on the selected payment mode */}
            {selectedPaymentMode === 'upi' && (
                <div>
                  {/* UPI details form */}
                  <form>
                    <div className="mb-3">
                      <label htmlFor="upiId" className="form-label">
                        UPI ID
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="upiId"
                        value={upiId}
                        onChange={(e) => setUpiId(e.target.value)}
                      />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleUpiSubmit}>
                      Verify UPI ID
                    </button>
                  </form>
                </div>
              )}
              {selectedPaymentMode === 'cards' && (
                <div>
                  {/* Card details form */}
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
                    <button type="button" className="btn btn-primary" onClick={handleCardSubmit}>
                      Verify Card Details
                    </button>
                  </form>
                </div>
              )}
            </div></>}
          </div>
        </div>
  
        {/* Proceed Button */}
        <div className="row justify-content-center mt-4">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleProceedButtonClick}
            disabled={!isProceedButtonEnabled}
          >
            Proceed
          </button>
        </div>
      </div>
    );
  };
  
  export default Checkoutbackup;