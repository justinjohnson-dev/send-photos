import React from 'react';
import './home.css';
import axios from 'axios';

class Home extends React.Component {

  constructor(props) {
      super(props);
      this.state ={
          file: null
      };
      this.clickSubmit = this.clickSubmit.bind(this);
      this.onChange = this.onChange.bind(this);
  }
  clickSubmit(e){
      e.preventDefault();
      const formData = new FormData();
      formData.append('myfile',this.state.file);
      const config = {
          headers: {
              'content-type': 'multipart/form-data'
          }
      };
      axios.post("http://localhost:5000/upload",formData,config)
          .then((response) => {
              alert("The file is successfully uploaded");
          }).catch((error) => {
      });
  }
  
  onChange(e) {
      this.setState({file:e.target.files});
  }

  render() {
      return (
        <div className="form-style">
            <form onSubmit={this.clickSubmit} className="mb-3">
                <h3> Attach Image Here </h3>
                <div className="form-group">
                    <label className="btn btn-secondary">
                        <input type='file' name='photo' accept='image/*' />
                    </label>
                </div>
                <button className="send-button">
                    <span>Send image!</span>
                </button>
            </form>
        </div>
      )
  }
}

export default Home;