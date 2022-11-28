import './App.css';
import Home from './pages/HomePage'
import Comments from './pages/Comments'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/comments' element={<Comments />} />
      </Routes>
    </Router>
  );
}

export default App;
