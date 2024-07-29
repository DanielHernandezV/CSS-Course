import "./plan-card.styles.css";
import Button from "../button/button.component";
const PlanCard = ({ card, togleModal }) => {
  const { type, price, description, details, recomended } = card;
  const togleTheModal = () => {
    togleModal();
  };
  return (
    <article className={`plan ${recomended ? `plan-highlighted` : ""}`}>
      {recomended && <h1 className="plan-anotation">RECOMENDED</h1>}
      <h1 className="plan-title">{type}</h1>
      <h2 className="plan-price">{price}</h2>
      <h3 className="plan-description">{description}</h3>
      <ul className="plan-features">
        {details.map((element) => (
          <li key={element}>{element}</li>
        ))}
      </ul>
      <div className="card-button-container">
        <Button buttonType="b-base" onClick={togleTheModal}>
          CHOOSE PLAN
        </Button>
      </div>
    </article>
  );
};
export default PlanCard;
