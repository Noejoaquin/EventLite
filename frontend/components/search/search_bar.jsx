import React from 'react';
import { Redirect } from 'react-router-dom';


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: this.props.query}
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
    if (this.props.passedProps.location.pathname !== '/events'){
      this.props.passedProps.history.push('/events')
    }
  }

  componentWillMount(){
    if (this.props.passedProps.location.pathname === '/'){
      this.props.removeQuery();
    }
  }

  componentWillReceiveProps(nextProps){
    if (this.props.passedProps.location.pathname === '/events' && nextProps.passedProps.location.pathname !== '/events'){
      this.setState({name: ""})
      this.props.removeQuery();
    }
  }

  render(){
    let dateTypes = ['All Dates', 'Today', 'Tomorrow', 'This Weekend', 'This Week', 'Next Week', "Next Month"]
    const dates = dateTypes.map( (dateType, i) => {
      return <option value={dateType} key={i} >{dateType}</option>
    })
    let searchForm;

    let input = this.props.passedProps.location.pathname === '/events' ?
     <input className='nav-input'
       type='text'
       id='main-search'
       placeholder='Search by events or categories'
        value={this.state.name}
        onChange={this.handleChange('name')}></input> :
     <input className='nav-input'
       type='text'
       id='main-search'
       placeholder='Search by events or categories'
       onChange={this.handleChange('name')}
       value={this.state.name}></input>

    if (this.props.passedProps.location.pathname === '/'){
      searchForm = (
        <form className='searchform'>
        <ul className='input-list-search-card'>
          <li className= 'searchBar'>
            <input
              type='text'
              id='main-search'
              placeholder='Search events or categories'
              defaultValue={this.props.query}
              onChange={this.handleChange('name')}></input>
          </li>
          <li>
            <button type='submit' onClick={this.handleSubmit}>SEARCH</button>
          </li>
        </ul>
      </form> )
    } else {
      searchForm = (
        <form className='nav-search-form'>
        <ul className='nav-search-items'>
          <li>
            <button className='nav-search-button' type='submit' onClick={this.handleSubmit}>
              <i className="fa fa-search" aria-hidden="true"></i>
              </button>
          </li>
          <li className='nav-search-input'>
            {input}
          </li>
        </ul>
      </form>
      )
    }
    return (
      searchForm
    )
  }

}

export default SearchBar;
