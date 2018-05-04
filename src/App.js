import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, } from 'antd';

class App extends Component {

constructor(props){
  super(props)

  this.state = {
    data:[],
    loadiing:true
  }
}

componentDidMount(){


  var that = this;
  
  var url ='' 

  fetch(url)
  .then(function(data){
    return data.json()
  })
  .then(function(response){
    var data = response.data;
    that.setState({data:data,loadiing:false})
  })
}


  render() {

    const columns = [{
      title: 'Time',
      dataIndex: 'date',
      key: 'date',

    }, {
      title: 'Transaction',
      dataIndex: 'id',
      key: 'id',
        render: text => <a href={'http://blockchain.info/tx/'+text}>{text}</a>,
    }, {
      title: 'Amount',
      dataIndex: 'amt',
      key: 'amt',
      render:t => <div><strong>BTC</strong> {t}</div>
    }];



    return (
      <div >
        <Table columns={columns} dataSource={this.state.data} pagination={false} loading={this.state.loadiing}/>
      </div>
    );
  }
}

export default App;
