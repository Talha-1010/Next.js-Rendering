//ssr

import React from 'react';

function App({ data }) {
  return (
    <div>
      <h1>Hello, World!</h1>
      {data.map(item => <p key={item.id}>{item.title}</p>)}
    </div>
  );
}

export async function getServerSideProps() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return {
    props: { data }
  }
}