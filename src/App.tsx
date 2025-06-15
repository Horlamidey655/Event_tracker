import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Events from "./pages/Events.tsx";
import AddEvent from "./pages/AddEvent";
import MyEvents from "./pages/MyEvents";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<Events />} />
          <Route path="/add-event" element={<AddEvent />} />
          <Route path="/my-events" element={<MyEvents />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
