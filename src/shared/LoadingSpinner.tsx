import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function LoadingSpinner({ label }: { label: string }) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <Spinner className="m-3" animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
      {label}
    </div>
  );
}
