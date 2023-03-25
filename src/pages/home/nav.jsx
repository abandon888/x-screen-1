import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <Menu mode="horizontal">
      <Menu.Item key="water">
        <Link to="/">水利</Link>
      </Menu.Item>
      <Menu.Item key="data">
        <Link to="/login">数据查询</Link>
      </Menu.Item>
      <Menu.Item key="model">
        <Link to="/model">模型展示</Link>
      </Menu.Item>
      <Menu.Item key="about">
        <Link to="/about">关于我们</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Nav;
