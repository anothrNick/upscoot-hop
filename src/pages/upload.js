import React, { Component } from 'react';
import { 
  Card, 
  Upload, 
  Icon, 
  Row, 
  Col, 
  Input, 
  Form, 
  Button, 
  Radio,
  Checkbox, 
  Alert,
} from 'antd';

const { Dragger } = Upload;

class UpScootUpload extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fileType: "file",
      fileList: [],
      msg: undefined,
      url: "",
      pass: "",
      h: false,
      uploading: false,
    }
  }

  updateFileType = (e) => {
    this.setState({fileType: e.target.value});
  }

  onChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  postForm = () => {
    const { fileList, url, pass, h } = this.state;
    const dis = this;
    if ((fileList.length > 0 || url !== "") && pass !== "") {
      var formData = new FormData();
      formData.append("file", fileList[0]);
      formData.append("url", url);
      formData.append("pass", pass);
      formData.append("h", h);
      
      fetch("https://i.sc0tt.net/", {
        method: "POST",
        body: formData
      }).then(function (res) {
        console.log(res);
        if (res.ok) {
          // all good
          dis.setState({uploading: false, msg: {type: "success", content: "Successfully uploaded!"}});
        } else if (res.status === 301) {
          if (res.redirected) {
            window.location.href = res.url;
          }
        } else{
          dis.setState({uploading: false, msg: {type: "error", content: "Failed to upload: " + res.status}});
        }
      }, function (e) {
        console.log(e);
        dis.setState({uploading: false, msg: {type: "error", content: "Error uploading: " + JSON.stringify(e)}});
      }).catch(function(e){
        console.log(e);
        dis.setState({uploading: false, msg: {type: "error", content: "Error uploading: " + JSON.stringify(e)}});
      });
    } else {
      this.setState({uploading: false, msg: {type: "warning", content: "Please fill out all fields"}});
    }
  }

  onSubmit = () => {
    this.setState({uploading: true, msg: undefined}, this.postForm);
  }

  render() {
    const { fileType, uploading, fileList, url, pass, h, msg } = this.state;
    const props = {
      onRemove: file => {
        this.setState(state => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },
      beforeUpload: file => {
        this.setState(state => ({
          fileList: [file],
        }));
        return false;
      },
      fileList,
    };

    return (
      <Row>
        <Col xs={24} lg={{span: 12, offset: 6}}>

          <Card title="New File">
            {msg && <Alert style={{marginBottom: "15px"}} message={msg.content} type={msg.type} showIcon />}
            <Form layout={"vertical"}>
              <Form.Item label="File">
                <Radio.Group defaultValue={"file"} value={fileType} onChange={this.updateFileType}>
                  <Radio.Button value="file">File</Radio.Button>
                  <Radio.Button value="url">URL</Radio.Button>
                </Radio.Group>
                {fileType === "file" && 
                <Dragger {...props}>
                  <p className="ant-upload-drag-icon">
                    <Icon type="inbox" />
                  </p>
                  <p className="ant-upload-text">Click or drag file to this area to upload</p>
                  
                </Dragger>
                }
                {fileType === "url" && 
                <Input placeholder="url to file..." name="url" value={url} onChange={this.onChange}/>}
              </Form.Item>
              
              <Form.Item label="Password">
                <Input placeholder="upscoot password..." type="password" name="pass" value={pass} onChange={this.onChange}/>
              </Form.Item>
              <Form.Item>
                <Checkbox name="h" checked={h} onChange={this.onChange}>Public</Checkbox>
              </Form.Item>
              <Form.Item style={{marginBottom: "0px"}}>
                <Button type="primary" size="large" loading={uploading} onClick={this.onSubmit}>Upload</Button>
              </Form.Item>
            </Form>

          </Card>

        </Col>
      </Row>
    )
  }
}

export default UpScootUpload;