import React, {Component} from 'react';

class Page extends Component {
    render() {
        return (
            <button
                style={{
                    background: 'silver',
                    border: 'none',
                    padding: '8px 15px'
                }}>
                Сделать запрос
            </button>
        );
    }
}

export default Page;