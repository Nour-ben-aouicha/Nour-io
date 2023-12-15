import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, link }) => {
  const cardStyle = { color: 'white' };
  return (
    <Col size={12} sm={6} md={4}>
      <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <div className="proj-txtx" style={cardStyle}>
            <h4>{title}</h4>
            <h6 style={cardStyle}>{description}</h6>
          </div>
        </div>
      </a>
    </Col>
  )
}
