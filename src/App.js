import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Content from './components/Content/Content';
import { Route, Router } from 'react-router-dom';
import { fetchBuilders } from './store/actions/builderActions';
import { connect } from 'react-redux';
import FormContainer from './components/FormContainer/FormContainer';
import history from './history';

function App({fetchBuilders}) {
  useEffect(() => {
    fetchBuilders();
  }, [fetchBuilders]);
  return (
    <div className="App">
      <Router history={history}>
          <Route path='/' exact component={Header} />
          <Route path='/' exact component={Content} />
          <Route path='/:id' exact component={FormContainer} />
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({
  ...state
});

const mapDispatchToProps = dispatch => ({
  fetchBuilders: () => dispatch(fetchBuilders())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
