import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
  }



  render() {

    let browseEventImage = this.props.location.pathname === '/events' ? <div className='browse-events-image'></div> : <div></div>
    return (
        <div className='footer'>
          {browseEventImage}
            <h1 className='footer-appname-header'>EventLite</h1>
              <h2 className='footer-name'>
                Learn More About Noe Jimenez
              </h2>
              <ul className='link-list'>
                <a href="https://www.linkedin.com/in/noe-jimenez/" target="_blank"><i className="fa fa-linkedin-square link-fa" aria-hidden="true"></i></a>
                <a href="https://github.com/Noejoaquin" target="_blank"><i className="fa fa-github-square link-fa" aria-hidden="true"></i></a>
                <a href="http://www.noejimenez.com" target="_blank"><i className="fa fa-user-circle link-fa" aria-hidden="true"></i></a>
              </ul>
            <div className='border'></div>
        </div>
      )
  }
}


export default Footer
