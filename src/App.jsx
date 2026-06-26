import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/SideBar/SideBar";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import FilterPanel from "./components/FilterPanel/FilterPanel";
import Cart from "./components/Cart/Cart.jsx";
import Wishlist from "./components/Wishlist/Wishlist";
import ProfileMenu from "./components/ProfileMenu/ProfileMenu";
import jerseys from "./data/Jerseys.js";

function App() {
  // Page routing: "home" | "cart" | "wishlist" | "profile"
  const [activePage, setActivePage] = useState("home");

  // Search & filter state
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSport, setSelectedSport] = useState("All");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedRating, setSelectedRating] = useState(0);

  // Cart state
  const [cartItems, setCartItems] = useState([]);

  // Wishlist state
  const [wishlistItems, setWishlistItems] = useState([]);

  // ---- Cart helpers ----
  const addToCart = (jersey) => {
    setCartItems((prev) => {
      const exists = prev.find((i) => i.id === jersey.id);
      if (exists) {
        return prev.map((i) =>
          i.id === jersey.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      }
      return [...prev, { ...jersey, quantity: 1 }];
    });
  };

  const increaseQty = (id) =>
    setCartItems((prev) =>
      prev.map((i) => (i.id === id ? { ...i, quantity: i.quantity + 1 } : i))
    );

  const decreaseQty = (id) =>
    setCartItems((prev) =>
      prev
        .map((i) => (i.id === id ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    );

  const removeFromCart = (id) =>
    setCartItems((prev) => prev.filter((i) => i.id !== id));

  // ---- Wishlist helpers ----
  const toggleWishlist = (jersey) => {
    setWishlistItems((prev) => {
      const exists = prev.find((i) => i.id === jersey.id);
      return exists ? prev.filter((i) => i.id !== jersey.id) : [...prev, jersey];
    });
  };

  const isWishlisted = (id) => wishlistItems.some((i) => i.id === id);

  // ---- Filtered products ----
  const filtered = jerseys.filter((j) => {
    const matchSearch =
      j.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      j.team.toLowerCase().includes(searchQuery.toLowerCase());
    const matchSport = selectedSport === "All" || j.sport === selectedSport;
    const matchCat =
      selectedCategory === "All" || j.category === selectedCategory;
    const matchPrice =
      selectedPrice === "All" ||
      (selectedPrice === "under1500" && j.price < 1500) ||
      (selectedPrice === "1500-2500" && j.price >= 1500 && j.price <= 2500) ||
      (selectedPrice === "2500-3500" && j.price > 2500 && j.price <= 3500) ||
      (selectedPrice === "above3500" && j.price > 3500);
    const matchRating = j.rating >= selectedRating;
    return matchSearch && matchSport && matchCat && matchPrice && matchRating;
  });

  const clearFilters = () => {
    setSelectedSport("All");
    setSelectedCategory("All");
    setSelectedPrice("All");
    setSelectedRating(0);
    setSearchQuery("");
  };

  return (
    <div className="app">
      <Navbar
        activePage={activePage}
        setActivePage={setActivePage}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        cartCount={cartItems.reduce((s, i) => s + i.quantity, 0)}
        wishlistCount={wishlistItems.length}
      />

      {activePage === "home" && (
        <div className="main-layout">
          <FilterPanel
            selectedSport={selectedSport}
            setSelectedSport={setSelectedSport}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            selectedPrice={selectedPrice}
            setSelectedPrice={setSelectedPrice}
            selectedRating={selectedRating}
            setSelectedRating={setSelectedRating}
            clearFilters={clearFilters}
          />
          <div className="content-area">
            <Sidebar
              selectedSport={selectedSport}
              setSelectedSport={setSelectedSport}
            />
            <ProductGrid
              jerseys={filtered}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isWishlisted={isWishlisted}
              cartItems={cartItems}
            />
          </div>
        </div>
      )}

      {activePage === "cart" && (
        <Cart
          cartItems={cartItems}
          increaseQty={increaseQty}
          decreaseQty={decreaseQty}
          removeFromCart={removeFromCart}
        />
      )}

      {activePage === "wishlist" && (
        <Wishlist
          wishlistItems={wishlistItems}
          toggleWishlist={toggleWishlist}
          addToCart={addToCart}
        />
      )}

      {activePage === "profile" && <ProfileMenu />}
    </div>
  );
}

export default App;
