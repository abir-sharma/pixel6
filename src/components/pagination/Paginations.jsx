import React, { useState } from 'react'
import ReactPaginate from 'react-paginate';
import { useDispatch } from 'react-redux'
import { getUsers } from '../../actions/userActions'

const Paginations = () => {
  const dispatch = useDispatch()
  function handlePageClick(params) {
    const pageIndex=params.selected
    const query = `?limit=10&skip=${pageIndex*10}`
    dispatch(getUsers(query))
  }
  const pageCount = Math.ceil(208 / 10)
  return (
    <>
      <div className="container my-2 d-flex justify-content-center">
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'....'}
          pageCount={pageCount}
          marginPagesDisplayed={3}
          pageRangeDisplayed={6}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          pageClassName={'page-item'}
          pageLinkClassName={'page-link'}
          previousClassName={'page-item'}
          previousLinkClassName={'page-link'}
          nextClassName={'page-item'}
          nextLinkClassName={'page-link'}
          breakClassName={'page-item'}
          breakLinkClassName={'page-link'}
          activeClassName={'active'}
        />
      </div>

    </>
  )
}

export default Paginations