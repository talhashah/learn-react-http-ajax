import React, { Component } from "react";

import Post from "../../components/Post/Post";
import FullPost from "../../components/FullPost/FullPost";
import NewPost from "../../components/NewPost/NewPost";
import "./Blog.css";
import axios from "../../axios";

class Blog extends Component {
  state = {
    posts: [],
    selectedPostId: null,
    error: false,
  };

  componentDidMount() {
    axios
      .get("/posts")
      .then((response) => {
        const posts = response.data.slice(0, 4);
        const updatedPosts = posts.map((post) => {
          return { ...post, Author: "Talha" };
        });
        this.setState({ posts: updatedPosts });
        console.log(response);
      })
      .catch((error) => {
        // console.log(error);
        this.setState({ error: true });
      });
  }

  postSelectedHandler = (postId) => {
    console.log("Post Selected " + postId);
    this.setState({ selectedPostId: postId });
  };

  render() {
    let posts = <p style={{ textAlign: "center" }}>Something went wrong!</p>;
    if (!this.state.error)
      posts = this.state.posts.map((post) => (
        <Post
          author={post.Author}
          title={post.title}
          key={post.id}
          clicked={() => this.postSelectedHandler(post.id)}
        />
      ));

    return (
      <div>
        <section className="Posts">{posts}</section>
        <section>
          <FullPost id={this.state.selectedPostId} />
        </section>
        <section>
          <NewPost />
        </section>
      </div>
    );
  }
}

export default Blog;
