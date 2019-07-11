import React, {Component} from 'react';

class Zip extends Component {

  processZip = (e) => {
    if (e.target.value.length === 5) {
      this.props.searchZipCode(e.target.value);
    } else if (e.target.value.length === 0) {
      e.target.value = '';
      this.props.searchZipCode('');
    }
  }


  render() {
    const ctMessage =  ( this.props.zipLocation.indexOf("CT") === -1) ? '' : this.props.ctMessage;
    const messageClass =  ( this.props.zipLocation.indexOf("Enter") > -1) ? 'initial' : 'location';

    return (
      <div className="main-content">
        <div id="divZipInput">
        <label> <span className="required">*</span> ZIP</label>
          <input 
            onChange={this.processZip}
            type="text" 
            className="form-control" 
            maxLength="5" 
            required />
          </div>
          <div id="cityState" className={messageClass}>
            {this.props.zipLocation}
          </div>
          <div id='ctMessage'>{ctMessage}</div>
        </div>
    )
  }
}

export default Zip