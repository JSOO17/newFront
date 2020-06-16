import React, { useState } from 'react'
import Navigation from '../components/Navigation'
import News from '../components/News'

const Inicio = () => {

	
	const [ data, setData ] = useState([])
	const [ currentWeather, setCurrentWeather ] = useState({})
	const [ news, setNews ] = useState([])
	const [ form, setForm ] = useState('')
	const [ error, setError ] = useState(null)
	//const [ variable, setVariable ] = useState(null)

	const handleChange = e => {

    	setForm(e.target.value)
    	console.log(form)
    }

    const handleSubmit = async e => {  
    	e.preventDefault()
    	console.log(form)
		try {
			let res = await fetch("https://localhost:44374/api/city/" + form)
			let data = await res.json()
			console.log(data)
			//let data = await { title: "buen titlo"}
			setData(data)
			setCurrentWeather(data.currentWeather)
			setNews(data.news)

		}catch(error){
			setError(error)
		}
	}


		return <div>
		<Navigation
 			onChange={handleChange}
 			onSubmit={handleSubmit}
 		/>
		<News
 			data={data}
 			currentWeather={currentWeather}
 			news={news}
 		/>

 		
	</div>


	



}




export default Inicio