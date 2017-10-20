import React, { Component } from 'react';
import {} from 'react-router';
import { Layout, Header, Content, Drawer } from 'react-mdl';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout fixedHeader>
          <Header title="Travelbook" />

          <Drawer />
          <Content>
            <img src={logo} className="App-logo" alt="logo" />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default App;
