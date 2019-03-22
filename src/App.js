import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import { requestHelloWorld } from './actions/actions';
import { actionDogRequest } from './actions/actions-dog-request';

import Page from './pages/testPage/TestPage';

import logo from './logo.svg';

class App extends Component {

  state = {
    title: 'Title'
  };
  
  componentWillMount() {
    const { requestHelloWorld, actionDogRequest } = this.props;
    
    requestHelloWorld();
    actionDogRequest();
  }
  
  componentDidUpdate() {
    // чтобы увидеть в консоли результат - нужно убидиться, что функция асинхронная была выполнена.
    // Асинхронные функции в componentWillMount до загрузки DOM нужно вешать переменные на теги
    // и после чего ожидается завершение получения данных от сервера и обновления react состояний.
    console.log('this.props', this.props);

    this.showDogGlobal(this.props.dogRequest);
  }
  
  // Покажу временно картинку через native js
  showDogGlobal(obj) {
    if (obj.message) {
      let body = document.getElementsByTagName('body')[0],
        img = document.createElement('img');

      img.setAttribute('src', obj.message);
      img.setAttribute('alt', 'dog');
      img.setAttribute('title', obj.message);

      body.appendChild(img);
    }
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
  console.log('App compinent state', state);
  return {
    helloWorld: state.helloWorld,
    dogRequest: state.dogRequest
  }
};

const mapDispatchToProps = dispatch => bindActionCreators({
    requestHelloWorld,
    actionDogRequest
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
