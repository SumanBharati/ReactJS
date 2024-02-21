import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div className="error-container">
      <h1>Ooops!!!</h1>
      <h2>Something went wrong.</h2>
      <h4>
        {err.status} : {err.statusText}
      </h4>
    </div>
  );
};

export default Error;