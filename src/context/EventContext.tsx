import { createContext, useState, type ReactNode } from "react";

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  type: "academic" | "social" | "career";
  attendees: string[];
  capacity: number;
}

interface EventContextType {
  events: Event[];
  userEvents: (user: string) => Event[];
  addEvent: (event: Omit<Event, "id" | "attendees">) => void;
  registerForEvent: (eventId: string, user: string) => void;
  cancelRegistration: (eventId: string, user: string) => void;
}

export const EventContext = createContext<EventContextType | undefined>(
  undefined
);

const initialEvents: Event[] = [
  {
    id: "CS-FAIR-2025",
    title: "Tech Career Fair",
    date: "2025-10-15",
    location: "Student Union",
    type: "career",
    attendees: ["mike@campus.edu", "tina@campus.edu"],
    capacity: 100,
  },
  {
    id: "SOCIAL-MIXER-2025",
    title: "Welcome Week Social Mixer",
    date: "2025-09-05",
    location: "Campus Green",
    type: "social",
    attendees: [],
    capacity: 200,
  },
  {
    id: "AI-WORKSHOP-2025",
    title: "AI Workshop",
    date: "2025-11-20",
    location: "Engineering Building, Room 101",
    type: "academic",
    attendees: ["john@campus.edu"],
    capacity: 50,
  },
  // --- Add these to your initialEvents array in EventContext.tsx ---

  {
    id: "NLP-SEMINAR-2025",
    title: "Advanced NLP: Transformer Architectures",
    date: "2025-10-22",
    location: "Science Hall, Room 301",
    type: "academic",
    attendees: ["tina@campus.edu", "habeeb@campus.edu"],
    capacity: 40,
  },
  {
    id: "STARTUP-PITCH-2025",
    title: "Annual Startup Pitch Night",
    date: "2025-11-05",
    location: "Innovation Hub Auditorium",
    type: "career",
    attendees: ["mike@campus.edu", "sandra@campus.edu", "chinedu@campus.edu"],
    capacity: 150,
  },
  {
    id: "MOVIE-NIGHT-2025",
    title: "Outdoor Movie Night: End of Semester Special",
    date: "2025-12-10",
    location: "Campus Green",
    type: "social",
    attendees: [],
    capacity: 300,
  },
  {
    id: "CV-WORKSHOP-2025",
    title: "Computer Vision Workshop with Body.Scratch",
    date: "2025-11-18",
    location: "Online via Zoom",
    type: "academic",
    attendees: ["habeeb@campus.edu"],
    capacity: 75,
  },
  {
    id: "ALUMNI-GALA-2025",
    title: "Homecoming Alumni Gala",
    date: "2025-10-25",
    location: "Grand Ballroom, University Hotel",
    type: "social",
    attendees: ["president@campus.edu"],
    capacity: 250,
  },
];

export const EventProvider = ({ children }: { children: ReactNode }) => {
  const [events, setEvents] = useState<Event[]>(initialEvents);

  const addEvent = (event: Omit<Event, "id" | "attendees">) => {
    const newEvent = {
      ...event,
      id: `evt-${Date.now()}`,
      attendees: [],
    };
    setEvents((prev) => [...prev, newEvent]);
  };

  const registerForEvent = (eventId: string, user: string) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId &&
        event.attendees.length < event.capacity &&
        !event.attendees.includes(user)
          ? { ...event, attendees: [...event.attendees, user] }
          : event
      )
    );
  };

  const cancelRegistration = (eventId: string, user: string) => {
    setEvents((prev) =>
      prev.map((event) =>
        event.id === eventId
          ? {
              ...event,
              attendees: event.attendees.filter(
                (attendee) => attendee !== user
              ),
            }
          : event
      )
    );
  };

  const userEvents = (user: string) => {
    return events.filter((event) => event.attendees.includes(user));
  };

  return (
    <EventContext.Provider
      value={{
        events,
        userEvents,
        addEvent,
        registerForEvent,
        cancelRegistration,
      }}
    >
      {children}
    </EventContext.Provider>
  );
};
