import React, { Component } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { Container, Form, Button } from "react-bootstrap";
// import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import "./styles.css";
export default class NewBlogPost extends Component {
  state ={

    blog:{
      title:"",
      content:"",
      category:"",
      author:{
          name:"",
          avatar:""
      },
      readTime:{
          unit:"minute",
          value:0
      },
      cover:""
    }

  }

handleChange(e){
  let id = e.target.id
  console.log(new Date())

  console.log(id)
  this.setState({blog:{
    ...this.state.blog,
    [id]:e.target.value}})

  console.log(this.state.blog)
}

changeContent=(value)=>{
  console.log(value)
  this.setState({blog:{
    ...this.state.blog,
    content:value}})
}

changeAuthorName = (e) =>{
  console.log(e.target.value)
  this.setState({blog:{
    ...this.state.blog,
    author:{name:e.target.value}}})
}

changeAuthorAvatar = (e) =>{
  console.log(e.target.value)
  this.setState({blog:{
    ...this.state.blog,
    author:{avatar:e.target.value}}})
}

changeBlogCover = (e) =>{
  console.log(e.target.value)
  this.setState({blog:{
    ...this.state.blog,
    cover:e.target.value}})
}



handleSubmit=(e)=>{

  e.preventDefault()

  try{
      let response = fetch("http://localhost:3001/blogs"
      ,{
        method:'POST',
        body:JSON.stringify(this.state.blog),
        headers:{
          "Content-type":"application/json"
        }
      })
      if(response.ok){
        console.log("Blog has been added")
        this.setState({
          blog:{
            title:"",
            content:"",
            category:"",
            author:{
                name:"",
                avatar:""
            },
            readTime:{
                unit:"minute",
                value:0
            },
            cover:""
          }
        })
        
      }
    }
    catch(err){
      alert("Houston we have problem",err)
    }
}



  render() {
    return (
      <Container className="new-blog-container">
        <Form className="mt-5">
    
        <Form.Group  className="mt-3">
            <Form.Label>Author </Form.Label><br/>

            <Form.Control className="mb-3 d-inline" id="author.name"   onChange={(e)=> this.changeAuthorName(e)} size="lg" type="text"/>
            
           <Form.Label>Avatar </Form.Label><br/>
           <Form.Control className="mb-3" id="author.avatar"   onChange={(e)=> this.changeAuthorAvatar(e)} size="lg" type="file"/>
           {/* <Form.Control className="mb-3" id="author.avatar" placeholder="Avatar image URL" onChange={(e)=> this.handleChange(e)} size="lg" type="text"/> */}
         
          </Form.Group>

          <Form.Group className="mt-3">
            <Form.Label>Title</Form.Label>
            <Form.Control id="title" value={this.state.blog.title} onChange={(e)=> this.handleChange(e)} size="lg" placeholder="Title" />
          </Form.Group>
         
          <Form.Group  className="mt-3">
            <Form.Label>Category</Form.Label>
            <Form.Control id="category" value={this.state.blog.category}  onChange={(e)=> this.handleChange(e)} size="lg" as="select">
              <option>None</option>
              <option>Category1</option>
              <option>Category2</option>
              <option>Category3</option>
              <option>Category4</option>
              <option>Category5</option>
            </Form.Control>
          </Form.Group>
          {/* controlId="blog-content" */}

          <Form.Group  className="mt-3">

            <Form.Label>Upload a Cover</Form.Label><br/>
            <Form.Control className="mb-3" id="cover" value={this.state.blog.cover}   onChange={(e)=> this.handleChange(e)} size="lg" type="file"/>
          </Form.Group>

          <Form.Group  className="mt-3">
            <Form.Label>Blog Content</Form.Label>
            <ReactQuill
            id="content"
              value={this.state.blog.content}
              onChange={this.changeContent} 
              className="new-blog-content"
            />
          </Form.Group>
          <Form.Group className="d-flex mt-3 justify-content-end">
            <Button type="reset" size="lg" variant="outline-dark">
              Reset
            </Button>
            <Button
              type="submit"
              onSubmit={(e) => this.handleSubmit(e)}
              size="lg"
              variant="dark"
              style={{ marginLeft: "1em" }}
               >
              Submit
            </Button>
          </Form.Group>
        </Form>
      </Container>
    );
  }
}
