import { Outlet } from "react-router-dom";
import type { LoaderFunction, LinksFunction } from "remix";
import { LiveReload, Meta, Scripts, Links, useRouteData } from "remix";

import styles from "./styles/global.css";

export let loader: LoaderFunction = async () => {
  return { date: new Date() };
};

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export default function App() {
  let data = useRouteData();

  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <footer>
          <p>This page was rendered at {data.date.toLocaleString()}</p>
        </footer>
        <LiveReload />
        <Scripts />
      </body>
    </html>
  );
}
