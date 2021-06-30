import React, { Component } from "react";
import { Container } from "react-bootstrap";
// import { withRouter } from "react-router-dom";
import BlogList from "../../components/blog/blog-list";
import "./styles.css";

export default class Home extends Component {
  render() {
    return (
      <Container fluid="sm">
        <h1 className="blog-main-title">Welcome to the Strive Blog!</h1>
        <BlogList />
      </Container>
    );
  }
}
