import './App.css';
import Footer from './Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Entrance from './Entrance';
import Quiz from './Quiz';

function App() {
  return (
    <div className="wrapper">
      <div className="main">
        <div className="container">
            
            <Router>
                <Routes>
                    <Route path="/" element={<Entrance />} />
                    <Route path="/quiz" element={<Quiz />} />
                </Routes>
            </Router>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
