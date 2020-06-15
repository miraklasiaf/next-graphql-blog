import { NextPage } from "next";
import App from "@components/app";
import Link from "next/link";

const HomePage: NextPage = () => (
  <App>
    <div className="container">
      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <Link href="/movie">
            <a className="card">
              <h3>Movie App &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </Link>

          <Link href="/api/graphql">
            <a className="card">
              <h3>Source Code &rarr;</h3>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>
          </Link>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  </App>
);

export default HomePage;
