import React from 'react';

const Testimonials = ({ testimonials }) => {
  return (
    <section id="testimonials" style={{ padding: '50px 20px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
      <h2 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '30px', color: '#333' }}>What Our Users Say</h2>
      <div 
        className="testimonials-container" 
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '20px',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        {testimonials.map((testimonial) => (
          <div 
            key={testimonial.id} 
            className="testimonial" 
            style={{
              backgroundColor: '#fff',
              padding: '20px',
              borderRadius: '10px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              maxWidth: '300px',
              textAlign: 'center',
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
            <img 
              src={testimonial.image} 
              alt={testimonial.user} 
              style={{
                borderRadius: '50%',
                width: '80px',
                height: '80px',
                objectFit: 'cover',
                marginBottom: '15px',
                border: '3px solid #ddd',
              }} 
            />
            <p style={{ fontStyle: 'italic', marginBottom: '10px', color: '#555' }}>
              "{testimonial.text}"
            </p>
            <span style={{ fontWeight: 'bold', fontSize: '16px', color: '#333' }}>{testimonial.user}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;