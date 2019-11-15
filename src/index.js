import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Redirect, NavLink } from 'react-router-dom';
import { 
  Layout, 
  Menu
} from 'antd';

import Upload from "./pages/upload";
import Hop from "./pages/hop";

import './index.css';

const { Header, Footer, Content } = Layout;

function App() {
  return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
      <Layout className="layout">
        <Header>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[window.location.pathname]}
            style={{ lineHeight: '64px', float: 'right' }}
          >
            <Menu.Item key="/upload"><NavLink to="/upload">Upload</NavLink></Menu.Item>
            <Menu.Item key="/"><NavLink to="/">Hop</NavLink></Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '50px' }}>

          <Switch>
            <Route path="/upload" component={Upload} />
            <Route path="/" component={Hop} />
				    <Redirect to="/" />
          </Switch>
          
        </Content>
        <Footer style={{ textAlign: 'center' }}>upscoot © 2018 - {new Date().getFullYear()} | <a href={`legacy.html${window.location.search}`}>Legacy Hop</a></Footer>
      </Layout>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

