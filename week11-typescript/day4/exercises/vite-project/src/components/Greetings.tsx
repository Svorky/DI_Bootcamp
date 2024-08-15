interface GreetingProps {
    name: string
}

const Greetings = (props: GreetingProps) => {
    const { name } = props
  return (
    <div>Greetings {name}</div>
  )
}

export default Greetings