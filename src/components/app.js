import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink, Switch } from 'react-router-dom';

// import Posts from '../containers/posts';
import NewPost from '../containers/new_post';
import Homepage from '../containers/homepage';
import Post from '../containers/Post';
import SignIn from '../containers/SignIn';
import SignUp from '../containers/SignUp';
import NavBar from '../containers/NavBar';
import requireAuth from '../containers/RequireAuth';

// const Test = (props) => {
//   return <div> ID: {props.match.params.postID} </div>;
// };

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  render() {
    return (
      <Router>
        <div className="mainBody">
          <Nav />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/newPost" component={requireAuth(NewPost)} />
            <Route exact path="/posts/:postID" component={Post} />
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/signup" component={SignUp} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const Nav = (props) => {
  return (
    <nav className="navBar">
      <div>
        <ul className="navList">
          <li><NavLink to="/" exact>Home </NavLink></li>
          <li><NavLink to="/newPost">New Post! </NavLink></li>
        </ul>
      </div>
      <div>
        <NavBar />
      </div>
    </nav>
  );
};

export default App;
