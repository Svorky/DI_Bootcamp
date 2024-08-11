import { useSelector, useDispatch } from "react-redux";
// import { fetchUsers } from "./usersSlice";
// import { useEffect } from "react";
import { filterGenre } from "../books/slice";

const Genres = (props) => {
    const books = useSelector(
        state => state.books.books
    );

    const dispatch = useDispatch();

    const genres = [...new Set(books.map(
        book => book.genre
    ).flat())].sort();

    return (
        <>
            <h2>Genres</h2>
            <select onChange={ (e) => dispatch(filterGenre(e.target.value)) } >
                {/* <select> */ }
                <option value={ -1 }>Select Genre</option>
                { genres.map((genre) => {
                    return (
                        <option key={ genre } value={ genre }>
                            { genre }
                        </option>
                    );
                }) }
            </select>
        </>
    );
};
export default Genres;
