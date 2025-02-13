"use client"

import React, {useEffect, useState} from "react"

const FetchAssignor = () => {
    const [assignors, setAssignors] = useState([])


    const payableBoladao = () =>
    {
        const result = fetch("http://localhost:8080/integrations/payable")
        .then((res) => res.json())
        .then((data)=>{
            setAssignors(data)
            console.log(result)
        })
        
    }

    useEffect(()=>{
        payableBoladao
    }, [])



    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>
                            ID
                        </th>
                        <th>
                            Divida
                        </th>
                        <th>
                            Data
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr></tr>
                    <td>
                      {assignors.payable}
                    </td>
                </tbody>
            </table>
        </div>
    )
}

export default FetchAssignor