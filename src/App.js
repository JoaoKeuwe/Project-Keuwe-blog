import "./App.css";
import CommentsId from "./pages/comments";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
import DefaultLayout from "./layout/default";


export default function App() {
  return (
   
      <Router>
        <Routes>
          <Route path="/" element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/comments/:id" element={<CommentsId />} />
          </Route>
        </Routes>
      </Router>
  
  );
}
