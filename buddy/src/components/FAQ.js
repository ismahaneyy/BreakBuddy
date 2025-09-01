import React from 'react';

const FAQ = ({ faqs }) => {
  return (
    <section id="faq" style={{ padding: '50px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '30px', color: '#333' }}>
        Frequently Asked Questions
      </h2>
      <div 
        className="faq-container" 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        {faqs.map((faq) => (
          <div 
            key={faq.id} 
            className="faq-item" 
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              maxWidth: '300px',
              textAlign: 'left',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 12px rgba(0, 0, 0, 0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
            }}
          >
            <h3 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>
              {faq.question}
            </h3>
            <p style={{ fontSize: '16px', color: '#555' }}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
