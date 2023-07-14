import React from "react";

const Contact: React.FC = () => {
  // Replace with your contact information
  const contactInfo = {
    email: "example@example.com",
    phone: "+1234567890",
    address: "123 Main St, City, Country",
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-bold mb-4">Contact</h1>
      <p>Email: {contactInfo.email}</p>
      <p>Phone: {contactInfo.phone}</p>
      <p>Address: {contactInfo.address}</p>
    </div>
  );
};

export default Contact;
