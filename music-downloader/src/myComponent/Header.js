import React, { useState } from 'react'

const Header = (props) => {
    const [search,setSearch] = useState("");
    const check = (e) =>{
        e.preventDefault();
        props.getList(search);
        setSearch("");
    }
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
            <a className="navbar-brand">Music Downloader</a>
            <form className="d-flex" role="search" onSubmit={check}>
                <input className="form-control me-2" type="search" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </div>
      </nav>
    </div>
  )
}

export default Header
