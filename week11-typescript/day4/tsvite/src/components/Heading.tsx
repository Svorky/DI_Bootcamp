type HeadingProps = {
    title: string,
    sub?: string
}

const Heading = (props: HeadingProps) => {
  return (
    <div>{props.title}</div>
  )
}

export default Heading