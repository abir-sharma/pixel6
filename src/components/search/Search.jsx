import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../../actions/userActions'

const Search = () => {
    const dispatch = useDispatch()
    const [input, setInput] = useState("")
    function handleClick() {
        const query = `/search?q=${input}`
        dispatch(getUsers(query))

    }
    function handleChange(event) {
        setInput(event.target.value)
    }
    console.log(input)
    return (
        <>
            <div className="container my-2">

                <div class="input-group">
                    <input type="text" class="form-control" placeholder='Search name....' aria-label="Dollar amount (with dot and two decimal places)" onChange={handleChange} />
                    <span class="input-group-text">
                        <i class="bi bi-search" type="button" onClick={handleClick}></i>

                    </span>
                </div>
            </div>
        </>
    )
}

export default Search