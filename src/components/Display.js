import React from 'react';

export default function Display({ gifs }) {
  return (
    <ul>
      {gifs.map(gif => (
        <li key={gif.id}>
          <img src={gif.images.original.url} alt={gif.title} />
        </li>
      ))}
    </ul>
  );
}
