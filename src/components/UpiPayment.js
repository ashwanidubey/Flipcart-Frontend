import React, { useState } from 'react';

export default function UpiPayment({ setIsPaymentSelected }) {
  const [upiId, setUpiId] = useState('');
  const [error, setError] = useState('');

  const verify = () => {
    if (!upiId || !isValidUpiId(upiId)) {
      setError('Invalid UPI ID');
      return;
    }

    setIsPaymentSelected(true);
  };

  const isValidUpiId = (upiId) => {
    return upiId.includes('@');
  };

  return (
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
            onChange={(e) => {
              setUpiId(e.target.value);
              setError(''); // Clear error on change
            }}
          />
          {error && <div className="text-danger">{error}</div>}
        </div>
        <button type="button" className="btn btn-primary" onClick={verify}>
          Verify UPI ID
        </button>
      </form>
    </div>
  );
}
