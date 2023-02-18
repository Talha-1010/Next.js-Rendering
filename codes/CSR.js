// csr

import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState([]);
  
  useEffect(() => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  
  return (
    <div>
      <h1>Hello, World!</h1>
      {data.map(item => <p key={item.id}>{item.title}</p>)}
    </div>
  );
}