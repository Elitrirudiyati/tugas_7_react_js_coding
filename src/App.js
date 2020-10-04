import React from 'react';
import './App.css';
import './css/bootstrap.min.css'
import PageButton from './Component/PageButton'
import PageBadge from './Component/PageBadge'
// import PageButtonGroup from './Component/PageButtonGroup'
import PageBreadcrumb from './Component/PageBreadcrumb'
import PageCards from './Component/PageCard'
import PageMedia from './Component/PageMedia'
import {Container, Col, Row} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
    <Container> 
    <Row>
    <Col>
    <PageButton/>
    </Col><Col></Col><Col></Col>
    <Col md="auto">
    <PageBadge/>
    </Col>
    <Col xs lg="2">
    <PageMedia/>
    </Col>

    </Row> 
    <br/>
    <Row>
    <Col></Col>
    <Col></Col>
    <Col sm={4}><PageBreadcrumb/></Col>
    </Row>
    <br/>
    <Row>    
    <PageCards/>
    </Row>
    </Container>
      
    </div>
  );
}

export default App;
