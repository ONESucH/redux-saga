import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {
  successHelloWorld,
  requestHelloWorld,
  errHelloWorld
} from './actions/actions';

import Page from './page/Page';

import logo from './logo.svg';

class App extends Component {

  state = {
    title: 'Title'
  };

  componentWillMount() {

    const {
      successHelloWorld,
      requestHelloWorld,
      errHelloWorld
    } = this.props;

    successHelloWorld();
    requestHelloWorld();
    errHelloWorld();
  }
  
  componentDidMount() {
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


const mapStateToProps = state => ({
  helloWorld: state.helloWorld
});

const mapDispatchToProps = dispatch => bindActionCreators({
  successHelloWorld,
  requestHelloWorld,
  errHelloWorld
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
