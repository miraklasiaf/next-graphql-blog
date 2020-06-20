import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const { pathname } = useRouter();

  return (
    <header className="flex justify-between text-xl py-3 mb-3">
      <Link href="/">
        <a className={pathname === "/" ? "is-active" : ""}>Home</a>
      </Link>
      <Link href="/api/graphql">
        <a className={pathname === "/about" ? "is-active" : ""}>
          GraphQL Playground
        </a>
      </Link>
      <Link href="/client-only">
        <a className={pathname === "/client-only" ? "is-active" : ""}>
          Client-Only
        </a>
      </Link>
      <style jsx>{`
        a {
          font-size: 14px;
          margin-right: 15px;
          text-decoration: none;
        }
        .is-active {
          text-decoration: underline;
        }
      `}</style>
    </header>
  );
}
