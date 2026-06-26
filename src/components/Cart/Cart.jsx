import "./Cart.css";
import { FaShoppingCart, FaTrash, FaArrowLeft } from "react-icons/fa";

function Cart({ cartItems, increaseQty, decreaseQty, removeFromCart }) {
  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );
  const delivery = cartItems.length > 0 ? 99 : 0;
  const total = subtotal + delivery;
  const savings = cartItems.reduce(
    (s, i) => s + (i.oldPrice - i.price) * i.quantity,
    0
  );

  return (
    <div className="cart-page">
      <div className="cart-left">
        <div className="cart-title">
          <FaShoppingCart />
          <h2>Shopping Cart</h2>
          <span className="cart-count">{cartItems.length} items</span>
        </div>

        {cartItems.length === 0 ? (
          <div className="empty-cart">
            <span className="empty-cart-icon">🛒</span>
            <h3>Your cart is empty</h3>
            <p>Add jerseys from the store to get started</p>
          </div>
        ) : (
          cartItems.map((item) => (
            <div className="cart-item" key={item.id}>
              <div className="cart-item-img">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="cart-details">
                <p className="cart-team">{item.team}</p>
                <h3>{item.name}</h3>
                <p className="cart-category">{item.category}</p>

                <div className="cart-price-row">
                  <span className="cart-price">₹{item.price.toLocaleString()}</span>
                  <span className="cart-old-price">₹{item.oldPrice.toLocaleString()}</span>
                  <span className="cart-item-saving">
                    Save ₹{(item.oldPrice - item.price).toLocaleString()}
                  </span>
                </div>

                <div className="quantity-box">
                  <button onClick={() => decreaseQty(item.id)}>−</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => increaseQty(item.id)}>+</button>
                  <span className="item-subtotal">
                    = ₹{(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              </div>

              <button className="delete-btn" onClick={() => removeFromCart(item.id)}>
                <FaTrash />
              </button>
            </div>
          ))
        )}
      </div>

      {/* Price summary — always visible */}
      <div className="cart-right">
        <h2>Price Details</h2>

        <div className="price-row">
          <span>Price ({cartItems.reduce((s, i) => s + i.quantity, 0)} items)</span>
          <span>₹{(subtotal + savings).toLocaleString()}</span>
        </div>

        <div className="price-row discount-row">
          <span>Discount</span>
          <span className="savings-amt">− ₹{savings.toLocaleString()}</span>
        </div>

        <div className="price-row">
          <span>Delivery</span>
          <span className={delivery === 0 ? "free-delivery" : ""}>
            {delivery === 0 ? "FREE" : `₹${delivery}`}
          </span>
        </div>

        <div className="price-divider" />

        <div className="price-row total-row">
          <span>Total Amount</span>
          <span>₹{total.toLocaleString()}</span>
        </div>

        {savings > 0 && (
          <p className="savings-note">
            🎉 You save ₹{savings.toLocaleString()} on this order!
          </p>
        )}

        <button
          className="checkout-btn"
          disabled={cartItems.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
