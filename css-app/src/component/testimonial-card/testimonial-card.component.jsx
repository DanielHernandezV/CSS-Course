import "./testimonial-card.styles.css";

const TestimonialCard = ({ customer, imgPosition }) => {
  const { name, id, subtitle, link, text, routeImg } = customer;
  return (
    <div className="testimonial" id={id}>
      {imgPosition === "top" && (
        <div className="testimonial__image-container">
          <img src={routeImg} alt={name} className="testimonial__image" />
        </div>
      )}

      <div className="testimonial__info">
        <h1 className="testimonial__name">{name}</h1>
        <h2 className="testimonial__subtitle">
          {subtitle}
          {link && <a href={link}>tech-analysis.com</a>}
        </h2>
        <p className="testimonial__text">{text}</p>
      </div>
      {imgPosition === "button" && (
        <div className="testimonial__image-container">
          <img src={routeImg} alt={name} className="testimonial__image" />
        </div>
      )}
    </div>
  );
};
export default TestimonialCard;
