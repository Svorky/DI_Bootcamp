import React from 'react'
import { useNavigate } from "react-router-dom";

const Form = (props) => {
    const { search, setSearch } = props
    
    const navigate = useNavigate()
  
    const searchChange = (e) => {
      setSearch(e.target.value);
    };
  
    const submit = (event) => {
      event.preventDefault()
  
      navigate('/search')
    }

  return (
    <form className='search-form' onSubmit={submit}>
    <input
      type='text'
      name='search'
      placeholder='Search...'
      value={ search }
      onChange={searchChange }
    />
    <button type='submit'>Search</button>
  </form>
  )
}

export default Form