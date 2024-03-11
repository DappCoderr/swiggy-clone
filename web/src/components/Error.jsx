import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <div>
      <h1>
        Oops!! Page {err.statusText}: {err.status}
      </h1>
    </div>
  );
};

export default Error;
