import { child, get, ref } from "firebase/database";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Navbar from "./Components/Navbar";
import { db } from "./firebase";
import Home from "./pages/Home";
import { ReadFromFirebase } from "./Redux/actions";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Bookings from "./Components/bookings";
import ProtectedRoute from "./Components/ProtectedRoute";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import Rooms from "./pages/Rooms";
import SingleRooms from "./pages/SingleRooms";
import Booknow from "./pages/Booknow";
import Footer from "./Components/Footer";
import UnVerifyAccount from "./pages/UnVerifyAccount";
import VerifyAccount from "./pages/VerifyAccount";
import Profile from "./pages/Profile";
import ChangePassword from "./pages/ChangePassword";
import Histories from "./pages/Histories";


function App() {
  const dispatch = useDispatch();

  function readFromDatabase() {
    const dbRef = ref(db);
    get(child(dbRef, "/hotels"))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const data = snapshot.val();
        } else {
          console.log("no data");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    async function start() {
      await readFromDatabase();
    }
    start();
  }, []);




  return (
    <div className="App">
      <BrowserRouter>
        <UserAuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="/" index element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/history" element={<Histories />} />

            <Route path="/rooms/:slug" element={<SingleRooms />} />

            <Route path="/about" element={<About />} />
            <Route
              path="/bookings"
              element={
                <ProtectedRoute>
                  {" "}
                  <Bookings />{" "}
                </ProtectedRoute>
              }
            />
            <Route
              path="/booknow/:slug"
              element={
                <Booknow />
              }
            />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="/signin" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/error" element={<Error />} />
            <Route path="/unverify" element={<UnVerifyAccount />} />
            <Route path="/verifyAccount" element={<VerifyAccount/>}/>
            <Route path="/profile" element={<Profile />} />
            <Route path="/changePassword" element={<ChangePassword />} />

          </Routes>
          <Footer />
        </UserAuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
