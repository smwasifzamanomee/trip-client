import { Route, Routes } from "react-router-dom";
import AllTrip from "./components/AllTrip";
import DropDown from "./components/DropDown";
import Home from "./components/Home";
import RequestId from "./components/RequestId";

import TripRequest from "./components/TripRequest";
import UserModel from "./components/UserModel";

function App() {
  return (
    <>

    <Routes>

      <Route path="/" element={<Home/>}>
      </Route>
      <Route path="/user-model" element={<UserModel/>}/>
      <Route path="/trip-request" element={<TripRequest/>}/>
      <Route path="/drop-down" element={<DropDown/>}/>
      <Route path="/all-trip" element={<AllTrip/>}/>
      <Route path="/request-id" element={<RequestId/>}/>
    </Routes>
    
    </>
  );
}

export default App;
