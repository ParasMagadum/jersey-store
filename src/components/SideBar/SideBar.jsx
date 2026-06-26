import "./Sidebar.css";
import { FaFutbol } from "react-icons/fa";
import { GiCricketBat } from "react-icons/gi";

const sports = [
  { label: "All", icon: "🏅" },
  { label: "Football", icon: <FaFutbol /> },
  { label: "Cricket", icon: <GiCricketBat /> },
];

const categories = {
  All: ["All"],
  Football: ["All", "Football Club", "Football National"],
  Cricket: ["All", "IPL", "Cricket National"],
};

function Sidebar({ selectedSport, setSelectedSport }) {
  return (
    <div className="sidebar">
      <div className="sidebar-sports">
        {sports.map((s) => (
          <button
            key={s.label}
            className={`sport-tab ${selectedSport === s.label ? "active" : ""}`}
            onClick={() => setSelectedSport(s.label)}
          >
            <span className="sport-icon">{s.icon}</span>
            <span>{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
