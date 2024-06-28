import React from 'react'
import "./Featured.scss"

const Featured = () => {
  return (
    <div className="featured">
        <div className="container">
      <div className="left">
        <h1>Find the perfect <i>freelance</i> services for your business</h1>
        <div className="search">
            <div className="searchInput">
                <img src="search.png" alt=""/>
                <input type="text" placeholder="Try mobile building app"/>

            </div>
            <button>Search</button>

        </div>
        <div className="popular">
            <span>popular:</span>
            <button>Web Design</button>
            <button>Word Press</button>
            <button>Logo Design</button>
            <button>AI Services</button>
        </div>
      </div>
      <div className="right"></div>
      <img src="mman.png" alt=""/>

        </div>
    </div>
  )
}

export default Featured