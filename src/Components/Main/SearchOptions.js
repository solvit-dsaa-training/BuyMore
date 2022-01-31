import React from "react"
import { useStyles } from "./style"
import "./search.css"

/**
 *
 *
 * @return {*}
 */

const SearchOptions = () => {
  const classes = useStyles()
  return (
    <React.Fragment>
      <div className="container">
        <form className="search__form">
          <select className="searchCategories">
            <option>Location</option>
            <option>Paid</option>
            <option>Music</option>
            <option>Performing</option>
            <option>Film</option>
            <option>Lectures</option>
            <option>Books</option>
            <option>Fashion</option>
            <option>Food</option>
            <option>Drink</option>
            <option>Festivals</option>
            <option>Charities</option>
            <option>Sports</option>
            <option>Nightlife</option>
            <option>Kids</option>
            <option>Family</option>
          </select>
          <input type="search" placeholder="search an event ..." />
          <div>
            <button className="search__btn">Search</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default SearchOptions
