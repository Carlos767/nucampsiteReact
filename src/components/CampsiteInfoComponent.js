import React, { Component } from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle,} from 'reactstrap';

class CampsiteInfo extends Component {
  constructor(props) {
    super(props);
  }

  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle>
              <h2>{campsite.name}</h2>
            </CardTitle>
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

  render() {
    if (this.props.campsite) {
      return (
        <div className="row">
          {this.renderCampsite(this.props.selectedCampsite)}
          {this.renderComments(this.props.campsite.comments)}
        </div>
      );
    } else {
      return <div />;
    }
  }
}

export default CampsiteInfo;
