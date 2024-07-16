import "./directory.styles.css";
import { useState } from "react";
import PlanCard from "../../component/plan-card/plan-card.component";
import KeyFeatures from "../../component/key-features/key-features.component";
import ModalDirectory from "../../component/modal-directory/modal-directory.component";
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
  const [modalState, setModalState] = useState(false);

  const togleModal = () => {
    setModalState(!modalState);
  };
  return (
    <>
      <ModalDirectory active={modalState} modalTogle={togleModal} />
      <main>
        <section id="product-overview">
          <h1>Get the freedom you deserve.</h1>
        </section>
        <section id="plans">
          <h1 className="section-title">Choose Your Plan</h1>
          <div className="card-container">
            {cards.map((card) => (
              <PlanCard key={card.type} card={card} togleModal={togleModal} />
            ))}
          </div>
        </section>
        <KeyFeatures />
      </main>
    </>
  );
};

export default Directory;
