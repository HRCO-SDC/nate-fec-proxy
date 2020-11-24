import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, useParams } from 'react-router-dom';
import QuestionsAndAnswers from './QuestionsAndAnswers.jsx';

ReactDOM.render(
  <Router>
    <Route exact path='/:id' render={props => (<QuestionsAndAnswers key={props.match.params.parameter} {...props}/>)}/>
    <Route exact path='/' render={props => (<QuestionsAndAnswers key={props.match.params.parameter} {...props}/>)}/>
    {/*}
      <Route exact path='/:id' component={QuestionsAndAnswers}/>
      <Route exact path='/' component={QuestionsAndAnswers}/>
    */}
  </Router>, document.getElementById('questions-and-answers'));