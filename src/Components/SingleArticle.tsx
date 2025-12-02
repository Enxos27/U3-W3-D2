import { Card, Container, Button } from 'react-bootstrap'
import { type Article } from '../Types'
import { useNavigate } from 'react-router-dom';

interface SingleArticleProps {
  articoloDalleProps: Article // qui dovrei mettere sempre Article
}

const SingleArticle = function ({ articoloDalleProps }: SingleArticleProps) {
   const navigate = useNavigate();
  return (
    <Card className="my-3 shadow-lg">
      <Card.Img variant="top" src={articoloDalleProps.image_url} />
      <Card.Body>
        <Card.Title>{articoloDalleProps.title}</Card.Title>
        <hr className='mt-1 mb-3'/>
        
                                  <Container className='d-flex justify-content-between m-0 p-0'> 
                                    <Card.Text className='d-inline-bloc p-0'><span className='fw-bold'>Author: </span> {articoloDalleProps.authors[0].name}</Card.Text>
                                    <Card.Text className='mb-1'><span className='fw-bold '>Published at: </span> {new Date(articoloDalleProps.published_at).toLocaleDateString('it-IT')}</Card.Text>
                                  </Container>
           <Container className='text-end'>
                            <Button
                          className='mt-auto'
                            variant="primary"
                             onClick={() => navigate(`/details/${articoloDalleProps.id}`)}
                          >
                            See the article
                          </Button>
                         </Container>
      </Card.Body>
    </Card>
  )
}

export default SingleArticle