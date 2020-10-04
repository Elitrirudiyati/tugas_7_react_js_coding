import React from 'react';
import {Breadcrumb, Col, Row} from 'react-bootstrap'


function PageBreadcrumb(){
return(
	<div>
	<Row>
	<Col>
	<Breadcrumb >
		<Breadcrumb.Item href="#">Home</Breadcrumb.Item>
  		<Breadcrumb.Item href="#">Berita</Breadcrumb.Item>
  		<Breadcrumb.Item active>Bola</Breadcrumb.Item>
	</Breadcrumb>
	</Col>
	</Row>
	
	</div>
	)
}

export default PageBreadcrumb;

