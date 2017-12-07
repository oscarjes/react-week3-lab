import React, { Component } from "react";

function withGithubLogin(WrappedComponent, clientId) {

  return class extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        token: null
      }
    }

    get(url) { return fetch(`https://api.github.com/${url}?access_token=${this.props.token}`).then((data) => data.json()) }
      

    render() { return <WrappedComponent get={this.get.bind(this)} {...this.props} /> }
      
  }
}

export function withGithub(WrappedComponent, clientId) {
  const base = class extends React.Component {
  }
  return withGithubLogin(base, clientId);
}
