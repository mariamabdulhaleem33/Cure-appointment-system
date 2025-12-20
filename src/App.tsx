import { BrowserRouter, Route, Routes } from "react-router-dom";
import Booking from "./components/create_booking/Booking";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Booking />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
