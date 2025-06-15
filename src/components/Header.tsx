import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <span>📅</span>
        <span>Campus Events</span>
      </div>
      <nav className="header-nav">
        <NavLink to="/">All Events</NavLink>
        <NavLink to="/my-events">My Events</NavLink>
        <NavLink to="/add-event" className="add-event-btn">
          Add Event
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
