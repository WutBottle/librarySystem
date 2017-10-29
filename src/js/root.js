import React from 'react';
import ReactDOM from 'react-dom';
import Index from './components/index';
import SearchResult from './components/search_result'
import { HashRouter as Router, Route } from 'react-router-dom'
import 'antd/dist/antd.css';

class Root extends React.Component {
    render() {
        return (
            <Router>
                <div class="container">
                    <Route exact path="/" component={Index} />
                    <Route path="/search" component={SearchResult} />
                </div>
            </Router>

        );
    };
}

ReactDOM.render(<Root />, document.getElementById('mainContainer'));