import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
import '../assets/App.css';

// XXX: Read from config file
const Links = { 
  links: [
    {
      linkHref: '/tech',
      linkName: 'Technologies'
    },
    {
      linkHref: '/about',
      linkName: 'About Me'
    }
  ]
};

const MyLinkRenderer = (props) => {
  return (
    <p>
      <Link to={props.props.linkHref}>{props.props.linkName}</Link>
    </p>
  );
}

class MyLinkComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      linkName : props.linkName,
      linkHref : props.linkHref
    };
  }
  
  render() {
    return <MyLinkRenderer props={this.state}></MyLinkRenderer>
  }
}

const LinksContainer = (props) => {
    var linksToProcess = props.props.links;
    var myLinks = [];
    for (var i = 0; i < linksToProcess.length; i++) {
      var ps = linksToProcess[i];
      myLinks.push(<MyLinkComponent key={ps.linkHref} linkHref={ps.linkHref} linkName={ps.linkName}></MyLinkComponent>)
    }
    return (
    <div>
      {myLinks}
    </div>
    );
}

const MainPage = () => {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>
            Welcome to my Personal Site!
          </h1>
          <p>
              Select information from the options below
          </p>
          <LinksContainer props={Links}/>
        </header>
      </div>
    );
}

export default MainPage;