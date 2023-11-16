import { useEffect, useState } from 'react';

const ExusEffect = () => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    if (value.length === 0) {
      fetch(`https://jsonplaceholder.typicode.com/posts`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(json => setValue(json))
        .catch(error => console.error('Error fetching data:', error));
    }
  }, [value]);

  return (
    <div>
      <button onClick={() => setValue([])}>Reset</button>
      <h1 className='ApiContent'>Posts</h1>
      <ul>
        {value.map((item, index) => (
          <li key={index}>{item.id}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExusEffect;
