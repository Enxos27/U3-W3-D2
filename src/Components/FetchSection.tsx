import { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import SingleArticle from './SingleArticle'
import { type Article } from '../Types'

const apiURL = 'https://api.spaceflightnewsapi.net/v4/articles'

const FetchSection = function () {
  const [articles, setArticles] = useState<Article[]>([])
  // quando inizializzate una variabile di stato con [ ]
  // TS automaticamente gli assegna un tipo di "never[]"
  // il tipo "never" rappresenta un valore che non si realizza mai
  // e purtroppo non ci permetterà di utilizzare books in nessuna circostanza
  // -> soluzione: non possiamo lasciare a TS il compito di determinare
  // il valore di books: dobbiamo tipizzare NOI il valore di books!

  const getArticles = () => {
    // recupero i libri dall'API
    fetch(apiURL)
      .then((response) => {
        if (response.ok) {
          return response.json()
        } else {
          throw new Error('Problema nel recupero dati')
        }
      })
      .then((articles) => {
        console.log(articles)
        setArticles(articles.results) // salvo i libri ottenuti nello state
      })
      .catch((err) => {
        console.log('ERRORE', err)
      })
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col>
          <h2 className="text-center">NOTIZIE DALLO SPAZIO</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          {articles.map((article) => {
            return <SingleArticle articoloDalleProps={article} key={article.id} />
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default FetchSection