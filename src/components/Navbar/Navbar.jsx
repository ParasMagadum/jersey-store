import "./Navbar.css";
import { FaShoppingCart, FaHeart, FaUserCircle, FaSearch, FaFutbol } from "react-icons/fa";

function Navbar({
  activePage,
  setActivePage,
  searchQuery,
  setSearchQuery,
  cartCount,
  wishlistCount,
}) {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="nav-logo" onClick={() => setActivePage("home")}>
        <FaFutbol className="logo-icon" />
        <span>Jersey<strong>Vault</strong></span>
      </div>

      {/* Search */}
      <div className="nav-search">
        <FaSearch className="search-icon" />
        <input
          type="text"
          placeholder="Search jerseys, teams, clubs..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Actions */}
      <div className="nav-actions">
        <button
          className={`nav-btn ${activePage === "wishlist" ? "active" : ""}`}
          onClick={() => setActivePage("wishlist")}
          title="Wishlist"
        >
          <FaHeart />
          {wishlistCount > 0 && <span className="badge">{wishlistCount}</span>}
          <span className="btn-label">Wishlist</span>
        </button>

        <button
          className={`nav-btn ${activePage === "cart" ? "active" : ""}`}
          onClick={() => setActivePage("cart")}
          title="Cart"
        >
          <FaShoppingCart />
          {cartCount > 0 && <span className="badge">{cartCount}</span>}
          <span className="btn-label">Cart</span>
        </button>

        <button
          className={`nav-btn profile-btn ${activePage === "profile" ? "active" : ""}`}
          onClick={() => setActivePage("profile")}
          title="Profile"
        >
          <FaUserCircle />
          <span className="btn-label">Profile</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
