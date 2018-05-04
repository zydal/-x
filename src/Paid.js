import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Table, } from 'antd';

class Paid extends Component {

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
      dataIndex: 'url',
      key: 'url',
        render: text => <a href={text}>{text}</a>,
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

export default Paid;
