import React, { Component } from "react";
import DropDownList from "./DropDownList";

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false
    };
  }

  ckMenu = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div className="flex flex-col items-center mr-3">
        <button
          className="block self-end focus:outline-none"
          onClick={this.ckMenu}
        >
          <span>MENU</span>

          {this.state.isOpen ? (
            <i className="fas fa-times-circle text-white ml-2"></i>
          ) : (
            <i className="fas fa-bars text-white ml-2"></i>
          )}
        </button>
        <div className="w-full">{this.state.isOpen && <DropDownList />}</div>
      </div>
    );
  }
}

export default MenuBar;
