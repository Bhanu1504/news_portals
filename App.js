import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import HomePage from './Components/pages/HomePage';
import ArticleDetailPage from './Components/pages/ArticleDetailPage';

function App() {
  return (
    <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/article/:url" element={<ArticleDetailPage />} />
    </Routes>
  </Router>
  );
}

export default App;
