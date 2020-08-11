import React from 'react';
import TaskCard from './Card';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import '../taskstyles.css';

class TaskContainer extends React.Component {
  render() {
    return (
        <Container fluid>
            <Row>
                <Col md={3}>
                    <div className="mb-2">
                        <Button variant="primary" size="lg">
                        Add Task <FontAwesomeIcon icon={faPlus} size="1x" />
                        </Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col sm={4}>
                    <h2>To Do</h2>
                    <TaskCard />
                </Col>
                <Col sm={4}>
                <h2>Doing</h2>
                    <TaskCard />
                    <TaskCard />
                    <TaskCard />
                </Col>
                <Col sm={4}>
                    <h2>Done</h2>
                    <TaskCard />
                </Col>
            </Row>
      </Container>
    );
  }
}

export default TaskContainer;