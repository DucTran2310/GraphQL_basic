import { useQuery } from '@apollo/client';
import { useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { getBooks } from '../graphql-client/queries';
import BookDetail from './BookDetail';

const BookList = () => {
  const { loading, error, data } = useQuery(getBooks);
  const [bookSelected, setBookSelected] = useState(null);

  if (loading) return <p>Loading books...</p>;
  if (error) return <p>Errors loading books...</p>;

  return (
    <Row className="mr-2" style={{ flexWrap: 'wrap' }}>
      <Col xs={8}>
        <div className='d-flex flex-wrap gap-2'>
          {data?.books?.map(book => (
            <Card
              border='info'
              text='info'
              className='text-center shadow'
              style={{ minWidth: '120px' }}
              key={book.id}
              onClick={() => setBookSelected(book.id)} // Correct onClick handler
            >
              <Card.Body>{book.name}</Card.Body>
            </Card>
          ))}
        </div>
      </Col>
      <Col>
        <BookDetail bookId={bookSelected} key={bookSelected} /> {/* Add key attribute */}
      </Col>
    </Row>
  );
};

export default BookList;