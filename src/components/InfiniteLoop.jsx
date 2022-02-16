import { useState, useEffect } from 'react';

const InfiniteLoop = () => {
  const [data, setData] = useState(null);
  //const [count, setCount] = useState(0);

  //componentDidMount     = Only run the side effect once.
  //componentDidUpdate    = Will run every time a condition updates.
  //componentWillUnmount  = Will run when the component un-mounts.

  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then((response) => response.json())
  //     .then((data) => setData(data));

  //   useEffect(() => {
  //     setCount((prevCount) => prevCount + 1);
  //   }, [count]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  console.log('rendered');

  return null;
};

export default InfiniteLoop;
