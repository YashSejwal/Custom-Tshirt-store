import React, { useContext } from "react";
import { MdClose } from "react-icons/md";
// import { BsCartX } from "react-icons/bs";
import { Context } from "../../utils/context";
import CartItem from "./CartItem/CartItem";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "../../utils/api";
import "./Cart.css"
import "./Cart.scss";
import BannerImg from "../../assets/cart.png";
import BannerImg2 from "../../assets/cartIcon.png";
import BannerImg3 from "../../assets/storeIcon.png";
import {Link} from 'react-router-dom';
const Cart = () => {
    const { cartItems, setShowCart, cartSubTotal } = useContext(Context);

    const stripePromise = loadStripe(
        process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY
    );

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;
            const res = await makePaymentRequest.post("/api/orders", {
                products: cartItems,
            });
            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id,
            });
        } catch (err) {
            console.log(err);
        }
    };
    const { cartCount} = useContext(Context);

    return (
        <div className="cart-panel">
            <div
                className="opac-layer"
                onClick={() => setShowCart(false)}
            ></div>
            <div className="cart-content">
                <div className="cart-header">
                    <span className="heading">Shopping Cart</span>
                    <span
                        className="close-btn"
                        onClick={() => setShowCart(false)}
                    >
                        <MdClose className="close-btn" />
                        <span className="text">close</span>
                    </span>
                </div>
                <div className="productImg"  style={{justifyContent:"center",display:"block",marginLeft:"70px",marginTop:"50px"}}>
                <img className="banner-img" src={BannerImg}  style={{ height:"250px",width:"250px", justifyContent:"center",display:"flex"}}
                alt="Coming Soon"/>
                </div>
                {!cartItems.length && (
                    <div className="empty-cart">
                        {/* <BsCartX /> */}
                        <span>TOTAL AMOUNT  : Rs. 1499</span>
                        <div className="cartButtons" style={{flexDirection:"column"}}>
                        <button className="return-cta" id="shopButton" onClick={() => {}}>
                            RETURN TO SHOP <img src={BannerImg3} style={{height:"30px", width:"30px", marginLeft:"5px"}}  alt=""/>
                        </button> &nbsp;
                        <Link to="/checkout">
                            <button className="return-cta" id="shopButton" onClick={() => {}}>
                            
                            BUY NOW <img src={BannerImg2} style={{height:"25px", width:"25px", marginLeft:"10px"}} alt="" /> 
                            </button>
                        </Link>
                        </div>
                    </div>
                )}

                {!!cartItems.length && (
                    <>
                        <CartItem />
                        <div className="cart-footer">
                            <div className="subtotal">
                                <span className="text">Subtotal:</span>
                                <span className="text total">
                                    &#8377;{cartSubTotal}
                                </span>
                            </div>
                            <div className="button">
                                <button
                                    className="checkout-cta"
                                    onClick={handlePayment}
                                >
                                    Checkout
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default Cart;
