import React from 'react'

const TagList = ({tags}) => {
  return (
    <ul className="tag-list">



      
          <a href=''>News Article 1</a>
          <a href=''>News Article 2</a>
          <a href=''>News Article 3</a>
          <a href=''>News Article 4</a>
          <a href=''>News Article 5</a>
      {/* {tags.map(tag => (
        <li  className="tag-default tag pill tag-outline">
          <a href=''>News Article 1</a>
          <a href=''>News Article 2</a>
          <a href=''>News Article 3</a>
          <a href=''>News Article 4</a>
          <a href=''>News Article 5</a>
          <a href=''>News Article 6</a>

        </li>
      ))} */}
    </ul>
  )
}

export default TagList
