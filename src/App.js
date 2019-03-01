import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {requestHelloWorld} from './actions/actions';

import Page from './page/Page';

import logo from './logo.svg';

class App extends Component {

  state = {
    title: 'Title'
  };

  componentDidMount() {

    const {requestHelloWorld} = this.props;

    requestHelloWorld();

    console.log('this.props', this.props);
  }

  render() {
    const {helloWorld} = this.props;
    return (
      <div className="App">
        {helloWorld.type}
        <h2>{this.state.title}</h2>
        <div className="content">
          {this.state.title && <div style={{maxWidth: '100px'}}>
            <img src={logo} alt="logo"/>
          </div>}
          <Page/>
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    helloWorld: state.helloWorld
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    requestHelloWorld
  }, dispatch);
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
