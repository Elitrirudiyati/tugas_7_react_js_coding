import React from 'react';
import {Badge, Button} from 'react-bootstrap'


function PageBadge(){
return(
	<div>
		<Button variant="primary">
  			Notifikasi 
  			<Badge variant="light">9</Badge>
  		<span className="sr-only">unread messages</span>
		</Button>
		<Button variant="primary">
  			Message 
  			<Badge variant="light">19</Badge>
  		<span className="sr-only">unread messages</span>
		</Button>
	
	</div>
	)
}

export default PageBadge;