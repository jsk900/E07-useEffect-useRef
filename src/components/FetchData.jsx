import { useState, useEffect } from 'react';

const FetchData = () => {
  const [data, setData] = useState(null);

  //   useEffect(() => {
  //     (async function fetchData() {
  //       try {
  //         const response = await fetch(
  //           'https://jsonplaceholder.typicode.com/users'
  //         );
  //         const data = await response.json();
  //         setData(data);
  //       } catch (error) {
  //         console.error(error.message);
  //       }
  //     })();
  //   }, []);

  //   useEffect(() => {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then((response) => response.json())
  //       .then((data) => setData(data))

  //       .catch((error) => {
  //         console.error(error);
  //       });
  //   }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://jsonplaceholder.typicode.com/users`
        );
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>{data && data.map((user) => <p key={user.id}>{user.name}</p>)}</div>
  );
};

export default FetchData;
