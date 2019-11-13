import React, { Component } from 'react';
import { 
  Spin,
  Menu,
} from 'antd';

const image_types = ["jpg", "png", "gif", "jpeg", "webp"];

class Hop extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: window.location.search,
      data: {},
      loading: true,
      loadingImages: false,
      selectedItem: 0
    };
  }

  parseData = (data) => {
    console.log(data);
    this.setState({data, loading: false});
  }

  componentWillMount() {
    const { query } = this.state;
    const ref = this;
    fetch(`https://i.sc0tt.net/hop.json${query}`, {
        method: "GET"
      }).then(response => response.json())
        .then(data => {
          ref.parseData(data);
      });
  }

  getMedia = (url) => {
    var ext = url.split('.').pop().toLowerCase();
  
    if (ext == 'mp4' || ext == 'webm') {
      return (<video controls class="media"><source src={url} type={`video/${ext}`} /></video>);
    } else if (ext == 'mp3') {
      return (<audio controls class="media"><source src={url} type={`audio/${ext}`} /></audio>);
    } else if (image_types.includes(ext)) {
      return (<a href={url}><img src={url} alt={url} /></a>);
    } else {
      return url;
    }
  }

  // i did not write this
  splitUp = (arr, n) => {
    var rest = arr.length % n, // how much to divide
        restUsed = rest, // to keep track of the division over the elements
        partLength = Math.floor(arr.length / n),
        result = [];

    for(var i = 0; i < arr.length; i += partLength) {
        var end = partLength + i,
            add = false;

        if(rest !== 0 && restUsed) {
            end++;
            restUsed--;
            add = true;
        }

        result.push(arr.slice(i, end)); // part of the array

        if(add) {
            i++; // also increment i in the case we added an extra element for division
        }
    }

    return result;
  }

  renderMedia = (year) => {
    const { data } = this.state;
    const srcs = data[year];
    const childElements = srcs.map(function(element){
      return this.getMedia(element);
    }, this);

    var columns = this.splitUp(childElements, 4);
    setTimeout(() => this.setState({loadingImages: false}), 1)
    return (
        <div className="urow">
            <div className="ucolumn">
              {columns.length > 0 && columns[0]}
            </div>
            <div className="ucolumn">
              {columns.length > 1 && columns[1]}
            </div>
            <div className="ucolumn">
              {columns.length > 2 && columns[2]}
            </div>
            <div className="ucolumn">
              {columns.length > 3 && columns[3]}
            </div>
        </div>
    );
  }

  handleClick = e => {
    this.setState({
      loadingImages: true,
      selectedItem: e.key,
    });
  };

  render() {
    const { loading, loadingImages, data, selectedItem } = this.state;
    return (
      <>
        {loading && <Spin size="large" className="center" />}
        {!loading &&
          <>
            <Menu style={{backgroundColor: "transparent"}} onClick={this.handleClick} mode="horizontal" selectedKeys={[selectedItem + ""]}>
              {Object.keys(data).map(function(key, i){
                return (
                  <Menu.Item key={i} >
                    {key}
                  </Menu.Item>
                )
              })}
            </Menu>
            {loadingImages && <Spin size="large" className="center" />}
            {!loadingImages && this.renderMedia(Object.keys(data)[selectedItem])}
          </>
        }
      </>
    )
  }
}

export default Hop;
