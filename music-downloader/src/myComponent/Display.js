import React from 'react'
import SongComponent from './SongComponent'
const Display = (props) => {
  return (
    <>
      <h4 className='text-center my-3'>Search Result for {props.search}</h4>
      <div className='container border my-3 rounded'>
      {
        props.songs.result.map((curVal)=>{
          return <SongComponent song={curVal} key={curVal.id} artish={props.search}/>
        })
      }
      </div>
    </>
  )
}

export default Display
