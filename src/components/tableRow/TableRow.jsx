import React from 'react'

const TableRow = ({item}) => {
    return (
        <>
            <tr>
                <th scope="row">{item.id}</th>
                <th scope='col' ><img src={item.image} class="img-thumbnail" width={50} alt="..." /></th>
                <td>{item.firstName+" "+item.lastName}</td>
                <td>{item.gender}</td>
                <td>{item.age}</td>
                <td>{item.address.country}</td>
            </tr>
        </>
    )
}

export default TableRow