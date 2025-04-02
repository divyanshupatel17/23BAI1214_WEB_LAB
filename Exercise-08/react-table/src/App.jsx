// App.jsx

import { useState } from 'react'
import './App.css'

function App() {
  const [data] = useState([
    { name: "Divyanshu", age: 28, country: "USA" },
    { name: "Ashuu", age: 32, country: "Canada" },
    { name: "Pardeep", age: 25, country: "UK" },
    { name: "Varshith", age: 35, country: "Spain" },
    { name: "Akshat", age: 29, country: "Japan" }
  ]);

  return (
    <div className="table-container">
      <h1>Data Table</h1>
      <table className="gradient-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {data.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.age}</td>
              <td>{person.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
