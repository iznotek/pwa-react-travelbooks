import React, { Component } from 'react';
import {} from 'react-router';
import { Layout, Header, Content, Drawer } from 'react-mdl';
import navbarLogo from './logo-beta-white.svg';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout fixedHeader>
          <Header>
            <img src={navbarLogo} />
          </Header>
          <Drawer />
          <Content />
        </Layout>
      </div>
    );
  }
}

export default App;
