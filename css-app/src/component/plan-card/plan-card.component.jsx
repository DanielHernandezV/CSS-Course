import "./plan-card.styles.css";

const PlanCard = ({ card }) => {
  const { type, price, description, details, recomended } = card;

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
      <div>
        <button className="card-button">CHOOSE PLAN</button>
      </div>
    </article>
  );
};
export default PlanCard;
