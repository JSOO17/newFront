import React, { useState, useEffect } from 'react'
import TableHistory from '../components/TableHistory'

const History = () => {

	
	const [ data, setData ] = useState([])
	const [ error, setError ] = useState(null)

    useEffect(()=>{
    	const fetchHistory = async () => {
			try {
				let res = await fetch("https://localhost:44374/api/history")
				let data = await res.json()
				console.log(data)
				setData(data)

			}catch(error){
				setError(error)
			}
    	}
		fetchHistory()
    }, [])
		


		return <div class="container my-5">
        			<h1>History</h1>
			        <TableHistory
			        	data={data}
			        />
			    </div>

}




export default History