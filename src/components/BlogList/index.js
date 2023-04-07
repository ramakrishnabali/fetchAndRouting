// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import BlogItem from '../BlogItem'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.fetchBlogList()
  }

  fetchBlogList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')

    const data = await response.json()

    const updateData = data.map(eachItem => ({
      id: eachItem.id,
      title: eachItem.title,
      imageUrl: eachItem.image_url,
      avatarUrl: eachItem.avatar_url,
      author: eachItem.author,
      topic: eachItem.topic,
    }))

    this.setState({blogList: updateData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <>
        <userInfo />
        <div data-textid="loader">
          {isLoading ? (
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          ) : (
            <ul className="blogListContainer">
              {blogList.map(eachBlog => (
                <BlogItem blog={eachBlog} key={eachBlog.id} />
              ))}
            </ul>
          )}
        </div>
      </>
    )
  }
}

export default BlogList
