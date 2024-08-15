import './App.css'
import Greetings from './components/Greetings'
import Counter from './components/Counter'
import UserCard from './components/UserCard'
import Posts from './components/Posts'

function App() {

  return (
    <>
    <Greetings name='John' />
    <Counter />
    <UserCard />
    <UserCard name='Anne' />
    <UserCard age={20} />
    <UserCard name='Bob' age={50} />
    <Posts />
    </>
  )
}

export default App
