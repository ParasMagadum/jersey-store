import "./ProductCard.css";
import { FaHeart, FaStar, FaShoppingCart, FaCheck } from "react-icons/fa";

function ProductCard({ jersey, addToCart, toggleWishlist, isWishlisted, cartItems }) {
  const inCart = cartItems?.some((i) => i.id === jersey.id);
  const wishlisted = isWishlisted(jersey.id);

  const discount = Math.round(((jersey.oldPrice - jersey.price) / jersey.oldPrice) * 100);

  return (
    <div className="product-card">

      {/* Discount badge */}
      {discount > 0 && (
        <span className="discount-badge">{discount}% OFF</span>
      )}

      {/* Wishlist button */}
      <button
        className={`wishlist-btn ${wishlisted ? "wishlisted" : ""}`}
        onClick={() => toggleWishlist(jersey)}
        title={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <FaHeart />
      </button>

      {/* Image */}
      <div className="card-image-wrap">
        <img
          className="product-image"
          src={jersey.image}
          alt={jersey.name}
        />
      </div>

      {/* Info */}
      <div className="product-info">

        <p className="team-label">{jersey.team}</p>
        <h3 className="product-name">{jersey.name}</h3>

        <div className="rating-row">
          <FaStar />
          <span>{jersey.rating}</span>
          <span className="category-tag">{jersey.category}</span>
        </div>

        <div className="price-row">
          <span className="new-price">₹{jersey.price.toLocaleString()}</span>
          <span className="old-price">₹{jersey.oldPrice.toLocaleString()}</span>
        </div>

        <button
          className={`cart-btn ${inCart ? "in-cart" : ""}`}
          onClick={() => addToCart(jersey)}
        >
          {inCart ? (
            <>
              <FaCheck /> Added
            </>
          ) : (
            <>
              <FaShoppingCart /> Add to Cart
            </>
          )}
        </button>

      </div>
    </div>
  );
}

export default ProductCard;
