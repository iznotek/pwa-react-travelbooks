import React, { Component } from 'react';
import {} from 'react-router';
import { Layout, Header, Content, Drawer } from 'react-mdl';
import navbarLogo from './logo-beta-white.svg';
import './App.css';
import Cards from './Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout fixedHeader>
          <Header>
            <img src={navbarLogo} />
          </Header>
          <Drawer />
          <Content>
            <Cards />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
