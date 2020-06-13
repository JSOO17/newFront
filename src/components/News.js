import React from 'react'


const News = (props) => {
	
return <div className="row my-3 mx-2">
      <div className="col-sm">
          <h1>{props.data.nameCity}</h1>
          <h2 className="mx-2">Current Weather</h2>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">temperature º {props.currentWeather.temperature}</li>
            <li className="list-group-item">Weather description  {props.currentWeather.weatherDescription}</li>
            <li className="list-group-item">Wind Speed {props.currentWeather.windSpeed}</li>
            <li className="list-group-item">Wind Degree {props.currentWeather.windDegree}</li>
            <li className="list-group-item">Wind Dir {props.currentWeather.windDir}</li>
            <li className="list-group-item">Pressure {props.currentWeather.pressure}</li>
            <li className="list-group-item">Precip {props.currentWeather.precip}</li>
            <li className="list-group-item">Humidity {props.currentWeather.humidity}</li>
            <li className="list-group-item">Cloudover {props.currentWeather.cloudOver}</li>
            <li className="list-group-item">Feelslike {props.currentWeather.feelslike}</li>
            <li className="list-group-item">Visibility {props.currentWeather.visibility}</li>
          </ul>
      </div>
      <div className="col-sm">

      { props.news.map((newss) => {
      	return (
      	<div className="card">
          <h5 className="card-header"> {newss.title} </h5>
          <div className="card-body">
            <small>{newss.publishedAt}</small>
            <h4>{newss.author}</h4>
            <img src={newss.urlToImage} />
            <h5 className="card-title">{newss.description}</h5>
            <p className="card-text">{newss.content}</p>
            <a href={newss.url} className="btn btn-primary">View More</a>
          </div>
        </div>)
      		
      })}
     	</div>
    </div>   
   	
}

export default News