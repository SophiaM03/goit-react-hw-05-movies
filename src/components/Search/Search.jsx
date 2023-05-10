import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form, Input } from './Search.styled';

function Search({ onSubmit, initialValue }) {
  const [query, setQuery] = useState(initialValue);

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(query);
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input type="text" name="query" value={query} onChange={handleChange} />
      <Button type="submit">Submit</Button>
    </Form>
  );
}

Search.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  initialValue: PropTypes.string,
};

export default Search;
