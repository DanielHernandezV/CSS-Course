import "./packages.styles.css";
import PackageCard from "../../component/package-card/package-card.component";
const packs = [
  {
    plan: "Our PLUS Plan",
    subtitle: "The most popular choice of our customers.",
    description:
      "Benefit from increased storage and faster support to ensure that your mission-critical data and applications are always available!",
    type: "plus",
  },
  {
    plan: "Our FREE Plan",
    subtitle: "An extremely solid start into our hosting world.",
    description: "Get started immediately at zero cost!",
    type: "free",
  },
  {
    plan: "Our PREMIUM Plan",
    subtitle: "All your enterprise needs. Instant support, guaranteed uptime.",
    description:
      "The best solution for small to large enterprises. Because hosting shouldn't be in the way!",
    type: "premium",
  },
];

const Packages = () => {
  return (
    <>
      <div className="background-image"></div>
      <div className="package-container">
        {packs.map((pack) => (
          <PackageCard key={pack.plan} pack={pack} />
        ))}
      </div>
    </>
  );
};
export default Packages;
