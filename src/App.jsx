import "./App.css";
import Header from "./components/Header/header";
import ProblemSet from "./components/Problemset/problemSet";
import Problem from "./components/Problemset/problem";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AuthPage from "./components/Auth/AuthPage";
import SignUp from "./components/Modals/SignUp";
import LogIn from "./components/Modals/LogIn";
import Welcome from "./components/welcome/Welcome";
import Playground from "./components/Problemset/playground";
import AuthProvider from "./context/AuthProvider";
import app from "./firebase";
function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Welcome />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/ProblemSet" element={<ProblemSet />} />
            <Route path="/problems/:id/:problemSet" element={<Playground />} />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
