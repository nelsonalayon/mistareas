import React from 'react';
import { Card, Row, Col, DropdownButton, Dropdown } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faExclamationCircle, faExclamationTriangle, faLeaf } from '@fortawesome/free-solid-svg-icons'

class TaskCard extends React.Component {
  render() {
    return (
        <Card>
            <Card.Header>
                <Row>
                    <Col md={10} xs={8}>
                        <Card.Title>Task name</Card.Title>
                    </Col>
                    <Col md={1} xs={2}><a href="/"><FontAwesomeIcon icon={faEdit} /></a></Col>
                    <Col md={1} xs={2}><a href="/"><FontAwesomeIcon icon={faTrash} /></a></Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Card.Text>
                    Task description. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corporis inventore rerum illum, amet tempora illo expedita vel deleniti temporibus reiciendis repellendus. Quam veritatis suscipit delectus repudiandae a. Id, error corrupti.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <Row>
                    <Col md={3} xs={4}>
                        <DropdownButton title="Priority">
                            <Dropdown.Item href="#/action-1">Hi <FontAwesomeIcon icon={faExclamationCircle}  size="1x" color="red" /></Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Medium <FontAwesomeIcon icon={faExclamationTriangle}  size="1x" color="orange" /></Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Low <FontAwesomeIcon icon={faLeaf}  size="1x" color="green" /></Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    <Col md={3} xs={4}><strong>Deadline</strong></Col>
                    <Col md={3} xs={4}> <p> 13/08/20</p></Col>
                    <Col md={3}>
                        <DropdownButton title="Move to">
                            <Dropdown.Item href="#/action-1">To Do</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Doing</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Done</Dropdown.Item>
                        </DropdownButton></Col>
                </Row>
            </Card.Footer>
        </Card>
    );
  }
}

export default TaskCard;