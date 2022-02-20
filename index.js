class App extends React.Component {
    constructor() {
      super();
      this.state = {
        name: "",
        email: "",
        phonenumber:"",
      };
    }
  
    postData = (someUser) => {
      axios.post("https://reqres.in/api/users", someUser).then((res) => {
        console.log(res);
      });
      console.log("submitting form ", this.state.name, this.state.email, this.state.phonenumber);
    };
  
   
  
    changeName = (event) => {
      this.setState((prev) => {
        return {
          name: event.target.value,
        };
      });
      
    };
  
    changeEmail = (event) => {
      this.setState((prev) => {
        return {
          email: event.target.value,
        };
      });
   
    };
  
    changePhonenumber = (event) => {
        this.setState((prev) => {
          return {
            phonenumber: event.target.value,
          };
        });
      
      };

    render() {
    
      return (
        <div className="app-container">
          <div className="alert alert-primary">Form</div>
          
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter name"
                value={this.state.name}
                onChange={this.changeName}
              />
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                value={this.state.email}
                onChange={this.changeEmail}
              />
            </div>
            <div className="form-group">
              <label>Phone Number</label>
              <input
                type="text"
                className="form-control"
                placeholder="Phone Number"
                value={this.state.phonenumber}
                onChange={this.changePhonenumber}
              />
            </div>
            <button type="submit" className="btn btn-primary" onClick={this.postData}>
              Submit
            </button>
          </form>
     
        </div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById("root"));
  