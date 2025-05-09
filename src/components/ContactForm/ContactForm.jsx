import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    owner_name: '',
    personal_email: '',
    contact_no: '',
    address: '',
    account_title: '',
    bank_name: '',
    account_number: '',
    start_order_date: '',
    total_connections: '',
    price: '',
    account_email: '',
    account_password: '',
    already_rented: '',
    reference_name: '',
    already_restrict: '',
    alternative_contact: '',
    confirm_policies: false
  });

  const [showSuccess, setShowSuccess] = useState(false);  // Keep success state for success message

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbxD5KsFgdPrNBomNE5itOLVE6gehGOC4u6Bw20tSJtwBjiagq13302EFTSE3XnttlI_1Q/exec'; // Update this to the correct URL

    try {
      await fetch(scriptURL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setShowSuccess(true);  // Show success message
      setFormData({          // Reset form fields
        owner_name: '',
        personal_email: '',
        contact_no: '',
        address: '',
        account_title: '',
        bank_name: '',
        account_number: '',
        start_order_date: '',
        total_connections: '',
        price: '',
        account_email: '',
        account_password: '',
        already_rented: '',
        reference_name: '',
        already_restrict: '',
        alternative_contact: '',
        confirm_policies: false
      });

      // Auto-hide the success message after 5 seconds
      setTimeout(() => setShowSuccess(false), 5000);

      alert('Successfully Saved');  // Optional: keep alert for additional feedback
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting data.');
    }
  };

  return (
    <div className="contact-form-container">
      {showSuccess && (
        <div style={{
          textAlign: 'center',
          backgroundColor: '#d4edda',
          color: '#155724',
          padding: '12px',
          position: 'fixed',
          top: '0',
          left: '0',
          width: '100%',
          zIndex: '9999',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          transition: 'opacity 0.5s ease',
        }}>
          ✅ Thank you! Your form was submitted successfully.
        </div>
      )}

      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Submit Your Details</h2>

        <label>Owner Name</label>
        <input type="text" name="owner_name" value={formData.owner_name} onChange={handleChange} required />

        <label>Personal Email</label>
        <input type="email" name="personal_email" value={formData.personal_email} onChange={handleChange} required />

        <label>Contact Number</label>
        <input type="text" name="contact_no" value={formData.contact_no} onChange={handleChange} required />

        <label>Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} required />

        <label>Account Title</label>
        <input type="text" name="account_title" value={formData.account_title} onChange={handleChange} required />

        <label>Bank Name</label>
        <input type="text" name="bank_name" value={formData.bank_name} onChange={handleChange} required />

        <label>Account Number</label>
        <input type="text" name="account_number" value={formData.account_number} onChange={handleChange} required />

        <label>Start Order Date</label>
        <input type="date" name="start_order_date" value={formData.start_order_date} onChange={handleChange} required />

        <label>Total Connections</label>
        <input type="number" name="total_connections" value={formData.total_connections} onChange={handleChange} required />

        <label>Price</label>
        <input type="number" name="price" value={formData.price} onChange={handleChange} required />

        <label>Account Email</label>
        <input type="email" name="account_email" value={formData.account_email} onChange={handleChange} required />

        <label>Account Password</label>
        <input type="password" name="account_password" value={formData.account_password} onChange={handleChange} required />

        <label>Already Rented</label>
        <input type="text" name="already_rented" value={formData.already_rented} onChange={handleChange} />

        <label>Reference Name</label>
        <input type="text" name="reference_name" value={formData.reference_name} onChange={handleChange} />

        <label>Already Restrict</label>
        <input type="text" name="already_restrict" value={formData.already_restrict} onChange={handleChange} />

        <label>Alternative Contact</label>
        <input type="text" name="alternative_contact" value={formData.alternative_contact} onChange={handleChange} />

        <label>
          <input type="checkbox" name="confirm_policies" checked={formData.confirm_policies} onChange={handleChange} />
          I agree to the policies
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
