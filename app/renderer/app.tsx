import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Title from './Title';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div>YK菌可视化简历平台</div>
          <div>Electron + React</div>
          <Title text='YK菌' />
        </Route>
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));