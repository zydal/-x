import React,{Component} from 'react';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={{display:'flex',justifyContent:'space-between'}}>

        <p>Full details about our Company  <a href="https://beta.companieshouse.gov.uk/company/08974456">Click Here</a></p>


      <p>Call us on +44-77-6839-5815 | +44-78-8299-3970</p>
      </div>
    );
  }
}
