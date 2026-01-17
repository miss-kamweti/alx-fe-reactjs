import React from 'react';

function Services() {
  const services = [
    "Technology Consulting",
    "Market Analysis", 
    "Product Development",
    "Web Development",
    "Mobile App Development",
    "Digital Marketing",
    "Cloud Solutions",
    "Data Analytics"
  ];

  return (
    <div style={{ 
      padding: '60px 20px',
      backgroundColor: '#f8f9fa',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <div style={{ 
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <h1 style={{ 
          color: '#2c3e50',
          fontSize: '2.8rem',
          marginBottom: '10px',
          textAlign: 'center'
        }}>
          Our Services
        </h1>
        
        <p style={{ 
          color: '#7f8c8d',
          textAlign: 'center',
          fontSize: '1.1rem',
          marginBottom: '50px',
          maxWidth: '600px',
          marginLeft: 'auto',
          marginRight: 'auto'
        }}>
          We offer a comprehensive range of services to help your business 
          thrive in the digital landscape.
        </p>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '25px'
        }}>
          {services.map((service, index) => (
            <div key={index} style={{ 
              backgroundColor: 'white',
              padding: '30px',
              borderRadius: '10px',
              boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
              textAlign: 'center',
              transition: 'transform 0.3s',
              borderTop: `4px solid ${
                index % 3 === 0 ? '#3498db' : 
                index % 3 === 1 ? '#2ecc71' : '#e74c3c'
              }`
            }}>
              <div style={{ 
                width: '60px',
                height: '60px',
                backgroundColor: index % 3 === 0 ? '#3498db' : 
                               index % 3 === 1 ? '#2ecc71' : '#e74c3c',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px',
                color: 'white',
                fontSize: '1.5rem',
                fontWeight: 'bold'
              }}>
                {index + 1}
              </div>
              
              <h3 style={{ 
                color: '#2c3e50',
                marginBottom: '15px'
              }}>
                {service}
              </h3>
              
              <p style={{ 
                color: '#7f8c8d',
                lineHeight: '1.6'
              }}>
                Professional {service.toLowerCase()} services tailored to 
                your business needs.
              </p>
              
              <button style={{ 
                marginTop: '20px',
                backgroundColor: index % 3 === 0 ? '#3498db' : 
                               index % 3 === 1 ? '#2ecc71' : '#e74c3c',
                color: 'white',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer'
              }}>
                Learn More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;