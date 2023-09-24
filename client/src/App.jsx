import { Routes, Route, Navigate } from "react-router-dom";
import Chat from "./pages/Chat";
import Register from "./pages/Register";
import Login from "./pages/Login";
import "bootstrap/dist/css/bootstrap.css";
import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import { useContext } from "react";
import { AuthContext } from "./content/AuthContext";
import { ChatContextProvider } from "./content/ChatContext";

function App() {
  const { user } = useContext(AuthContext);
  return (
    <ChatContextProvider>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={user ? <Chat /> : <Login />} />
          <Route path="/register" element={user ? <Chat /> : <Register />} />
          <Route path="/login" element={user ? <Chat /> : <Login />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Container>
    </ChatContextProvider>
  );
}
export default App;
