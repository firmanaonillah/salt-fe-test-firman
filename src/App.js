import { Card, Col, Container, Dropdown, Row } from 'react-bootstrap';
import './App.css';
import Header from './components';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const [secondSection] = useState([
    {
      title: 'Who we are',
      secondTitle: 'Technology Company',
      paraghraph: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'
    },
    {
      title: 'What we do',
      secondTitle: 'Professional Brand Management',
      paraghraph: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.'
    },
    {
      title: 'How we do',
      secondTitle: 'Strategize, Design, Collaborate',
      paraghraph: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.'
    },
  ])
  return (
    <div className="App">
      <Header />
      <section>
        <div id='hero' className='xs:bg-contain md:bg-cover xs:h-64 md:min-h-screen' > 
          <div className='blue-front'>
          </div>
            <div className='blue-back' />
        </div>
        <div id='hero-content'>
          <div>
            <h1>Discover Your Wonder</h1>
          </div>
          <div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          </div>
        </div>
      </section>
      <section id='second-section'>
        <Row className='p-4'>
          {
            secondSection.map((sec) => 
              <Col xs={12} md={4} > 
                <Row>
                  <h1> {sec.title} </h1>
                </Row>
                <Row>
                  <h3> {sec.secondTitle} </h3>
                </Row>
                <Row>
                  <p> {sec.paraghraph} </p>
                </Row>
              </Col>
            )
          }
        </Row>
      </section>
      <section id='third-section'>
        <Row className='p-4'>
          <Col xs={12} md={8} > 
            <Row>
              <h1> Our Core Values </h1>
            </Row>
            <Row>
              <p> Ridiculus laoreet libero pretium et, sit vel elementum convallis fames. Sit suspendisse etiam eget egestas. Aliquet odio et lectus etiam sit. In mauris rutrum ac ut volutpat, ornare nibh diam. Montes, vitae, nec amet enim. </p>
            </Row>
            <Row>
              <ul className='dashed'>
                <li> Dedication </li>
                <div> Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat.</div>
                <li> Intellectual Honesty </li>
                <div> Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias conse.</div>
                <li> Curiosity </li>
                <div> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque.</div>
              </ul>
            </Row>
          </Col>
          <Col xs={12} md={4} style={{position: 'relative'}}> 
            <img src='/img/illustration.png' alt='illustration' className='illustration' />
          </Col>
        </Row>

      </section>
      <section id='fourth-section'>
        <Card className='p-6'>
          <h1>OUR SPECIALITY</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
          <div className='justify-center flex'>
            <img src='/img/clock-icon.png' alt='img' />
          </div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis euismod libero vel leo auctor, in venenatis nulla consequat. Sed commodo nunc sit amet congue aliquam.</p>
        </Card>
      </section>
      <section id='fifth-section'>
        <Row className='p-4 justify-center'>
          <Col xs={12} md={8} > 
            <img src='/img/logo-white.png' />
          </Col>
          <Col xs={12} md={4} > 
            <Card>
              <Dropdown className='bg-white' color='#00537C'>
                <Dropdown.Toggle  id="dropdown-basic">
                  TECHNOLOGY DEPARTMENT
                </Dropdown.Toggle>
              </Dropdown>
              <p className='address'>Jl. Lembong No 8 Kel. Braga Kec. Sumur Bandung, Kota Bandung, Jawa Barat</p>
            </Card>
          </Col>
          <Col xs={4}>
            <ul className='link-list'>
              <li>Who We Are</li>
              <li>Our Values</li>
              <li>The Perks</li>
            </ul>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default App;
