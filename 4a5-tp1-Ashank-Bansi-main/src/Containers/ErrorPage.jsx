/* eslint-disable no-unused-vars */
import Header from "../components/header/Header";

const ErrorPage = (props) => {
  return (
    <>
      <Header />
      <main>
        <h1>An error occurred </h1>
        <p>Could not find this page!</p>
      </main>
    </>
  );
};

export default ErrorPage;
