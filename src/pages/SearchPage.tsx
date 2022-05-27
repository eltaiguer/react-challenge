import React, { ChangeEvent, FormEvent, useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate, createSearchParams } from 'react-router-dom';

function SearchPage() {
  const [query, setQuery] = useState<string>();

  const navigate = useNavigate();

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    navigate({ pathname: '/items', search: `?${createSearchParams({ search: query! })}` });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value.trim());
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={6} className="justify-content mx-auto">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="userSearch">
              <Form.Label>Search users</Form.Label>
              <Form.Control onChange={handleChange} type="text" />
            </Form.Group>
            <Button disabled={!query} className="col-md-3 mx-auto d-block" variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchPage;
