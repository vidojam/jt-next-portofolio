import React from 'react';

const email = 'jose.torres8672@icloud.com';

const Contact: React.FC = () => {
  return (
    <div><br/>
      <h1>Contact Me</h1><br/><br/>
      <p className="text-lg">
        Please feel free to contact me at{' '}
        <strong>{email}</strong>
      </p>
    </div>
  );
};

export default Contact;
