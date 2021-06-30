import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import BlogItem from "../blog-item";
// import posts from "../../../data/posts.json";
import { withRouter } from "react-router-dom";
 class BlogList extends Component {

  
  state ={
    posts:[]
  }

  // port(){
  //   let endpoint=""
  //   "http://localhost:3001/blogs" || "https://carls-blog-fe.herokuapp.com/"
  // }
  

  async fetchPosts(){
    try{
    let response = await fetch("https://carls-blog-fe.herokuapp.com/blogs")
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
      // this.fetchPosts()
      console.log(this.props)
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

export default withRouter(BlogList)