import React, { Component } from 'react';
import AddComponent from '../addComponent/addComponent';
import {Container,Row,Col} from 'react-materialize';

class Home extends Component {
  constructor(props) {
    super(props);

  /*  this.state = {

  };  */
  }

  render() {
    console.log('entrer');
    return (
      <Container>
        <Row>
          <Col m={4} className='grid-example'>
            <AddComponent/>
            <p>Toto2</p>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
