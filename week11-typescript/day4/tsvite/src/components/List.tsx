// interface ListProps {
//     items: (string | number)[]
// }

import { ReactNode } from "react"

interface ListProps<T> {
    items: T[]
}

const List = <T,>({items}: ListProps<T>) => {
  return (<>
    <div>List</div>
    {
        items.map((item, indx)=>{
            return (
                <div key={indx}>{item as ReactNode}</div>
            )
        })
    }
    </>
  )
}

export default List