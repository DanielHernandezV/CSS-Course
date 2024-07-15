import { createContext, useEffect, useState } from "react";

const theCustomers = [
  {
    name: "Mike Statham",
    id: "customer-1",
    subtitle: "Founder of ",
    link: "tech-analysis.com",
    text: "uHost helped me realize my project with a highly constrained budget in like no time.",
    routeImg: "/temp-img/customer-1.jpg",
  },
  {
    name: "John Mellow",
    id: "customer-2",
    subtitle: "Hosts his private videos on uHost.",
    text: "I worked as a blogger and always looked for an integrated hostingand file storage solution. I found it in uHost!",
    routeImg: "/temp-img/customer-2.jpg",
  },
];

export const CustomersContext = createContext({
  customers: [],
});

const CustomerProvider = ({ children }) => {
  const [customers, setCustomers] = useState([]);
  useEffect(() => setCustomers(theCustomers), []);
  const value = {
    customers,
  };
  return (
    <CustomersContext.Provider value={value}>
      {children}
    </CustomersContext.Provider>
  );
};
export default CustomerProvider;
