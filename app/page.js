import PortfolioContent from "./components/PortfolioContent";
import ScrollMacbook from "./components/ScrollMacbook";

export default function Home() {
  return (
    <main className="site-shell">
      <ScrollMacbook />
      <PortfolioContent />
    </main>
  );
}
