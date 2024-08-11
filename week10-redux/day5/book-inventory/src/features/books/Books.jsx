import React from 'react';
import { useEffect } from 'react';
import { fetchBooks } from './slice.js';
import { useSelector, useDispatch } from 'react-redux';
import { createSelector } from "@reduxjs/toolkit";
import Book from './Book.jsx';

const Books = () => {

    // const books = useSelector(
    //     state => state.books.books
    // );

    const books = useSelector(
        createSelector([(state => state.books.books), (state => state.books.genre)], (books, genre) => {
            if(genre === -1) return books;
            return books.filter((book) => book.genre.includes(genre));
        })
    );


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBooks());
    }, []);

    return (
        <>
            {
                books && books.map(
                    book => {
                        return (

                            <Book key={ book.id } { ...book } />

                        );
                    }
                )
            }
        </>
    );
};

export default Books;