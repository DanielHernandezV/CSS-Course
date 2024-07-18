import "./hosting-form.styles.css";
import Button from "../button/button.component";
const HostingForm = () => {
  return (
    <div className="hosting-form-container">
      <h1 className="signup-title">Awesome! Let's dive right in!</h1>
      <form action="index.html" className="signup-form">
        <label htmlFor="title">Title</label>
        <select id="title">
          <option value="mr">Mr.</option>
          <option value="ms">Ms.</option>
        </select>
        <label htmlFor="first-name">First name</label>
        <input type="text" id="first-name" />
        <label htmlFor="last-name">Last name</label>
        <input type="text" id="last-name" />
        <label htmlFor="email">E-Mail</label>
        <input type="email" id="email" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
        <input type="checkbox" id="agree-terms" />
        <label htmlFor="agree-terms">
          Agree to
          <a href="#">Terms &amp; Conditions</a>
        </label>
        <Button buttonType="b-base" type="submit" disabled>
          Sign Up
        </Button>
      </form>
    </div>
  );
};
export default HostingForm;
