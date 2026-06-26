import "./ProfileMenu.css";
import {
  FaUserCircle,
  FaBoxOpen,
  FaHeart,
  FaShoppingCart,
  FaMapMarkerAlt,
  FaCreditCard,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  { icon: <FaBoxOpen />, label: "My Orders", badge: "3" },
  { icon: <FaHeart />, label: "Wishlist" },
  { icon: <FaShoppingCart />, label: "Cart" },
  { icon: <FaMapMarkerAlt />, label: "Saved Addresses" },
  { icon: <FaCreditCard />, label: "Payment Methods" },
  { icon: <FaCog />, label: "Account Settings" },
];

function ProfileMenu() {
  return (
    <div className="profile-page">
      <div className="profile-card">

        <div className="profile-header">
          <div className="avatar-ring">
            <FaUserCircle className="profile-icon" />
          </div>
          <h2>Paras Magadum</h2>
          <p>paras@gmail.com</p>
          <span className="member-badge">⚡ Premium Member</span>
        </div>

        <div className="profile-menu">
          {menuItems.map((item) => (
            <div className="menu-item" key={item.label}>
              <span className="menu-icon">{item.icon}</span>
              <span className="menu-label">{item.label}</span>
              {item.badge && (
                <span className="menu-badge">{item.badge}</span>
              )}
              <span className="menu-arrow">›</span>
            </div>
          ))}

          <div className="menu-item logout">
            <span className="menu-icon"><FaSignOutAlt /></span>
            <span className="menu-label">Logout</span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProfileMenu;
