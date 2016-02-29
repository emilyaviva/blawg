import React from 'react';

const NewPost = React.createClass({

  getInitialState() {
    return {postTitle: '', postBody: ''};
  },

  postTitleChange(e) {
    this.setState({postTitle: e.target.value});
  },

  postBodyChange(e) {
    this.setState({postBody: e.target.value});
  },

  handleNewPost(e) {
    e.preventDefault();
    const newPost = {
      title: this.state.postTitle,
      body: this.state.postBody
    };
    if (!newPost.title || !newPost.body) return;
    console.log(newPost);
    this.setState({postTitle: '', postBody: ''});
  },

  render() {
    return (
      <section className="new-post-area">
        <form id="new-post" onSubmit={this.handleNewPost}>
          <div>
            <span>Post Title:</span>
            <input
              type="text"
              name="postTitle"
              placeholder="Post Title"
              value={this.state.postTitle}
              onChange={this.handlePostTitleChange}
            />
            </div>
          <div>
            <textarea
              name="postBody"
              rows="10" cols="50"
              placeholder="Body of post goes here…"
              value={this.state.postBody}
              onChange={this.handlePostBodyChange}
            >
            </textarea>
          </div>
          <div>
            <input type="submit" value="Create New Post" />
          </div>
        </form>
      </section>
    );
  }

});

export default NewPost;
