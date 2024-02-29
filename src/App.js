import './App.css';
import { useState } from 'react'

function App() {
  const [name, setName] = useState('John')

  const [showContent, setShowContent] = useState(true)

  const [events, setEvents] = useState([
    {title: "Hello my name is John", id: 1},
    {title: "John birthday 2000", id: 2},
    {title: "John last name is Doe", id: 3},
  ])

  const handleClick = () => {
    setName('Doe')
  }
  const handLeDelete = (id) => {
    const filteredEvents = events.filter((event) => {
      return event.id !== id
    })
    setEvents(filteredEvents)
  }
  return (
    <div className="App">
      <h1>My name is {name}</h1>
      
      <button onClick={handleClick}>Change name</button>
      <hr />
      <br />
      {showContent && <button onClick={() => setShowContent(false)}>toggle</button>}
      {!showContent &&  <button onClick={() => setShowContent(true)}>toggle</button>}
      {showContent && events.map((event) => {
        return (
          <div key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={ () => handLeDelete(event.id)}> Delete</button>
          </div>
        )
      })}
    </div>
  );
}

export default App;
    