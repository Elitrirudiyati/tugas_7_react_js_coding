import React from 'react';
import {Media} from 'react-bootstrap'


function PageMedia(){
return(
	<div>
		<Media>
  		<img
    		width={38}
    		height={38}
    		className="mr-3"
    		src="https://banner2.kisspng.com/20180420/kuq/kisspng-computer-icons-user-clip-art-my-vector-5ad9a348cd2ce1.8035052415242125528404.jpg "
    		alt="icon"
  		/>
  		<Media.Body>
    	<h5>Andreas</h5>    
  		</Media.Body>
		</Media>
  	</div>	
	)
}

export default PageMedia;