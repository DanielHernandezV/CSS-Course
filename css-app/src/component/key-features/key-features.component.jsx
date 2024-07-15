import "./key-features.styles.css";
import { ReactComponent as Svg1 } from "../../assets/svg1.svg";
import { ReactComponent as Svg2 } from "../../assets/svg2.svg";
import { ReactComponent as Svg3 } from "../../assets/svg3.svg";
const KeyFeatures = () => {
  return (
    <section className="key-features">
      <h1 className="section-title">Many Good Reasons to Stick Around</h1>
      <ul className="key-feature-list">
        <li className="key-feature">
          <div className="key-feature-image">
            <Svg1 />
          </div>
          <p className="key-feature-description">
            3,857,000 Trusting Customers
          </p>
        </li>
        <li className="key-feature">
          <div className="key-feature-image">
            <Svg2 />
          </div>
          <p className="key-feature-description">99.999% Uptime Guarantee</p>
        </li>
        <li className="key-feature">
          <div className="key-feature-image">
            <Svg3 />
          </div>
          <p className="key-feature-description">Lightning Fast CDN</p>
        </li>
      </ul>
    </section>
  );
};
export default KeyFeatures;
