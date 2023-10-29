import Carousel from 'react-bootstrap/Carousel';
import './CarouselHome.css'

const CarouselHome = () => {
  return (
    <Carousel>
      
      <Carousel.Item>
          <img className='d-block w-100'
          style={{maxHeight:"500px", objectFit:'cover'}} 
          src="src/assets/images/dog.jpg" alt="" />
        <Carousel.Caption>
          <div className='letrasCarrusel'>
            <h3>Envios Gratis a Todo el Mundo</h3>
            <p>Disfruta en nuestra tienda todo tipo de productos para aquellos a quienen queremos cuidar.</p>
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
          <img className='d-block w-100'
          style={{maxHeight:"500px", objectFit:'cover'}} 
          src="src/assets/images/cat1.jpg" alt="" />
        <Carousel.Caption>
          <div className='letrasCarrusel'>
            <h3>El Gato Facha en la Pile</h3>
            <p>Mira como disfruta este gato, asi tambien puede estar tu mascota con los productos que te ofrecemos</p>
          </div>        
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
          <img className='d-block w-100'
          style={{maxHeight:"500px", objectFit:'cover'}} 
          src="src/assets/images/loro1.webp" alt="" />
        <Carousel.Caption>
          <div className='letrasCarrusel'>
            <h3>Productos de alta Calidad a un Solo Click</h3>
            <p> En nuestra tienda podes disfrutar de todo aqullo que queres para los que mas amas, y a un solo click de tu casa</p>
          </div>
        </Carousel.Caption>

      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselHome;