import React, { useState } from 'react'

const SongComponent = (props) => {
    const [downloadLink,setDownloadLink] = useState("");
    const download = async ()=>{
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'b61d186845msh6455f78ea66435bp1a0d4fjsn4f8d88cd0395',
                'X-RapidAPI-Host': 'youtube-music1.p.rapidapi.com'
            }
        };
        
        await fetch('https://youtube-music1.p.rapidapi.com/get_download_url?id='+props.song.id, options)
            .then(response => response.json())
            .then(response =>{ 
                window.location.href = response.result.download_url
            })
            .catch(err => console.error(err)); 
    }
    return (
    <div>
      <div className="card my-3">
        <h5 className="card-header">{props.song.title}</h5>
        <div className="card-body">
            <p className="card-text">duration : {props.song.duration} seconds</p>
            <a href="#" className="btn btn-primary" onClick={download}>Download</a>
        </div>
      </div>
    </div>
  )
}

export default SongComponent
