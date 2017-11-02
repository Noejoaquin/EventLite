import React from 'react';



class EventProfileTabs extends React.Component{
  constructor(props){
    super();
    this.props = props;
    this.state = { tabsIndex:  0};
  }


  clickHandler(e) {
    var idx = e.target.getAttribute("idx");
    idx = parseInt(idx);
    this.setState({tabsIndex: idx});
  }


  render(){
    const tabs = this.props.panes.map( (obj, idx) => {
      if (idx === this.state.tabsIndex) {
        return <h1 className="active tab" idx={idx} key={idx}>{obj.title}</h1>;
      } else {
        return <h1 className='non-active tab' idx={idx} key={idx} onClick={this.clickHandler.bind(this)}>{obj.title}</h1>;
      }
    });

    const content = this.props.panes[this.state.tabsIndex].content;

    return (
      <ul className='tabs'>
        {tabs}
        <div className='content'>{content}</div>
      </ul>
    );
  }
}

export default EventProfileTabs;
