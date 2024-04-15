import {
  Link,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="preload"
          href="/fonts/oswald-700.woff2"
          crossOrigin="anonymous"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/open-sans-400.woff2"
          crossOrigin="anonymous"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/open-sans-700.woff2"
          crossOrigin="anonymous"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload"
          href="/fonts/Kurale-400.woff2"
          crossOrigin="anonymous"
          as="font"
          type="font/woff2"
        />
        <link
          rel="preload stylesheet"
          href="/index.css"
          as="style"
          type="text/css"
          crossOrigin="anonymous"
        />
        <meta charSet="UTF-8" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Meta />
        <Links />
      </head>
      <body>
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
          </nav>
        </header>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
