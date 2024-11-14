import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

class SearchBar extends Component {
  state = {
    query: ''
  };

  handleSearchChange = (event) => {
    this.setState({ query: event.target.value });
  };

  handleSearchSubmit = (event) => {
    event.preventDefault();
    console.log("Searching for:", this.state.query);
    // Add your search API logic here
  };

  render() {
    return (
      <div className="search-bar-banner">
        <div className="container">
          <h1>Find your next car</h1>
          <Form inline onSubmit={this.handleSearchSubmit}>
            <Form.Control
              type="text"
              placeholder="Search for cars..."
              value={this.state.query}
              onChange={this.handleSearchChange}
            />
            <Button type="submit" variant="outline-success">Search</Button>
          </Form>
        </div>
      </div>
    );
  }
}

export default SearchBar;
