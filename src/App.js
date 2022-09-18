import Login from './components/Login';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route} from "react-router-dom";
import Signup from './components/Signup';
import { Container, Row, Col } from 'react-bootstrap';
import {UserAuthContextProvider} from "./context/UserAuthContext";
import ProtectedRoute from './components/ProtectedRoute';
import Home from "./components/Home"

function App() {
  return (
    <div className="App">
    <Container>
      <Row>
        <Col>
        <UserAuthContextProvider>
          <Routes>
              <Route path="home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
              <Route path="/" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Routes>
        </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
      
        
    </div>
  );
}

export default App;
