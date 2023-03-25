import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import Model1 from './model1';
import Model2 from './model2';


const { SubMenu } = Menu;

const ModelNav = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      style={{ height: '100%', borderRight: 0, backgroundColor: '#f0f2f5' }}
    >
      <SubMenu key="sub1" title="模型">
        <Menu.Item key="1">
          <Link to="/model/model1">模型一</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/model/model2">模型二</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/model/model3">模型三</Link>
        </Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export { Model1, Model2 };
export default ModelNav;
