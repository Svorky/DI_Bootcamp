import { createSelector } from '@reduxjs/toolkit'
import { useSelector, useDispatch} from 'react-redux'
import { posts, status, author, state} from './selectors.js'
import { useCallback } from 'react';
import { fetchPosts } from './slice.js';

export const usePostsSelectors = () => {
    const selector = createSelector([posts, author], (post, author)=>{
        if(author == -1) return posts
        return post.filter(post => post.userId == author)
    })
    return useSelector(selector)
}

export const usePostsStatus = () => {
    return useSelector(createSelector(state , (state)=> state.status))
}

export const usePostAuthor = () => {
    const selector = createSelector(state, (state) => state.author)
    return useSelector(selector)
}

export const useFetchPost = () => {
    const dispatch = useDispatch()
    return useCallback(()=>{
        dispatch(fetchPosts)
    }, [dispatch])
}