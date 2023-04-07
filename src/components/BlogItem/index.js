// Write your JS code here

import {Link} from 'react-router-dom'

import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blog

  return (
    <Link to={`/blogs/${id}`} className="navLink">
      <div className="blogContainer">
        <img src={imageUrl} alt={`item${id}`} className="blogListImage" />
        <div className="profileContainer">
          <p className="blogListTopic">{topic}</p>
          <h1 className="blogListTitle">{title}</h1>
          <div className="avatarContainer">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatarImage" />
            <p className="blogListAuthor">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem
