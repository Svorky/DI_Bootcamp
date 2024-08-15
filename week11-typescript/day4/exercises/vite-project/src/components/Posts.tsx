import { useEffect, useState } from 'react'

type PostType = {
    userId: number,
    id: number,
    title: string,
    body: string
}

const Posts = () => {
    const [posts, setPosts] = useState<PostType[]>([])

    useEffect( ()=>{
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
            const data = await response.json()
            setPosts(data)
        }
        fetchData()
    },[])

  return (<>
    <div>Posts</div>
    {
        posts.map(
            post => {
                return(
                    <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                    </div>
                )
            }
        )
    }
    </>
  )
}

export default Posts