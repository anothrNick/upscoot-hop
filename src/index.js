import React from 'react';
import ReactDOM from 'react-dom';
import { 
  Layout, 
  Menu, 
  Card, 
  Upload, 
  Icon, 
  message, 
  Row, 
  Col, 
  Input, 
  Form, 
  Button, 
  Radio,
  Checkbox, 
} from 'antd';
import './index.css';

const { Header, Footer, Content } = Layout;
const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: false,
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};


function App() {
  const formItemLayout ={
            labelCol: { span: 4 },
            wrapperCol: { span: 14 },
          };

  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          style={{ lineHeight: '64px', float: 'right' }}
        >
          <Menu.Item key="1">Upload</Menu.Item>
          <Menu.Item key="2">Hop</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '50px' }}>

        <Row>
          <Col xs={24} lg={{span: 12, offset: 6}}>

            <Card title="New File">
              <Form layout={"vertical"}>
                <Form.Item label="File">
                  <Radio.Group defaultValue={"a"}>
                    <Radio.Button value="a">File</Radio.Button>
                    <Radio.Button value="b">URL</Radio.Button>
                  </Radio.Group>
                  <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    
                  </Dragger>
                </Form.Item>
                <Form.Item label="Username">
                  <Input placeholder="input placeholder" />
                </Form.Item>
                <Form.Item label="Password">
                  <Input placeholder="input placeholder" type="password"/>
                </Form.Item>
                <Form.Item>
                  <Checkbox>Public</Checkbox>
                </Form.Item>
                <Form.Item style={{marginBottom: "0px"}}>
                  <Button type="primary" size="large">Upload</Button>
                </Form.Item>
              </Form>

            </Card>

          </Col>
        </Row>
        
      </Content>
      <Footer style={{ textAlign: 'center' }}>upscoot © 2018 - {new Date().getFullYear()}</Footer>
    </Layout>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

