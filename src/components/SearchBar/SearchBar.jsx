import "./SearchBar.css";
import { FaSearch } from "react-icons/fa";

function SearchBar() {
  return (
    <div className="search">

      <input
        type="text"
        placeholder="Search Football, Cricket, IPL Jerseys..."
      />

      <button>
        <FaSearch />
      </button>

    </div>
  );
}

export default SearchBar;