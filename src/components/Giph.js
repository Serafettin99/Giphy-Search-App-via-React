import React, { useState } from 'react';
import Search from './Search';
import Display from './Display';

export default function Giph() {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const getGif = query => {
    setIsLoading(true);
    fetch(
      `http://api.giphy.com/v1/gifs/search?api_key=O9G4v9d1op9VkzRb7aysQRLbIOQFsJer&q=${query}`,
    )
      .then(res => res.json())
      .then(data => {
        setGifs(data.data);
        setIsLoading(false);
      })
      .catch(err => {
        setHasError(true);
        setIsLoading(false);
        console.error(err.message);
      });
  };
  if (isLoading) return <p>Loading ...</p>;
  if (hasError) return <p>Sorry,something went wrong...</p>;
  return (
    <div>
      <Search getGiph={getGif} />
      <Display gifs={gifs} />
    </div>
  );
}
