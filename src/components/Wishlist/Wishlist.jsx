import "./Wishlist.css";
import { FaHeart, FaShoppingCart, FaTrash } from "react-icons/fa";

function Wishlist({ wishlistItems, toggleWishlist, addToCart }) {
  return (
    <div className="wishlist-page">
      <div className="wishlist-header">
        <FaHeart />
        <h2>My Wishlist</h2>
        <span className="wl-count">{wishlistItems.length} items</span>
      </div>

      {wishlistItems.length === 0 ? (
        <div className="empty-wishlist">
          <span className="empty-wl-icon">🤍</span>
          <h3>Your wishlist is empty</h3>
          <p>Tap the heart icon on any jersey to save it here</p>
        </div>
      ) : (
        <div className="wishlist-grid">
          {wishlistItems.map((item) => (
            <div className="wishlist-card" key={item.id}>
              <div className="wl-img-wrap">
                <img src={item.image} alt={item.name} />
              </div>

              <div className="wishlist-info">
                <p className="wl-team">{item.team}</p>
                <h3>{item.name}</h3>
                <p className="wl-category">{item.category}</p>

                <div className="wl-price-row">
                  <span className="wl-price">₹{item.price.toLocaleString()}</span>
                  <span className="wl-old">₹{item.oldPrice.toLocaleString()}</span>
                </div>

                <div className="wishlist-buttons">
                  <button className="wl-cart-btn" onClick={() => addToCart(item)}>
                    <FaShoppingCart /> Add to Cart
                  </button>
                  <button className="wl-remove-btn" onClick={() => toggleWishlist(item)}>
                    <FaTrash />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Wishlist;
