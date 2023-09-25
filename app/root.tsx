import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStyle from '~/styles/global.css'

export const links: LinksFunction =() => {
  return [{
    rel: 'stylesheet',
    href: globalStyle
  }]
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <title>Remix template</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
