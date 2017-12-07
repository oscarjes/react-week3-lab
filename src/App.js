import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TabList, Tab } from "./Tabs.js";
import {withGithub} from "./GithubApi.js";
import Homepage from "./Homepage.js";



class App extends Component {
  
  render() {
    const clientId = "PLACEHOLDER";
    const WrappedHomePage = withGithub(Homepage, clientId);
    return (
      <WrappedHomePage />
    );
  }
}

export default App;
