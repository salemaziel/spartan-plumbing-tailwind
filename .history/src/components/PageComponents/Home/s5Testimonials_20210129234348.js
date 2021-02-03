import React from 'react';
import LabelText from '../../LabelText';
import CustomerCard from '../../CustomerCard';

const S5Testimonials = (props) => {
  return (
    <>
        <section id="testimonials" className="py-20 lg:py-40">
      <div className="container mx-auto">
        <LabelText className="mb-8 text-gray-600 text-center">What customers are saying</LabelText>
        <div className="flex flex-col md:flex-row md:-mx-3">
          {customerData.map(customer => (
            <div key={customer.customerName} className="flex-1 px-3">
              <CustomerCard customer={customer} />
            </div>
          ))}
        </div>
      </div>
    </section>

    </>
  );
};

export default S5Testimonials;
