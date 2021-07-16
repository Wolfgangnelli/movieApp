import React, { Component } from "react";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: "",
    };
  }

  searchTChange = (e) => {
    this.setState({
      searchTerm: e.target.value,
    });
  };

  searchClicked = (e) => {
    e.preventDefault();
    this.props.onSearchTerm(this.state.searchTerm);
  };

  render() {
    return (
      <div className="w-full">
        <form className="flex">
          <input
            type="text"
            name="user_search"
            id="search"
            className="bg-input-search py-2 md:focus:w-full"
            placeholder="Search a Film...."
            value={this.state.searchTerm}
            onChange={this.searchTChange}
          />
          <button
            type="submit"
            className="p-2 bg-blue-500 hover:bg-blue-600 rounded md:px-6 lg:px-8"
            onClick={this.searchClicked}
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default SearchBar;
