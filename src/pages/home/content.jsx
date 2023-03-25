import React from 'react';
import { Layout, Row, Col } from 'antd';

const { Content } = Layout;

const HomeContent = () => {
  return (
    <Content className="site-layout-background">
      <Row gutter={[16, 16]}>
        <Col span={24}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Row gutter={[16, 16]}>
              <Col span={8}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  Card 1
                </div>
              </Col>
              <Col span={8}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  Card 2
                </div>
              </Col>
              <Col span={8}>
                <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
                  Card 3
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Content>
  );
};

export default HomeContent;
