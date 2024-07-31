import React from 'react'
import Dropdown from '../dropdown/Dropdown'


const data=["United states","India"]
const Filter = () => {
    return (
        <>
            <div className="container d-flex my-2 ms-auto">
                <h3>Employees</h3>
                <div className="container d-flex flex-row-reverse">
                    <Dropdown 
                      title="Country"
                      onlyIcon={false}
                      values={data}
                    />
                    <Dropdown 
                    title="Gender"
                    onlyIcon={false}
                    values={["male","female"]}
                     />
                </div>
            </div>

        </>
    )
}

export default Filter