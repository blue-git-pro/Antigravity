import { Col, Button } from 'antd'
const GalleryItem = ({imgUrl, projectname, content}) =>{
  return (
    <div className= "blog-post">
      <div className= "image">
        <a href= "/gallery-detail">
          <img alt= "img"  src={imgUrl} />
        </a>
      </div>
      <div className="related-post-header">
        <a href="#"> {projectname} </a>
      </div>
      <div className="content">
        {content}
      </div>
  </div>
  )
}

export default GalleryItem

