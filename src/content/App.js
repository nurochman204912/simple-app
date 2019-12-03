import React, {Component,Fragment} from 'react';
import '../style/style.css';
import home from './home/home';
import form from './event/event';

import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

class app extends Component{
    render(){
      return(
        <Router>
            <div className="wrapper">
              <div className="header">
                <div className="navbar">
                  <div className="logo">
                    <img className="imgfluid" src={require('../logo/babastudio-logo.png')}/>
                  </div>
                  <div className="menu">
                    <ul>
                      <li><Link to="/" className="li">Home</Link></li>
                      <li><Link to="/8" className="li">Blogs</Link></li>
                      <li><Link to="/9" className="li">Galeri</Link></li>
                      <li><Link to="/form" className="li">Kontak</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <Fragment>
                {/*home*/}
                <Route path="/" exact component={home}/>

                <Route path="/form" component={form}/>
              </Fragment>

            </div>
          </Router>
      )

    }
}
export default app;