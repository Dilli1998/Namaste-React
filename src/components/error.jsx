import { useRouteError } from "react-router";

const AppError = () => {
  const err = useRouteError();
  return (
    <>
      <h1>Something Went Wrong</h1>;<h2>{err}</h2>
    </>
  );
};

export default AppError;
