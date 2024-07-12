import "./directory.styles.css";
import PlanCard from "../../component/plan-card/plan-card.component";
const cards = [
  {
    type: "Free",
    price: "$0/month",
    description: "For hobby projects or small teams.",
    details: [
      "1 Workspace",
      "Unlimited Traffic",
      "10GB Storage",
      "Basic Support",
    ],
    recomended: false,
  },
  {
    type: "PLUS",
    price: "$29/month",
    description: "For ambitious projects.",
    details: [
      "5 Workspaces",
      "Unlimited Traffic",
      "100GB Storage",
      "Plus Support",
    ],
    recomended: true,
  },
  {
    type: "PREMIUM",
    price: "$99/month",
    description: "Your enterprise solution.",
    details: [
      "10 Workspaces",
      "Unlimited Traffic",
      "Unlimited Storage",
      "Priority Support",
    ],
    recomended: false,
  },
];
const Directory = () => {
  return (
    <main>
      <section id="product-overview">
        <h1>Get the freedom you deserve.</h1>
      </section>
      <section id="plans">
        <h1 className="section-title">Choose Your Plan</h1>
        <div className="card-container">
          {cards.map((card) => (
            <PlanCard key={card.type} card={card} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Directory;
