import { ReactElement } from 'react'

interface SectionProps {
    content: string,
    // children: ReactNode
    children: ReactElement
}

const Section = ({children, content}: SectionProps) => {
  return (<>
    <h3>{content}</h3>
    <div>{children}</div>
    </>)
}

export default Section