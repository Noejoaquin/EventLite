import React from 'react';
import { Redirect } from 'react-router';


class SearchBar extends React.Component {
  constructor(props){
    super(props);
    this.state = {name: ''}
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
    if (this.props.location.pathname !== '/events'){
      this.props.history.push('/events')
    }
  }

  render(){
    let dateTypes = ['All Dates', 'Today', 'Tomorrow', 'This Weekend', 'This Week', 'Next Week', "Next Month"]
    const dates = dateTypes.map( (dateType, i) => {
      return <option value={dateType} key={i} >{dateType}</option>
        // <li>
        //   <input type='text' placeholder='location' onChange={this.handleChange('location')}></input>
        //   </li>
        //   <li>
        //     <select>
        //       {dates}
        //     </select>
        //   </li>
    })
    let searchForm;
    if (this.props.location.pathname === '/'){
      searchForm = (
        <form className='searchform'>
        <ul className='input-list-search-card'>
          <li className= 'searchBar'>
            <input type='text' id='main-search' placeholder='Search events or categories' onChange={this.handleChange('name')}></input>
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
            <input className='nav-input'type='text' id='main-search' placeholder='Search by events or categories' onChange={this.handleChange('name')}></input>
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
// <form className={this.props.location.pathname === '/' ? 'searchform' : 'nav-search-form'}>
//   <ul className={this.props.location.pathname === '/' ? 'input-list-search-card' : 'nav-input-list-search-card'}>
//     <li className={this.props.location.pathname === '/' ? 'searchBar' : 'nav-searchBar' }>
//       <input type='text' id='main-search' placeholder='Search events or categories' onChange={this.handleChange('name')}></input>
//       </li>
//       <li>
//         <input type='text' placeholder='location' onChange={this.handleChange('location')}></input>
//         </li>
//         <li>
//           <select>
//             {dates}
//           </select>
//         </li>
//         <li>
//           <button type='submit' onClick={this.handleSubmit}>SEARCH</button>
//           </li>
//         </ul>
//       </form>

export default SearchBar;
