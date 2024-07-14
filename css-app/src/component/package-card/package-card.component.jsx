import "./package-card.styles.css";
// types are : Free, plus or premium
const PackageCard = ({ pack }) => {
  const { plan, description, subtitle, route, type } = pack;

  return (
    <>
      <section className={`package-card-container ${type}`}>
        <a className="package-card-ancor" href="#">
          <h1 className="package-card-title">{plan}</h1>
          {type === "plus" && <h2 className="package-badge">RECOMENDED</h2>}
          <h2 className="package-card-subtitle">{subtitle}</h2>
          <p className="package-card-description">{description}</p>
        </a>
      </section>
      {type === "free" && <div className="separator"></div>}
    </>
  );
};
export default PackageCard;
