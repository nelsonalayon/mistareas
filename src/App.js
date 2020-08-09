import React from 'react';
import TaskCard from './components/Card';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Container fluid>
        <Row>
          <Col sm={4}>
            <TaskCard />
          </Col>
          <Col sm={4}><TaskCard />
          </Col>
          <Col sm={4}><TaskCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
