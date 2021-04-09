import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useHistory } from "react-router-dom";
import { createImageFromInitials } from './Utils';


const PersonCard = (props) => {
    const website = "http://" + props.website;
    const history = useHistory();

    const handleClick = () => {

        history.push("/user/" + props.id);
    };

    return (
            <Card className="card">
                <Card.Body>
                    <Card.Img className="card-image" variant="top" src={createImageFromInitials(500, props.name)} />
                    <Card.Title className="card-title">{props.name}</Card.Title>
                    <p className="card-username">@{props.username}</p>
                    <Card.Text className="card-text">
                        <a href={website} >{website}</a>
                    </Card.Text>
                    <div className="card-button-container">
                    <Button className="card-button" onClick={handleClick} variant="primary">More Details</Button>
                    </div>
                </Card.Body>
            </Card>
    )
}

export default PersonCard;