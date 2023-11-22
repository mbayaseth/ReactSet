import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // object property
      person: {
        fullName: "Najjar Ramsay",
        bio: "Founder and chairman of Strategic Communication Consultancy (S2C) ",
        imgSrc: "images/najjar.jpeg",
        profession: "Media and communication expert",
      },
      shows: false,
      mountTime: null,
    };
  }
  // mounting time function
  componentDidMount() {
    this.setState({ mountTime: new Date() });

    // for the mounting time interval
    this.interval = setInterval(() => {
      this.forceUpdate();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  updateMountTime = () => {
    this.setState({ mountTime: new Date() });
  };

  toggleShow = () => {
    this.setState((prevState) => ({ shows: !prevState.shows }));
  };
// this part is for return after render
  render() {
    const { person, shows, mountTime } = this.state;

    return (
      <div className="  flex-row justify-center  bg-info ml-20 mr-20  align-center">
        <header>
          <h1 className=" flex bg-success  justify-center  fs-1 fw-bold py-2 text-body-secondary">
            Mr Najjar Ramsay
          </h1>
        </header>
        <button class="btn btn-success m-3" onClick={this.toggleShow}>
          About Me
        </button>
        {shows && (
          <div className="ml-20">
            <h1 className="fw-bold mb-3">{person.fullName}</h1>
            <p>{person.bio}</p>
            <img className="m-4" src={person.imgSrc} alt={person.fullName} />
            <p>
              {" "}
              <b>Profession:</b> {person.profession}
            </p>
          </div>
        )}
        {mountTime && (
          <p className="pl-5 fs-4 bg-success mt-4">
            <b>Time since mount:</b>{" "}
            {((new Date() - mountTime) / 1000).toFixed(1)} seconds
          </p>
        )}
      </div>
    );
  }
}

export default App;
