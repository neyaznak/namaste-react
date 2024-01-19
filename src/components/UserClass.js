import { Component } from "react";

class UserClass extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };

    console.log(this.props.name+ "Child Constructor");
  }

  componentDidMount(){
    console.log(this.props.name+ "Child Component Did Mount")

    //Api call
  }

  render() {
    const { name, location } = this.props;
    const { count } = this.state;

    console.log(this.props.name+ "Child Render");

    return (
      <div className="user-card">
        <h1>Count: {count}</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @neyaznak</h4>
      </div>
    );
  }
}
export default UserClass;
