import { Link } from 'react-router-dom';

function NoFound() {
  return (
    <>
      <h1>No found page.</h1>
      <Link to="/">Home</Link>
    </>
  );
}

export default NoFound;
