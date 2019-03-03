import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {
  requestHelloWorld
} from './actions/actions';

import Page from './page/Page';

import logo from './logo.svg';

class App extends Component {

  state = {
    title: 'Title'
  };
  
  componentWillMount() {
    this.props.requestHelloWorld();
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


const mapStateToProps = state => ({
  helloWorld: state.helloWorld
});

const mapDispatchToProps = dispatch => bindActionCreators({
    requestHelloWorld
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
