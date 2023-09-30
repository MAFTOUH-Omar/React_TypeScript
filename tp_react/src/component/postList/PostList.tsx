import React from 'react'
import PostCard from "../postCrad/PostCrad"
import Card  from '../../types/type'
const PostList = async () => {
  const fetchData = async() => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    if(!res) console.log("Fetch Data Failing");

    return res.json()
  }
  const data = await fetchData();
  return (
    <div>
      {
        data.map((item : Card)=>(
          <PostCard key={item.id} id={item.id} title={item.title} body={item.body} />
        ))
      }
    </div>
  )
}

export default PostList