import React, { useEffect,useState } from 'react'
import Header from '../../components/header/Header'
import Table from '../../components/table/Table'
import Filter from '../../components/filter/Filter'
import Paginations from '../../components/pagination/Paginations'
import { useDispatch } from 'react-redux'
import { getUsers } from '../../actions/userActions'


const Home = () => {
    const dispatch = useDispatch()
    useEffect(()=>{
        const query=`?limit=10&skip=0`
        dispatch(getUsers(query))
      },[])
    return (
        <>
            <Header />
            <Filter />
            <Table />
            <Paginations />
        </>
    )
}

export default Home