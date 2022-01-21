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
      <div className={`${classes.searchContainer} container`}>
        <form className={`${classes.searchForm} search__form`}>
          <select className={classes.searchCategories}>
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
          <input
            type="search"
            placeholder="search an event ..."
            className={classes.Input}
          />
          <div>
            <button className={classes.searbBtn}>Search</button>
          </div>
        </form>
      </div>
    </React.Fragment>
  )
}

export default SearchOptions
