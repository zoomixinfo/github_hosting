import React from 'react'
import './Banner.css'

function Banner() {
    return (
        <div className="banner">
            <div className="content">
                <h1 className="title">Movie Name</h1>
                <div className="banner_buttons">
                    <button className="button">Play</button>
                    <button className="button">My List</button>
                </div>
                <h1 className="description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem expedita culpa voluptate, tempora unde exercitationem quia labore, ad quos nam quam quis quibusdam quaerat illo atque alias assumenda reprehenderit ipsa?
                </h1>
            </div>
            <div className="fade_bottom">
                
            </div>
        </div>
    )
}

export default Banner
