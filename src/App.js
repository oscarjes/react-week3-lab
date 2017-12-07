import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { TabList, Tab } from "./Tabs.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: []
    };
  }

  componentDidMount() {
    this.setState({
      tabs: [
        ["a", ["A1", "A2", "A3"]],
        ["b", ["B1", "B2", "B3"]],
        ["c", ["C1", "C2", "C3"]]
      ]
    });
  }

  render() {
    const tabs = this.state.tabs.map(t => {
      const [k, h] = t;
      const inner = h.map((k2) => {
        return (
          <Tab name={k2} key={k2}>
            <h1>{k2}</h1>
          </Tab>
        );
      });

      return (
        <Tab name={k} key={k}>
          <TabList vertical key={k}>
            {inner}
          </TabList>
        </Tab>
      );
    });

    return (
      <TabList horizontal key="root">
        {tabs}
      </TabList>
    );
  }
}
export default App;
