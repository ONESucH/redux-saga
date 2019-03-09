import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { requestHelloWorld } from './actions/actions';
import { dogRequest } from './actions/actions-dog-request';

import Page from './page/Page';

import logo from './logo.svg';

class App extends Component {

  state = {
    title: 'Title'
  };
  
  componentWillMount() {
    const { requestHelloWorld, dogRequest } = this.props;
    
    requestHelloWorld();
    dogRequest();
  }
  
  componentDidUpdate() {
    // чтобы увидеть в консоли результат - нужно убидиться, что функция асинхронная была выполнена.
    // Асинхронные функции в componentWillMount до загрузки DOM нужно вешать переменные на теги
    // и после чего ожидается завершение получения данных от сервера и обновления react состояний.
    console.log('this.props', this.props); 
  }

  render() {
    return (
      <div className="App">
        <p>{this.props.helloWorld}</p>
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


const mapStateToProps = state => {
  console.log('APp compinent state', state);
  return {
    helloWorld: state.helloWorld,
    dogRequest: state.dogRequest
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    requestHelloWorld,
    dogRequest
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
