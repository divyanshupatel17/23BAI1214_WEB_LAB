import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import ResultPage from './pages/ResultPage';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [quizSettings, setQuizSettings] = useState({
    category: '',
    difficulty: '',
    numberOfQuestions: 5
  });
  
  const [quizResults, setQuizResults] = useState({
    score: 0,
    totalQuestions: 0,
    correctAnswers: 0,
    wrongAnswers: 0
  });

  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage setQuizSettings={setQuizSettings} />} />
          <Route path="/quiz" element={<QuizPage quizSettings={quizSettings} setQuizResults={setQuizResults} />} />
          <Route path="/results" element={<ResultPage results={quizResults} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
