import React from 'react';

class EventProfileTabs extends React.Component{
  constructor(props){
    super(props);
    this.state = { tabsIndex:  0};

  }


  clickHandler(e) {
    var idx = e.target.getAttribute("name");
    idx = parseInt(idx);
    this.setState({tabsIndex: idx});
  }



  render(){
    const tabs = this.props.tabNames.map( (name, idx) => {
      if (idx === this.state.tabsIndex) {
        return <div key={idx} className="active tab">
          <h1  name={idx} >{name}</h1>
          <div className='active-border'></div>
        </div>
      } else {
        return <h1 className='non-active tab' name={idx} key={idx} onClick={this.clickHandler.bind(this)}>{name}</h1>;
      }
    });

    const Component = this.props.panes[this.state.tabsIndex];
    return (
      <div className='event-indicies'>
        <div className='tabs-container'>
          <ul className='tabs'>
            {tabs}
          </ul>
          <div className='content-container'>
            <div className='content'><Component ownProps={this.props} /></div>

          </div>
        </div>

      </div>
    );
  }
}

export default EventProfileTabs;
