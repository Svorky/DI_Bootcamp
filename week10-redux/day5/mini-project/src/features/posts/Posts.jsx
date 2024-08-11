import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts } from './slice.js';
import Reactions from '../../components/Reactions.jsx';
import { useFetchPost, usePostsSelectors } from './hooks.js';
import {posts} from './selectors.js'

const Posts = () => {

  // const post = usePostsSelectors();
  // const status = usePostsStatus();
  // const author = usePostsAuthor();

  const callFetchPosts = useFetchPost()

  // const posts = useSelector(
  //   state => state.posts.posts
  // );

  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(fetchPosts());
    callFetchPosts()
  }, []);

  return (<>
    <h2>Posts</h2>
    <section>
      {
        posts && posts.map(
          post => {
            return (
              <article key={ post.id }>
                <h3>{ post.title }</h3>
                <p>{ post.body }</p>
                <Reactions postID={post.id} reactions={post.reactions}/>
              </article>
            );
          }
        )
      }
    </section>
  </>);
};

export default Posts;