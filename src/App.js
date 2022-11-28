import './App.css';
import Home from './pages/HomePage'

import CommentsId from './pages/CommentsIdPage';

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
     
      <Route path='/comments/:id' element={<CommentsId />} />
      </Routes>
    </Router>
  );
}

export default App;
