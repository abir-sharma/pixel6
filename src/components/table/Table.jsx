import React, { useEffect, useState } from 'react'
import TableRow from '../tableRow/TableRow'
import Dropdown from '../dropdown/Dropdown'
import { useSelector } from 'react-redux'

const data = ["asc", "desc"]
const Table = () => {
    const { users } = useSelector(state => state.store.user)  
    console.log(users,"abir")
    return (
        <>
            <div className="container border">
                <table class="table">
                    <thead>
                        <tr>
                            <div className="container d-flex">
                                <Dropdown
                                    title="id"
                                    onlyIcon={true}
                                    values={data}
                                />
                                <th scope="col">ID</th>
                            </div>
                            <th scope="col">Image</th>
                            <div className="container d-flex">
                                <Dropdown
                                    title="firstName"
                                    onlyIcon={true}
                                    values={data}
                                />
                                <th scope="col">Full Name</th>
                            </div>

                            <th scope="col">Gender</th>
                            <div className="container d-flex">
                                <Dropdown
                                    title="firstName"
                                    onlyIcon={true}
                                    values={data}
                                />
                                <th scope="col">Age</th>
                            </div>
                            <th scope='col'>Location</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users && users.map(item => <TableRow item={item} />)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table