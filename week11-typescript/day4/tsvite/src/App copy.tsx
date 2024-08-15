import { useState, useMemo } from 'react'
import { ChangeEvent, useRef } from 'react'
import './App.css'
// import List from './components/List'
// import Counter from './components/Counter'
// import Heading from './components/Heading'
// import Section from './components/Section'

function App() {

  // const [count, setCount] = useState<number>(0)
const inputRef = useRef<HTMLInputElement>(null)

const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  console.log(inputRef?.current?.value)
  event.target.value
}

const retnum = (): number => {
  return 6
}

const result = useMemo<number>(()=> retnum(), [])

  return (
    <>
      {/* <Heading title={'qwerty'} />
      <Section content='blablabla'>
        <>hello from section</>
      </Section>
      <Counter setCount={setCount}>
        <h2>Count is {count}</h2>
      </Counter> */}
      {/* <List items={[1,2,3, '4']}/> */}
      <input ref={inputRef} type="text" placeholder='Enter'
      onChange={handleChange}/>
    </>
  )
}

export default App
