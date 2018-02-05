import React from 'react';
import SearchCard  from './search_card';
import EventIndexContainer from '../events/event_index_container';
import SearchBarContainer from './search_bar_container';

class LandingTop extends React.Component {
  constructor(props){
    super(props);
    this.handleChangeOfPhoto = this.handleChangeOfPhoto.bind(this);
  }

  handleChangeOfPhoto() {
      setInterval(() => {
        let image = document.getElementsByClassName('LandingImage')[0]
        if (image.classList.contains('one')){
          image.classList.remove('one')
          image.classList.add('two')
        } else if (image.classList.contains('two')) {
          image.classList.remove('two')
          image.classList.add('three')
        } else {
          image.classList.remove('three')
          image.classList.add('one')
        }
      }, 5000)
  }



  render(){
    return (
      <div className='root-page'>
        {this.handleChangeOfPhoto()}
      <img className='LandingImage one'></img>
          <div className='meta-search-card'>
            <h1>Find your next Experience</h1>
              <SearchBarContainer props={this.props}/>
          </div>
        <EventIndexContainer props={this.props}/>
      </div>
    )
  }
}

export default LandingTop
