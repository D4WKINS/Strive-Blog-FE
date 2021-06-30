import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
// import posts from "../../../data/posts.json";
export default class BlogList extends Component {

  
  state ={
    posts:[]
  }

  async fetchPosts(){
    try{
    let response = await fetch("http://localhost:3001/blogs")
    if(response.ok){
    let allPosts = await response.json()
    this.setState({posts:allPosts})
    console.log(this.state.posts)

    }
  }catch(err){
    console.log("Something went wrong",err)
  }
  }
   componentDidMount=()=>{
      this.fetchPosts()
   }

  render() {
    return (
      <Row>
        {this.state.posts.map((post) => (
          <Col md={4} style={{ marginBottom: 50 }}>
            <BlogItem key={post.title} {...post} />
          </Col>
        ))}
      </Row>
    );
  }
}
