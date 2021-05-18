import { h } from "preact";

import Layout from "../layouts/Layout";
import App from "../components/App";

const Home = () => {
  return (
    <Layout navColor="gray">
      <h1>Home!</h1>
      <App />
    </Layout>
  );
};

export default Home;
