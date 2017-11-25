import React from 'react';

class SearchBar extends React.Component {
  constructor(){
    super();
    this.state = {searchBar: '', location:'', dates: ''}
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  render(){
    debugger
    let dateTypes = ['All Dates', 'Today', 'Tomorrow', 'This Weekend', 'This Week', 'Next Week', "Next Month"]
    const dates = dateTypes.map( (dateType, i) => {
      return <option value={dateType} key={i} >{dateType}</option>
    })

    return (
      <form className='searchform'>
        <ul className='input-list-search-card'>
          <li className='searchBar'>
            <input type='text' id='main-search' placeholder='Search events or categories' onChange={this.handleChange('searchBar')}></input>
          </li>
          <li>
            <input type='text' placeholder='location' onChange={this.handleChange('location')}></input>
          </li>
          <li>
            <select>
              {dates}
            </select>
          </li>
          <li>
            <button type='submit'>SEARCH</button>
          </li>
        </ul>
      </form>

    )
  }

}

export default SearchBar;
