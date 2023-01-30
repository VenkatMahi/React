import React from 'react'

const Display = (props) => {
    const getTime = (time) =>{
        let unix_timestamp = time
        var date = new Date(unix_timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds();
        return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
    }
    let sunrise = getTime(props.Weather.sunrise)
    let sunset = getTime(props.Weather.sunset)
    return (
    <div className='container'>
        <div className="card text-center">
            <div className="card-body">
                <h3 className='text-center'>Weather at {props.city}</h3>
                <h5 className="card-title">Tempature : {props.Weather.temp} c</h5>
                <p className="card-text">Feels Like {props.Weather.feels_like} c</p>
                <p className="card-text">Maximam Tempature {props.Weather.max_temp} c and Minimum Tempature {props.Weather.min_temp} c</p>
                <p className="card-text">Humidity : {props.Weather.humidity}</p>
                <p className="card-text">Sunrise at {sunrise} and sunset at {sunset}</p>
            </div>
        </div>
    </div>
  )
}

export default Display
