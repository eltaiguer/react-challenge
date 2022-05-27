import React from 'react';
import { Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import useSearch from '../hooks/useSearchItem';
import LoadingSpinner from '../shared/LoadingSpinner';
import ReturnToSearch from '../shared/ReturnToSearch';

function ItemsPage() {
  const [searchParams] = useSearchParams();
  const search = searchParams.get('search') || '';
  const { isLoading, error, data } = useSearch(search);

  const navigate = useNavigate();

  const onItemClicked = (item: any) => {
    navigate(`/items/${item.id}`);
  };

  const renderContent = () => {
    if (isLoading) {
      return <LoadingSpinner label="Fetching results..." />;
    }

    if (error) {
      return (
        <div className="text-center">
          There was an error while fetching the items
          <ReturnToSearch />
        </div>
      );
    }

    if (data) {
      return (
        <>
          <h1 className="text-center mb-3">Search results</h1>

          {!data.length ? (
            <p className="text-center">
              There aren&apos;t any results for: {search} <br />
            </p>
          ) : (
            <ListGroup variant="flush">
              {data.slice(0, 4).map(d => (
                <ListGroup.Item action key={d.id} onClick={() => onItemClicked(d)}>
                  {d.name}
                </ListGroup.Item>
              ))}
            </ListGroup>
          )}
          <Link className="mt-5 d-block text-center" to="/">
            Return to Search
          </Link>
        </>
      );
    }
    return null;
  };

  return (
    <Container className="mt-3">
      <Row>
        <Col md={6} className="justify-content mx-auto">
          {renderContent()}
        </Col>
      </Row>
    </Container>
  );
}

export default ItemsPage;
