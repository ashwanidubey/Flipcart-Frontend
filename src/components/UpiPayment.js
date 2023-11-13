import React,{ useState } from 'react'

export default function UpiPayment({setIsPaymentSelected}) {
  const [upiId, setUpiId] = useState('');    
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
                        onChange={(e) => setUpiId(e.target.value)}
                      />
                    </div>
                    <button type="button" className="btn btn-primary" onClick={()=>{setIsPaymentSelected(true)}}>
                      Verify UPI ID
                    </button>
                  </form>
    </div>
  )
}
