import { CustomersContext } from "../../context/customersContext";
import "./customers.styles.css";
import { useContext, useEffect } from "react";
import TestimonialCard from "../../component/testimonial-card/testimonial-card.component";
const Customers = () => {
  const { customers } = useContext(CustomersContext);

  let tmpImgPosition = "button";
  const swichImgPosition = () => {
    tmpImgPosition = tmpImgPosition === "top" ? "button" : "top";
    return tmpImgPosition;
  };
  return (
    <div className="customers-container">
      {customers.map((customer) => {
        let imgPosition = swichImgPosition();

        return (
          <TestimonialCard
            key={customer.id}
            customer={customer}
            imgPosition={imgPosition}
          />
        );
      })}
    </div>
  );
};
export default Customers;
