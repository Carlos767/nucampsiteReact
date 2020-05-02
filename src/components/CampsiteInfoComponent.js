import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

class CampsiteInfo extends Component {

  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    if (comments) {
      return (
        <div className="col-md-5 m1">
          <h4>Comments</h4>
          {comments.map((comment) => (
            <div key={comment.id}>
              {comment.text}
              {comment.author}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </div>
          ))}
        </div>
      );
    }
    return <div />;
  }
}


function CampsiteInfo(props) {
  if (this.props.campsite) {
    return (
      <div className="container">
          <div className="row">
              <div className="col">
                  <Breadcrumb>
                      <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                      <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
                  </Breadcrumb>
                  <h2>{props.campsite.name}</h2>
                  <hr />
              </div>
          </div>
          <div className="row">
              <RenderCampsite campsite={props.campsite} />
              <RenderComments comments={props.comments} />
          </div>
      </div>
    );
  }
  return <div />;
}


export default CampsiteInfo;