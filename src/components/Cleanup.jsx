import { useState } from 'react';
import Pic from './Pic';

const Cleanup = () => {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow(!show)}>{show ? 'hide' : 'show'}</button>
      {show && <Pic />}
    </div>
  );
};

export default Cleanup;
