import {ReactElement} from 'react'

interface CounterProps {
    children: ReactElement,
    setCount: React.Dispatch<React.SetStateAction<number>>
}

const Counter = ({children, setCount}: CounterProps) => {
  return (<>
    <div>Counter</div>
    <div>{children}</div>
    <button onClick={()=>setCount(count => count + 1)}> + </button>
    <button onClick={()=>setCount(count => count - 1)}> - </button>
    </>
  )
}

export default Counter