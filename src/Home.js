import React, { Component } from 'react';
import App from './App'
import Recieve from './Recieve'
import Paid from './Paid'
import { Tabs } from 'antd';
import Box from './Box'
import Faq from './Faq'
import Footer from './Footer'


const TabPane = Tabs.TabPane;

export default class Home extends Component{

  constructor(props){
    super(props);
    this.state={
      depo_first:'',
      depo_third:'',
      pay_first:'',
      pay_third:''
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
      that.setState({depo_first:data[1].first,depo_third:data[1].second,pay_first:data[2].first,pay_third:data[2].second})

    })
  }



  render(){


    return(
      <div style={{backgroundColor:"#f5f5f5"}}>

        <div style={{backgroundColor:'#333'}}>
          <div style={{margin:'auto',width:'90%',height:60,backgroundColor:'#333',display:'flex',padding:5}}>
            <h1 style={{color:'green',fontWeight:'bold'}}>Double</h1><h1 style={{color:'orange',fontWeight:'bold'}}>My</h1><h1 style={{color:'white',fontWeight:'bold'}}>Bits</h1>
          </div>
        </div>
        <br />

        <div style={{margin:'auto',width:"90%",height:130,display:'flex',justifyContent:'space-between',}}>

          <Box color="#0088cc" first="24 Hours" second="Instant payment to wallet after 24 hours" third="Min-0.005 | Max-&#8734;"/>
          <Box color="#e53935" first={this.state.depo_first} second="Total Deposits" third={this.state.depo_third}/>
          <Box color="#388e3c"first={this.state.pay_first} second="Total Paid" third={this.state.pay_third}/>


        </div>
        <br />

        <Recieve />
        <br />

      <div style={{margin:'auto',width:'90%',backgroundColor:'#fff',padding:30}}>

        <h2 style={{textAlign:'center'}}>Current Transactions</h2>

        <Tabs defaultActiveKey="1" >
         <TabPane tab="Deposits" key="1"><App /></TabPane>
         <TabPane tab="Paybacks" key="2"><Paid /></TabPane>

       </Tabs>

      </div>


      <br />
<br />


      <div style={{width:'90%',margin:'auto',padding:18,backgroundColor:'#fff'}}>
        <h2 style={{textAlign:'center'}}>FAQ</h2>
        <br/>
          <Faq />
      </div>

<br />

  <div style={{width:'90%',margin:'auto',padding:18,backgroundColor:'#fff'}}>
    <h2 style={{textAlign:'center'}}>Contact Us</h2>
    <br/>
    <Footer />
  </div>

<br />

      </div>
    )
  }
}
