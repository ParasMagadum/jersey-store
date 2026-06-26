import "./FilterPanel.css";
import { FaSlidersH } from "react-icons/fa";

function FilterPanel({
  selectedSport,
  setSelectedSport,
  selectedCategory,
  setSelectedCategory,
  selectedPrice,
  setSelectedPrice,
  selectedRating,
  setSelectedRating,
  clearFilters,
}) {
  return (
    <aside className="filter-panel">
      <div className="filter-header">
        <FaSlidersH />
        <h2>Filters</h2>
      </div>

      {/* Sport */}
      <div className="filter-section">
        <h3>Sport</h3>
        {["All", "Football", "Cricket"].map((s) => (
          <label key={s} className={selectedSport === s ? "checked" : ""}>
            <input
              type="radio"
              name="sport"
              checked={selectedSport === s}
              onChange={() => setSelectedSport(s)}
            />
            {s}
          </label>
        ))}
      </div>

      {/* Category */}
      <div className="filter-section">
        <h3>Category</h3>
        {["All", "Football Club", "Football National", "IPL", "Cricket National"].map((c) => (
          <label key={c} className={selectedCategory === c ? "checked" : ""}>
            <input
              type="radio"
              name="category"
              checked={selectedCategory === c}
              onChange={() => setSelectedCategory(c)}
            />
            {c}
          </label>
        ))}
      </div>

      {/* Price */}
      <div className="filter-section">
        <h3>Price</h3>
        {[
          { label: "All Prices", value: "All" },
          { label: "Under ₹1500", value: "under1500" },
          { label: "₹1500 – ₹2500", value: "1500-2500" },
          { label: "₹2500 – ₹3500", value: "2500-3500" },
          { label: "Above ₹3500", value: "above3500" },
        ].map((p) => (
          <label key={p.value} className={selectedPrice === p.value ? "checked" : ""}>
            <input
              type="radio"
              name="price"
              checked={selectedPrice === p.value}
              onChange={() => setSelectedPrice(p.value)}
            />
            {p.label}
          </label>
        ))}
      </div>

      {/* Rating */}
      <div className="filter-section">
        <h3>Min Rating</h3>
        {[0, 3, 4, 4.5].map((r) => (
          <label key={r} className={selectedRating === r ? "checked" : ""}>
            <input
              type="radio"
              name="rating"
              checked={selectedRating === r}
              onChange={() => setSelectedRating(r)}
            />
            {r === 0 ? "All Ratings" : `${r}★ & above`}
          </label>
        ))}
      </div>

      <button className="clear-btn" onClick={clearFilters}>
        Clear All Filters
      </button>
    </aside>
  );
}

export default FilterPanel;
