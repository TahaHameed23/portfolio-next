import "./globals.css";
export const metadata = {
  title: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
        <link rel="apple-touch-icon" sizes="180x180" href="./ico/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="./ico/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="./ico/favicon-16x16.png" />
        <link rel="manifest" href="./ico/site.webmanifest"></link>
      </head>
      <body>{children}</body>
    </html>
  );
}
