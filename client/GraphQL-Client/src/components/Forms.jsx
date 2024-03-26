import { Col, Row } from 'react-bootstrap';
import AuthorForm from './AuthorForm';
import BookForm from './BookForm';

const Forms = () => {

  return (

    <Row>
      <Col md={6} className="mb-4 gap-2">
        <BookForm />
      </Col>
      <Col md={6} className="mb-4 gap-2">
        <AuthorForm />
      </Col>
    </Row>
  );
};

export default Forms;