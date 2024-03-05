import './App.css';
import { useState } from 'react'
import Title from "./components/Title"
import { Fragment } from 'react'

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

  const subtitle = "All events well be here :("
  return (
    <div className="App">
      <Title title="John kingdom events" subtitle={subtitle}/>
      {showContent && <button onClick={() => setShowContent(false)}>toggle</button>}
      {!showContent &&  <button onClick={() => setShowContent(true)}>toggle</button>}
      {showContent && events.map((event) => {
        return (
          <Fragment key={event.id}>
            <h2>{event.title}</h2>
            <button onClick={ () => handLeDelete(event.id)}> Delete</button>
          </Fragment>
        )
      })}
    </div>
  );
}

export default App;
    