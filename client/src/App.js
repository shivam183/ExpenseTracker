import React from 'react';
import Header from './components/Header'
import Addtransaction from './components/Addtransaction'
import TransactionList from './components/TransactionList'
import Balance from './components/Balance'
import IncomeExpenses from './components/IncomeExpenses'
import Login from './components/Login'
import Register from './components/Register'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import PrivateRoute  from './components/PrivateRoute'
import './App.css';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/Register" exact component={Register} />
            <PrivateRoute path="/tracker" component={() =>
              <>
                <Balance />
                <IncomeExpenses />
                <TransactionList />
                <Addtransaction />
              </>
            } />
          </Switch>
        </div>
      </Router>
    </div >
  );
}

export default App;
