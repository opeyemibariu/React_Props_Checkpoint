import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "react-bootstrap/Card";

const Player = ({ name='playerName', image='playerImage', team='playerTeam', age='playerAge', nationality='playerCountry', jerseyNumber='playerJerseyNumber'}) => {
  return (
    <Fragment>
      <Card className="w-25 mb-4 mx-4">
        <Card.Img src={image} className="h-25" />
        <Card.Body>
          <Card.Title>Name: {name}</Card.Title>
          <Card.Text className="fw-bold text-secondary">Team: {team}</Card.Text>
          <Card.Text className="text-primary">Country of Origin: {nationality}</Card.Text>
          <Card.Text>Jersey: {jerseyNumber}</Card.Text>
          <Card.Text className="text-warning">Age: {age}</Card.Text>
        </Card.Body>
      </Card>
    </Fragment>
  )
}

export default Player