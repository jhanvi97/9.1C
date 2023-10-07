import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import ProtectedRoute from "./ProtectedRoute";
import { UserAuthContextProvider } from "./UserAuthContext";
import Header from "./Header";
import Dashboard from "./Dashboard"; // Import the Dashboard component

function App() {
  const handleSignOut = () => {
    // Implement your sign-out logic here, e.g., clear user authentication state.
    // You may need to use a function from your UserAuthContext or authentication library.
  };

  return (
    <Container style={{ width: "400px" }}>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/Home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Header />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />

              {/* Add a sign-out button */}
              <Route
                path="/dashboard"
                element={
                  <div>
                    <Dashboard /> {/* Render the Dashboard component */}
                  </div>
                }
              />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
