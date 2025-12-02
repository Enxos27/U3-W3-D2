import { Alert, Container } from 'react-bootstrap';
function WelcomeAlert() {

  return (
   <Container fluid className='p-0 mb-4'>
      <Alert 
        variant="info" 
        className='text-center shadow-sm rounded-3 p-4'
      >
        {/* Intestazione principale con icona */}
        <Alert.Heading className='display-5 fw-bold mb-3' style={{ color: "#007bff" }}> 
           <i className="bi bi-cloud-sun-fill"></i> EpiSpace
        </Alert.Heading>
        
        <p className='fs-5 text-dark'> 
            Le <span style={{color:"#881A80"}}>epiche notizie</span> dallo spazio a portata di mano!
        </p>
      </Alert>
    </Container>
  );
}

export default WelcomeAlert;