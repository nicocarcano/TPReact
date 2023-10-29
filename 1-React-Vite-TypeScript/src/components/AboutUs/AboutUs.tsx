import { Button, Card} from "react-bootstrap";
import './AboutUs.css';
const AboutUs = () => {
    return (
      <>
      <div className="nosotros">
        <h2> ¿Quienes Somos? </h2>
        <p> El buen sabor </p>
      </div>
      <div className="container">
      <div className="container2">
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="src/assets/images/Correa1.jpg" />
            <Card.Body>
              <Card.Title>Nuggets</Card.Title>
              <Card.Text>
                Nuggets de pollo
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>
      <div className="container2">
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="src/assets/images/Pretal1.webp" />
            <Card.Body>
              <Card.Title>Gaseosa</Card.Title>
              <Card.Text>
                CocaCola
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>
      <div className="container2">
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="src/assets/images/Poppykong.png" />
            <Card.Body>
              <Card.Title>Papas fritas</Card.Title>
              <Card.Text>
                Papas grandes
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>
      <div className="container2">
          <Card style={{ width: '15rem' }}>
            <Card.Img variant="top" src="src/assets/images/rascador1.jpg" />
            <Card.Body>
              <Card.Title>Hamburguesa</Card.Title>
              <Card.Text>
                BigMac
              </Card.Text>
              <Button variant="primary">Comprar</Button>
            </Card.Body>
          </Card>
      </div>
      </div>
      </>
    )

}

export default AboutUs;