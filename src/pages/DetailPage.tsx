import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useFetchItem from '../hooks/useFetchItem';
import LoadingSpinner from '../shared/LoadingSpinner';
import ReturnToSearch from '../shared/ReturnToSearch';

function DetailPage() {
  const params = useParams();
  const { data, isLoading, error } = useFetchItem(params.id ? +params.id : null);

  const renderContent = () => {
    if (error) {
      return (
        <div className="text-center">
          There was an error while fetching the items
          <ReturnToSearch />
        </div>
      );
    }

    if (isLoading) {
      return <LoadingSpinner label="Fetching item..." />;
    }

    return (
      <>
        <h1 className="text-center mb-3">Item details</h1>
        {!data ? (
          <p className="text-center">
            There aren&apos;t any results for item id: {params.id} <br />
          </p>
        ) : (
          Object.keys(data).map(k => (
            <div key={k}>
              {k}: {data[k]}
            </div>
          ))
        )}
        <ReturnToSearch />
      </>
    );
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

export default DetailPage;
