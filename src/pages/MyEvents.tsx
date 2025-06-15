import { useContext } from "react";
import { EventContext } from "../context/EventContext";
import EventCard from "../components/EventCard";

const MyEvents = () => {
  const context = useContext(EventContext);
  const user = "current_user@campus.edu";

  if (!context) {
    return <div>Loading...</div>;
  }

  const myEvents = context.userEvents(user);

  return (
    <div>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>
        My Registered Events
      </h2>
      <div className="event-grid">
        {myEvents.length > 0 ? (
          myEvents.map((event) => <EventCard key={event.id} event={event} />)
        ) : (
          <p>You haven't registered for any events yet.</p>
        )}
      </div>
    </div>
  );
};

export default MyEvents;
