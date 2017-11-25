import React from 'react';
import { Redirect } from 'react-router';


class SearchBar extends React.Component {
  constructor(){
    super();
    this.state = {searchBar: '', location:'', dates: ''}
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(field){
    return (e) => {
      this.setState({[field]: e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.receiveQuery(this.state);
    this.props.history.push('/events')
  }

  render(){
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
            <button type='submit' onClick={this.handleSubmit}>SEARCH</button>
          </li>
        </ul>
      </form>

    )
  }

}

export default SearchBar;
