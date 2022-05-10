import type { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import globalStyle from '~/styles/global.css'

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width, initial-scale=1.0,maximum-scale=1.0, user-scalable=no",
});

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
        <Meta />
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
