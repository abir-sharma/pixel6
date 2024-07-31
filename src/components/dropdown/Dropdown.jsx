import React from 'react'
import { useDispatch } from 'react-redux'
import { getUsers } from '../../actions/userActions'

const Dropdown = ({title,onlyIcon,values}) => {
    const dispatch=useDispatch()
    function handleClick(e){
        let filterQuery;
        if (title==="Country") {
                filterQuery=`/filter/?key=address.${title.toLowerCase()}&value=${e.target.name}`
        }
        else {
                filterQuery=`/filter/?key=${title.toLowerCase()}&value=${e.target.name}`
        }
        const sortQuery=`?sortBy=${title}&order=${e.target.name}`
        if (onlyIcon) dispatch(getUsers(sortQuery))
        else dispatch(getUsers(filterQuery))
    }
    return (
        <>
        <div class="dropdown mx-2">
            {onlyIcon?
            <i class="bi bi-funnel-fill" data-bs-toggle="dropdown" aria-expanded="false" type="button"></i>
            :
            <button class="btn btn-secondary dropdown-toggle btn-sm" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                {title}
                </button>
            }
                
                <ul class="dropdown-menu">
                    {values.map(item => <li><a class="dropdown-item" name={item} href="#" onClick={e=>handleClick(e)}>{item}</a></li>)}                    
                </ul>
            </div>            
        </>
    )
}

export default Dropdown