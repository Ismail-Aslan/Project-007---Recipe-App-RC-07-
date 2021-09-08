import React from 'react'
import "./style.css"

export default function Recipe() {
    return (
        <div className="recipe-container">
            <div className="search-bar">
                <input className="search-bar-el" type="text" name="content" id="content" />
                <select className="search-bar-el" name="foods" id="foods">
                    <option value="" >Food</option>
                    <option value="breakfast">Breakfast</option>
                    <option value="dinner">Dinner</option>
                    <option value="lunch">Lunch</option>
                    <option value="snack">Snack</option>
                    <option value="teatime">Teatime</option>
                </select>
                <button className="search-bar-el search-btn">Search</button>
            </div>
        </div>
    )
}
