import PortfolioContent from "../components/PortfolioContent";

export const metadata = {
  title: "Portfolio Preview",
  robots: { index: false, follow: false },
};

export default function ShowcasePage() {
  return (
    <main className="site-shell showcase-page">
      <PortfolioContent includeCursor={false} />
    </main>
  );
}
