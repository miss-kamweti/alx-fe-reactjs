import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Your message has been submitted.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ 
      padding: '60px 20px',
      backgroundColor: 'white',
      minHeight: 'calc(100vh - 200px)'
    }}>
      <div style={{ 
        maxWidth: '1000px',
        margin: '0 auto',
        display: 'flex',
        gap: '50px',
        flexWrap: 'wrap'
      }}>
        <div style={{ flex: '1', minWidth: '300px' }}>
          <h1 style={{ 
            color: '#2c3e50',
            fontSize: '2.8rem',
            marginBottom: '20px'
          }}>
            Contact Us
          </h1>
          
          <p style={{ 
            color: '#7f8c8d',
            lineHeight: '1.8',
            marginBottom: '30px',
            fontSize: '1.1rem'
          }}>
            Have questions or need assistance? We're here to help! 
            Fill out the form and our team will get back to you 
            within 24 hours.
          </p>

          <div style={{ 
            backgroundColor: '#f8f9fa',
            padding: '30px',
            borderRadius: '10px',
            marginTop: '40px'
          }}>
            <h3 style={{ 
              color: '#34495e',
              marginBottom: '20px'
            }}>
              Contact Information
            </h3>
            
            <div style={{ marginBottom: '15px' }}>
              <strong style={{ color: '#3498db' }}>Address:</strong>
              <p style={{ color: '#7f8c8d', margin: '5px 0' }}>
                123 Business Street, City, Country 10001
              </p>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <strong style={{ color: '#3498db' }}>Phone:</strong>
              <p style={{ color: '#7f8c8d', margin: '5px 0' }}>
                (123) 456-7890
              </p>
            </div>
            
            <div style={{ marginBottom: '15px' }}>
              <strong style={{ color: '#3498db' }}>Email:</strong>
              <p style={{ color: '#7f8c8d', margin: '5px 0' }}>
                info@mycompany.com
              </p>
            </div>
            
            <div>
              <strong style={{ color: '#3498db' }}>Hours:</strong>
              <p style={{ color: '#7f8c8d', margin: '5px 0' }}>
                Monday - Friday: 9:00 AM - 6:00 PM
              </p>
            </div>
          </div>
        </div>

        <div style={{ flex: '1', minWidth: '300px' }}>
          <div style={{ 
            backgroundColor: '#f8f9fa',
            padding: '40px',
            borderRadius: '10px',
            boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
          }}>
            <h3 style={{ 
              color: '#2c3e50',
              marginBottom: '30px',
              textAlign: 'center'
            }}>
              Send us a Message
            </h3>
            
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label style={{ 
                  display: 'block',
                  marginBottom: '8px',
                  color: '#34495e',
                  fontWeight: 'bold'
                }}>
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter your name"
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label style={{ 
                  display: 'block',
                  marginBottom: '8px',
                  color: '#34495e',
                  fontWeight: 'bold'
                }}>
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '1rem'
                  }}
                  placeholder="Enter your email"
                />
              </div>

              <div style={{ marginBottom: '30px' }}>
                <label style={{ 
                  display: 'block',
                  marginBottom: '8px',
                  color: '#34495e',
                  fontWeight: 'bold'
                }}>
                  Your Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '1px solid #ddd',
                    borderRadius: '5px',
                    fontSize: '1rem',
                    minHeight: '150px',
                    resize: 'vertical'
                  }}
                  placeholder="Type your message here..."
                />
              </div>

              <button
                type="submit"
                style={{
                  width: '100%',
                  backgroundColor: '#3498db',
                  color: 'white',
                  border: 'none',
                  padding: '15px',
                  borderRadius: '5px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  transition: 'background-color 0.3s'
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#2980b9'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#3498db'}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;