import './App.css'
import { Navbar, Card } from './components'

function App() {

  return (
    <>
      <div className='main-app'>
        <Navbar />
        <div className="card-container">
          <Card />
        </div>
      </div>
    </>
  )
}

export default App
