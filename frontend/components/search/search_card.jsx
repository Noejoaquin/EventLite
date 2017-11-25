import React from 'react';
import SearchBarContainer from './search_bar_container';


// export const SearchCard = () => {
//   return (
//     <div className='meta-search-card'>
//       <h1>Find your next Experience</h1>
//         <SearchBarContainer/>
//     </div>
//   )
// }

class SearchCard extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className='meta-search-card'>
        <h1>Find your next Experience</h1>
          <SearchBarContainer props={this.props}/>
      </div>
    )
  }
}

export default SearchCard;
