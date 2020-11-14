
import React, { Component } from 'react'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import Nav from './component/navbar/Nav'
import Show from './component/slide/slide'
import'./App.css'
import Cont from './component/content/Cont'

export class App extends Component {
  render() {
    return (
      <div>
        <Nav/>
        <Show/>
        <Cont/>
      </div>
    )
  }
}

export default App
