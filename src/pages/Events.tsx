import { useContext, useState } from "react";
import { EventContext } from "../context/EventContext";
import EventCard from "../components/EventCard";
import FilterButtons from "../components/FilterButtons";

const Events = () => {
  const context = useContext(EventContext);
  const [filter, setFilter] = useState("all");

  if (!context) {
    return <div>Loading...</div>;
  }

  const filteredEvents = context.events
    .filter((event) => filter === "all" || event.type === filter)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return (
    <div>
      <FilterButtons currentFilter={filter} setFilter={setFilter} />
      <div className="event-grid">
        {filteredEvents.map((event) => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default Events;
