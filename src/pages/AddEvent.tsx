import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EventContext } from "../context/EventContext";

const AddEvent = () => {
  const context = useContext(EventContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [type, setType] = useState<"academic" | "social" | "career">(
    "academic"
  );
  const [capacity, setCapacity] = useState(50);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (context) {
      context.addEvent({ title, date, location, type, capacity });
      navigate("/");
    }
  };

  return (
    <div className="form-container">
      <h2>Create a New Event</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Title</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Location</label>
          <input
            type="text"
            className="form-control"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Type</label>
          <select
            className="form-control"
            value={type}
            onChange={(e) =>
              setType(e.target.value as "academic" | "social" | "career")
            }
          >
            <option value="academic">Academic</option>
            <option value="social">Social</option>
            <option value="career">Career</option>
          </select>
        </div>
        <div className="form-group">
          <label>Capacity</label>
          <input
            type="number"
            className="form-control"
            value={capacity}
            onChange={(e) => setCapacity(Number(e.target.value))}
            required
          />
        </div>
        <button type="submit" className="submit-btn">
          Add Event
        </button>
      </form>
    </div>
  );
};

export default AddEvent;
