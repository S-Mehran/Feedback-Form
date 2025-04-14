import React, { useState } from 'react';
import './FeedbackForm.css'; // Import CSS for styling

const FeedbackForm = () => {
    const [formData, setFormData] = useState({name: '', email: '', feedback: ''})

    const handleChange = (event) => {
        const {name, value} = event.target;
        console.log(name, value)
        setFormData({...formData, [name]: value})
    }

    const handleSubmit = (event) => {
      event.preventDefault();
      const confirmationMsg = `Name: ${formData.name} Email: ${formData.email} Feedback: ${formData.feedback}`

      const isConfirmed = window.confirm(`Please confirm your details:\n\n${confirmationMsg}`)
      if (isConfirmed) {
        console.log("Submitting Feedback", formData)
        setFormData({name: '', email: '', feedback:''})
        alert("Thank you for your valuable feedback!")
      }
    }
  return (
    <>
    <nav>
    Tell Us What You Think
    </nav>
      <form onSubmit={handleSubmit} className="feedback-form">
        <h2>We'd Love to Hear From You!</h2>
        <p>Please share your feedback with us.</p>
        
      <input type="text" name='name' placeholder='Enter your Name' value={formData.name} onChange={handleChange}></input>
      <input type="email" name='email' placeholder='Enter your Email' value={formData.email} onChange={handleChange}></input>
     <textarea name='feedback' placeholder='Enter Your Feedback' value={formData.feedback} onChange={handleChange}></textarea>
     <button type='submit'>Submit Feedback</button>
      </form>
    </>
  );
};

export default FeedbackForm;
