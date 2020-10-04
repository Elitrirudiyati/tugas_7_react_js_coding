import React from 'react';
import {ButtonGroup} from 'react-bootstrap'


function PageButtonGroup(){
return(
		<div>
		<ButtonToolbar className="mb-3" aria-label="Toolbar with Button groups">
    	<ButtonGroup className="mr-2" aria-label="First group">
      	<Button variant="Light">Andreas</Button>{' '}
       	</ButtonGroup>
    <InputGroup>
      <InputGroup.Prepend>
        <InputGroup.Text id="btnGroupAddon" src =" https://www.google.com/url?q=https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg&sa=D&ust=1601703068511000&usg=AOvVaw0CZl_GLNCGBrI_fF2LFnov"></InputGroup.Text>
      </InputGroup.Prepend>
     
  </ButtonToolbar>
		</div>


	
	)
}

export default PageButtonGroup;