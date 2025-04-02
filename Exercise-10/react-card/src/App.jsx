import React from 'react'
import MovieList from './components/MovieList'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>React Movie Cards</h1>
      </header>
      <main>
        <MovieList />
      </main>
      <footer className="app-footer">
        <p>&copy; 2023 React Movie Cards App</p>
      </footer>
    </div>
  )
}

export default App
