import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://mohan-portfolio-wine.vercel.app"),
  title: "Mohan Pandey — Full Stack & Mobile Developer",
  description: "Portfolio of Mohan Pandey — full stack and mobile developer building modern web applications, Flutter experiences, APIs, databases and cloud systems.",
  keywords: ["Mohan Pandey", "Full Stack Developer", "Flutter Developer", "React Developer", "FastAPI", "PostgreSQL", "AWS"],
  icons: { icon: "/icon.svg" },
  openGraph: {
    title: "Mohan Pandey — Full Stack & Mobile Developer",
    description: "Developer portfolio — web, mobile, backend and cloud systems.",
    type: "website",
    images: ["/profile.jpg"],
  },
};

export default function RootLayout({ children }) {
  const themeScript = `(() => {
    try {
      const saved = localStorage.getItem("mohan-theme");
      const theme = saved || "dark";
      document.documentElement.dataset.theme = theme;
      document.documentElement.style.colorScheme = theme;
    } catch (_) {
      document.documentElement.dataset.theme = "dark";
    }
  })();`;

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
