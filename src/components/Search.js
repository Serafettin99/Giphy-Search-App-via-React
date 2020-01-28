import React, { useState } from 'react';

export default function Search({ getGiph }) {
  const [inputVal, setInputVal] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    getGiph(inputVal);
    setInputVal('');
  };
  return (
    <div className="d-flex justify-content-center p-5">
      <form onSubmit={handleSubmit} className="form-group w-50">
        <input
          className="form-control rounded-pill mb-3 "
          type="input"
          value={inputVal}
          placeholder="Search Giphy"
          onChange={e => setInputVal(e.target.value)}
        />
        <input type="submit" className="btn btn-primary" />
      </form>
    </div>
  );
}
