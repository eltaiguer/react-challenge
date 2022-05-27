import React from 'react';
import { Link } from 'react-router-dom';

export default function ReturnToSearch() {
  return (
    <Link className="mt-5 d-block text-center" to="/">
      Return to Search
    </Link>
  );
}
