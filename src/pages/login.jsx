class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ' ',
      password: ' ',
    };
  }
  handleLogin = () => {
    this.setState({
      name: this.event.target.value,
      password: this.event.target.value,
    });
  };
  render() {
    return (
      <div className="flex-container">
        <div className="flex">
          <label className="label-login" htmlFor="username">
            Name{' '}
          </label>
          <input id="username" type="text" onChange={this.handleLogin()} />
        </div>
        <br />
        <div className="flex">
          <label
            className="label-password"
            htmlFor="password"
            onChange={this.handleLogin()}
          >
            Password{' '}
          </label>
          <input id="password" type="password" />
        </div>
        <br />
        <div>
          <button onClick={this.handleSumit()}>Submit</button>
        </div>
      </div>
    );
  }
}

export default Login;
