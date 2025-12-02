import { useNavigate, useParams } from 'react-router-dom'
import { Container, Row,  Button, Col, Card, Spinner } from "react-bootstrap" 
import { useState, useEffect} from 'react';
import NavBar from './NavBar';
import Footer from './Footer';
import  { type Article } from '../Types';

const ArticleDetails = () => {
      const navigate = useNavigate()
      const params = useParams()
      const [ SingleArticle, setArticle] = useState<Article|null>(null)
      const [loading, setLoading] = useState(true)


     const fetchArticle = () => {
     const URL = `https://api.spaceflightnewsapi.net/v4/articles/${params.id}`;
    fetch(URL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('la chiamata non è ok: ' + response.status)
        }
      })
      .then((article) => {
        setArticle(article);
        setLoading(false)
      })
      .catch((err) => {
        console.log('Errore nella chiamata', err)
        setLoading(false)
      })
  } 
  useEffect(() => {
    fetchArticle()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

        return (<>
        {loading ? (
            <div className="text-center my-5">
              <Spinner animation="border" variant="success" />
            </div>
          ) :  (<>
          <NavBar></NavBar>

           <Row className="justify-content-center mt-4">
            {/* Sezione Card */}
            <Col xs={10} md={4} lg={5} key={params.id}  >
               <Card className='shadow-lg border-primary'>
                   <Card.Body>  
                    <Card.Img variant="top" src={SingleArticle!.image_url} />
                                   <Card.Title className='mb-2 mt-3 fs-3 text-center'> {SingleArticle!.title}  </Card.Title>
                                    <hr/>
                                  <Card.Text>{SingleArticle!.summary}</Card.Text>

                                  <Container className='d-flex justify-content-between m-0 p-0'> 
                                    <Card.Text className='d-inline-bloc p-0'><span className='fw-bold'>Author: </span> {SingleArticle!.authors[0].name}</Card.Text>
                                    <Card.Text className='d-inline-block p-0'><span className='fw-bold'>Read more : </span> <a href={SingleArticle!.url} target="_blank" rel="noopener noreferrer" style={{textDecoration: "underline", color: "black"}}>HERE</a></Card.Text>
                                  </Container>
                                 
                                  <Card.Text className='mb-1'><span className='fw-bold '>Published at: </span> {new Date(SingleArticle!.published_at).toLocaleDateString('it-IT')}</Card.Text>
                                  <Card.Text className='mb-1'><span className='fw-bold'>Updated at: </span> {new Date(SingleArticle!.updated_at).toLocaleDateString('it-IT')}</Card.Text>
                                  
                      <Container className='text-end'>
                        <Button
                  className='mt-auto text-center'
                    variant="primary"
                    onClick={
                      // riporto l'utente nella pagina menu
                      () => navigate(`/`)
                    }
                  >
                    Back to Home
                  </Button>
                      </Container>
                
            </Card.Body> 
               </Card>
            </Col>
          </Row>
          <div className="mb-5 pb-5"></div>
          <Footer />
          </>
            )}
          </>)

}

export default ArticleDetails;