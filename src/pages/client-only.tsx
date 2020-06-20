import App from "@components/app";
import InfoBox from "@components/info-box";
import Header from "@components/header";
import Form from "@components/movie/form";
import MovieList from "@components/movie/movie-list";

const ClientOnlyPage = () => (
  <App>
    <Header />
    <InfoBox>
      ℹ️ This page shows how use Apollo only in the client. If you{" "}
      <a href="/client-only">reload</a> this page, you will see a loader since
      Apollo didn't fetch any data on the server. This is useful when the page
      doesn't have SEO requirements or blocking data fetching requirements.
    </InfoBox>
    <Form />
    <MovieList />
  </App>
);

export default ClientOnlyPage;
