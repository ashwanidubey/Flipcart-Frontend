import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { paymentDetails,addToCart ,unsetIsHome} from '../State/actions';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
export default function CardDesc() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isHome =  useSelector((state) => state.isHome);
  const productDetails = useSelector((state) => state.productDetails);
 useEffect(()=>{
 
  if(isHome)
     dispatch(unsetIsHome())
 })
  const handleAddToCart = () => {
    toast("Item added to cart");
    dispatch(addToCart(productDetails))
  };

  const handleBuyNow = () => {
     //alert("buy now")
    const paymentdetailsobject={
      paymentPrice:productDetails.Price,
      paymentItems:[productDetails]
    }
    dispatch(paymentDetails(paymentdetailsobject))
    localStorage.setItem("payment","true")
    navigate('/checkout');
  };

  if (!productDetails) {

    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Left Side (Image and Buttons) */}
        <div className="col-md-6">
          <img src={productDetails.Image} alt={productDetails.Title} className="img-fluid" />
          <div className="mt-3">
            <button className="btn btn-primary me-2" onClick={handleAddToCart}>
              Add to Cart
            </button>
            <button className="btn btn-success" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>

        {/* Right Side (Product Details) */}
        <div className="col-md-6" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
          <h2>{productDetails.Title}</h2>
          <p>{productDetails.Description}</p>
          <div className="mb-3">
            <span className="text-primary">{productDetails.Category}</span>
            <span className="text-muted">{productDetails.Sub_Category}</span>
          </div>
          <div className="mb-3">
            <span className="text-success">{productDetails.Stars} Stars</span>
            <span className="text-secondary">{productDetails.Ratings} Ratings & {productDetails.Reviews} Reviews</span>
          </div>
          <div className="mb-3">
            <span className="text-warning">Extra ₹100 off</span>
          </div>
          <div className="mb-3">
            <span className="text-danger">Price: ₹{productDetails.Price} </span>
          </div>
          <div className="mb-3">
            <span className="text-secondary">+ ₹99 Secured Packaging Fee</span>
          </div>
          <div className="mb-3">
            <span className="text-primary">Available offers</span>
          </div>
          <ul>
            <li>Bank OfferExtra ₹250 off on SBI Credit Card and Credit EMI Txns on Net Cart Value of ₹24,990 and aboveT&C</li>
            <li>Bank OfferAdditional ₹600 Off On SBI Credit and Debit Card TransactionsT&C</li>
            <li>Bank Offer10% Instant Discount on SBI Credit Card EMI Txns, up to ₹1500, on orders of ₹5,000 and aboveT&C</li>
            {/* Add more offers as needed */}
          </ul>
          <div className="mb-3">
            <span className="text-info">Special PriceGet extra ₹10,00 off (price inclusive of cashback/coupon)T&C</span>
          </div>
          <div className="mb-3">
            <span>View 10 more offers</span>
          </div>
          <div className="mb-3">
            <span className="text-success">1 Year Manufacturing WarrantyKnow More</span>
          </div>
        </div>
      </div>
    </div>
  );
}
