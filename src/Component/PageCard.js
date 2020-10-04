import React from 'react';
import {CardGroup, Card, Button, Row, Container, Col} from 'react-bootstrap';



function PageCards(){
return(
	<div>
     <CardGroup>
      <Container>
      <Row>
      <Col sm={3}>			
  		<Card style={{ width: '18rem' }}>      
  		  <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/f7/ad/diego-godin-vs-thailand_l9viaa2o7afh19gjl6vnekbgq.jpg?t%3D-1214473334%26w%3D1920%26h%3D1362%26quality%3D100&sa=D&ust=1601703068511000&usg=AOvVaw2WFYv1k9ozj_BgpnmUuykK/100px100" />
        <Card.Body align="left">
    			<Card.Title > Diego Godin Ukir Rekor Spesial Lawan Thailand</Card.Title>
    				<Card.Text >
      					Godin sekarang menjadi pemain Uruguay dengan caps terbanyak setelah membantu negaranya melibas Thailand di final Piala Tiongkok.
                Diego Godin boleh berbangga setelah resmi menjadi
    				</Card.Text>            
                <Button variant="primary">Read More
                </Button>{''}
      </Card.Body>
      </Card>    	
  		</Col>
      

    <Col sm={3}>
    <Card style={{ width: '18rem' }}>    
      <Card.Img variant="top" src="https://images.performgroup.com/di/library/GOAL/30/f0/neymar-psg-paris-saint-germain-2018-19_gmakk5891n9c19udcwofmrsgc.jpg?t=-1258742791&quality=60&w=1600 /100px160" name="Neymar" varian="top" />
       <Card.Body align="left">   
          <Card.Title > Neymar Bahas Kontrak Baru Di Paris Saint-Germain</Card.Title>
            <Card.Text >
                Ayah sang pemain bintang Brasil berusaha meredam rumor ketertarikan Madrid.
                Neymar sedang berdiskusi dengan Paris Saint-Germain soal perpanjangan kontrak bersama kampiun Ligue 1 Prancis, demikian kata ayahnya.
                
            </Card.Text>
                <Button variant="primary" class="btn btn-primary">Read More
                </Button>  
    </Card.Body>    
    </Card>    
    </Col>

    <Col sm={3} >
      <Card style={{ width: '18rem' }}>      
      <Card.Img variant="top" src=" https://images.performgroup.com/di/library/GOAL/f3/33/england-celebrate-vs-montenegro_e97kv5anpqlq1gr9nc2qaz4ko.jpg?t%3D-1232521935%26quality%3D60%26w%3D1600&sa=D&ust=1601703068595000&usg=AOvVaw3zn4msJ8BW28ImVfGGPMju /100px160"  />
          <Card.Body align="left">
          <Card.Title > Inggris Mau Jadi Tim Terbaik Di Dunia</Card.Title>
            <Card.Text >
                Kumpulan talenta terbaik yang dimiliki Inggris saat ini membuat Barkley sangat optimistis.
                Ross Barkley merasa Inggris sudah berada di jalur yang benar untuk bisa menjadi tim terbaik di dunia dengan banyaknya talenta yang muncul sekarang ini.
                
            </Card.Text>
            <Button variant="primary" >Read More
            </Button>
            </Card.Body>      
      </Card>      
      </Col>

    <Col sm={3}>
    <Card style={{ width: '18rem' }}>    
      <Card.Img variant="top" src=" https://images.performgroup.com/di/library/GOAL/63/7f/sani-rizki-fauzi-indonesia-u-22_4yztc4nehkt61fa7omuyagf71.jpg?t%3D351764441%26quality%3D60%26w%3D1600&sa=D&ust=1601703068595000&usg=AOvVaw3sEf6siWyrGNlVRIa2pSDP/100px160" name="Sani Rizki" varian="top" />
          <Card.Body align="left">
          <Card.Title > Sani Rizki Fauzi Tegaskan Mental Pemain Timnas Indonesia U-23 Tetap Bagus</Card.Title>
            <Card.Text >
                Gelandang tim nasional (timnas) Indonesia U-23, Sani Rizki Fauzi, menegaskan kesiapannya untuk bermain pada laga melawan Brunei Darussalam U-23. Kedua tim akan bentrok pada laga pemungkas grup K 
            </Card.Text>
            <Button variant="primary" align ="left">Read More
            </Button>
            </Card.Body> 
      </Card>          
      </Col>
    </Row>
   </Container>
  </CardGroup>
  </div>

)
}

export default PageCards;

