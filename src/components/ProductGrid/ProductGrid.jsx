import "./ProductGrid.css";
import ProductCard from "../ProductCard/ProductCard";

function ProductGrid({ jerseys, addToCart, toggleWishlist, isWishlisted, cartItems }) {
  if (jerseys.length === 0) {
    return (
      <div className="empty-grid">
        <span className="empty-icon">🔍</span>
        <h3>No jerseys found</h3>
        <p>Try adjusting your filters or search query.</p>
      </div>
    );
  }

  return (
    <div className="product-grid">
      {jerseys.map((jersey) => (
        <ProductCard
          key={jersey.id}
          jersey={jersey}
          addToCart={addToCart}
          toggleWishlist={toggleWishlist}
          isWishlisted={isWishlisted}
          cartItems={cartItems}
        />
      ))}
    </div>
  );
}

export default ProductGrid;
