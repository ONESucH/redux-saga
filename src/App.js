import React, {Component} from 'react';
import logo from './logo.svg';
import Page from './page/Page';

import './App.css';

class App extends Component {

    state = {
        title: 'Title'
    };
    
    constructor(props) {
        super(props);
        
        const {store} = this.props;
        
        console.log('store', store);
    }

    onSomeButtonClicked() {
        const { userId, dispatch } = this.props;
        console.log('userId', userId);
        console.log('dispatch', dispatch);

        dispatch({type: 'USER_FETCH_REQUESTED', payload: {userId}})
    }

    render() {
        return (
            <div className="App">
                <h2>{this.state.title}</h2>
                <div className="content">
                    {this.state.title && <div style={{maxWidth: '100px'}}>
                        <img src={logo} alt="logo" />
                    </div>}
                    <Page
                        event={this.onSomeButtonClicked.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default App;
