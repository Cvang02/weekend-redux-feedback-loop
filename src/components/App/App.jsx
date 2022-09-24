import React from 'react';
import axios from 'axios';
import './App.css';

import { HashRouter as Router, Route } from 'react-router-dom';

// IMPORT COMPONENTS
import Header from '../Header/Header.jsx';
import FeelingForm from '../FeelingForm/FeelingForm.jsx';
import UnderstandingForm from '../UnderstandingForm/UnderstandingForm.jsx';
import SupportForm from '../SupportForm/SupportForm.jsx';
import CommentForm from '../CommentForm/CommentForm.jsx';
import ReviewForm from '../ReviewForm/ReviewForm.jsx';
import ClosingForm from '../ClosingForm/ClosingForm.jsx';

function App() {

  return (
    <div className='App'>
      <Header />
      <Router>
        <div>
          <Route exact path="/">
            <FeelingForm />
          </Route>
          <Route exact path="/understanding">
            <UnderstandingForm />
          </Route>
          <Route exact path="/support">
            <SupportForm />
          </Route>
          <Route exact path="/commentform">
            <CommentForm />
          </Route>
          <Route exact path="/review">
            <ReviewForm />
          </Route>
          <Route exact path="/closing">
            <ClosingForm />
          </Route>
        </div>
      </Router>
    </div>
  );
}

export default App;
