import React, { useState } from 'react';
import { toast } from 'react-toastify';
export default function Address({SetAddress,setShowAdressForm}) {
  const [address, setAddress] = useState({
    inputAddress: '',
    inputLocality: '',
    inputCity: '',
    inputState: '',
    inputZip: '',
  });

  const [errors, setErrors] = useState({
    inputAddress: '',
    inputCity: '',
    inputState: '',
    inputZip: '',
  });

  const statesInIndia = [
    'Andhra Pradesh',
    'Arunachal Pradesh',
    'Assam',
    'Bihar',
    'Chhattisgarh',
    'Goa',
    'Gujarat',
    'Haryana',
    'Himachal Pradesh',
    'Jharkhand',
    'Karnataka',
    'Kerala',
    'Madhya Pradesh',
    'Maharashtra',
    'Manipur',
    'Meghalaya',
    'Mizoram',
    'Nagaland',
    'Odisha',
    'Punjab',
    'Rajasthan',
    'Sikkim',
    'Tamil Nadu',
    'Telangana',
    'Tripura',
    'Uttar Pradesh',
    'Uttarakhand',
    'West Bengal',
    'Andaman and Nicobar Islands',
    'Chandigarh',
    'Dadra and Nagar Haveli and Daman and Diu',
    'Lakshadweep',
    'Delhi',
    'Puducherry',
  ];

  const validateForm = () => {
    let isValid = true;

    // Validate inputAddress
    if (!address.inputAddress.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, inputAddress: 'Address is required' }));
      isValid = false;
    }

    // Validate inputCity
    if (!address.inputCity.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, inputCity: 'City is required' }));
      isValid = false;
    }

    // Validate inputState
    if (!address.inputState.trim() || address.inputState === 'Choose...') {
      setErrors((prevErrors) => ({ ...prevErrors, inputState: 'Please select a state' }));
      isValid = false;
    }

    // Validate inputZip
    if (!/^\d+$/.test(address.inputZip)) {
      setErrors((prevErrors) => ({ ...prevErrors, inputZip: 'Zip should contain only numbers' }));
      isValid = false;
    }

    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform submission or other actions

      const storedAddresses = JSON.parse(localStorage.getItem('addresses')) || [];
      const updatedAddresses = storedAddresses.map((storedAddress) => ({
        ...storedAddress,
        isSelected: false,
      }));

      const newAddress = {
        ...address,
        isSelected: true,
      };
  
      updatedAddresses.push(newAddress);
      localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
      SetAddress(updatedAddresses)
      setAddress({
        inputAddress: '',
        inputLocality: '',
        inputCity: '',
        inputState: '',
        inputZip: '',
      });
      setShowAdressForm(false)
     
    } else {
      toast('Form validation failed');
    }
  };

  return (
    <form className="row g-3" onSubmit={handleSubmit}>
      <div className="col-12">
        <label htmlFor="inputAddress" className="form-label">
          Address
        </label>
        <input
          type="text"
          className="form-control"
          id="inputAddress"
          placeholder="1234 Main St"
          value={address.inputAddress}
          onChange={(e) => {
            setAddress((prevAddress) => ({ ...prevAddress, inputAddress: e.target.value }));
            setErrors((prevErrors) => ({ ...prevErrors, inputAddress: '' }));
          }}
        />
        {errors.inputAddress && <div className="text-danger">{errors.inputAddress}</div>}
      </div>
      <div className="col-12">
        <label htmlFor="inputAddress2" className="form-label">
          locality
        </label>
        <input
          required
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Apartment, studio, or floor"
          value={address.inputLocality}
          onChange={(e) => setAddress((prevAddress) => ({ ...prevAddress, inputLocality: e.target.value }))}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="inputCity" className="form-label">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="inputCity"
          value={address.inputCity}
          onChange={(e) => {
            setAddress((prevAddress) => ({ ...prevAddress, inputCity: e.target.value }));
            setErrors((prevErrors) => ({ ...prevErrors, inputCity: '' }));
          }}
        />
        {errors.inputCity && <div className="text-danger">{errors.inputCity}</div>}
      </div>
      <div className="col-md-4">
        <label htmlFor="inputState" className="form-label">
          State
        </label>
        <select
          id="inputState"
          className="form-select"
          value={address.inputState}
          onChange={(e) => {
            setAddress((prevAddress) => ({ ...prevAddress, inputState: e.target.value }));
            setErrors((prevErrors) => ({ ...prevErrors, inputState: '' }));
          }}
        >
          <option value="" disabled selected>
            Choose...
          </option>
          {statesInIndia.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
        {errors.inputState && <div className="text-danger">{errors.inputState}</div>}
      </div>
      <div className="col-md-2">
        <label htmlFor="inputZip" className="form-label">
          Zip
        </label>
        <input
          type="text"
          className="form-control"
          id="inputZip"
          value={address.inputZip}
          onChange={(e) => {
            setAddress((prevAddress) => ({ ...prevAddress, inputZip: e.target.value }));
            setErrors((prevErrors) => ({ ...prevErrors, inputZip: '' }));
          }}
        />
        {errors.inputZip && <div className="text-danger">{errors.inputZip}</div>}
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </div>
    </form>
  );
}
