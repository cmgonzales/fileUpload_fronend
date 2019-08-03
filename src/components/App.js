import React,{Component} from 'react'
import Upload from './imageUpload'
import Image from './image'
import './styles/App.css'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import {Container} from 'reactstrap'


class App extends Component {
  render() {
    return (
      <div className = "background"> 
      <Router>
        <div>
        <Container fluid>
          <nav>
            <ul className = "nav">
              <li>
                <Link to={"/"} className="nav-link">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/image"} className="nav-link">
                  Image
                </Link>
              </li>
            </ul>
          </nav>
          </Container>
          <Switch>
            <Route exact path="/" component={Upload} />
            <Route path="/image" component={Image} />
          </Switch>
        </div>
      </Router>
      </div>
    );
  }
}

export default App;