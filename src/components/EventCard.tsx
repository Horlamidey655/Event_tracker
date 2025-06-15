import { useContext } from "react";
import { type Event, EventContext } from "../context/EventContext";

interface EventCardProps {
  event: Event;
}

const EventCard = ({ event }: EventCardProps) => {
  const context = useContext(EventContext);
  const user = "current_user@campus.edu";

  const isRegistered = event.attendees.includes(user);
  const isFull = event.attendees.length >= event.capacity;

  const handleRegister = () => {
    if (context) {
      context.registerForEvent(event.id, user);
    }
  };

  const handleCancel = () => {
    if (context) {
      context.cancelRegistration(event.id, user);
    }
  };

  return (
    <div className="event-card">
      <div className="event-card-header">
        <div className="event-card-date">
          {new Date(event.date).toDateString()}
        </div>
        <div className={`event-type-badge ${event.type}`}>{event.type}</div>
      </div>
      <div className="event-card-body">
        <h3 className="event-card-title">{event.title}</h3>
        <p className="event-card-location">{event.location}</p>
      </div>
      <div className="event-card-footer">
        <div className="attendance-counter">
          {event.capacity - event.attendees.length} spots left
        </div>
        {isRegistered ? (
          <button className="join-btn cancel" onClick={handleCancel}>
            Cancel
          </button>
        ) : (
          <button
            className="join-btn join"
            onClick={handleRegister}
            disabled={isFull}
          >
            {isFull ? "Full" : "Join"}
          </button>
        )}
      </div>
    </div>
  );
};

export default EventCard;
