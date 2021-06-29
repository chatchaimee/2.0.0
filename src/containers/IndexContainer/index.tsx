import {
  Layout,
  Home,
  About,
  Skills,
  Qualification,
  ContactMe
} from "components";

const IndexContainer = (): JSX.Element => {
  return (
    <Layout>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <ContactMe />
    </Layout>
  );
};

export default IndexContainer;
