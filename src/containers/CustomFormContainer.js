import SignUp from "components/signup";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CustomFormContainer() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const handleSbumit = (data) => {
    console.log('data', data);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate('/');
    }, 2000);
  };

  return (
   <SignUp onSubmit={handleSbumit} loading={loading} />
  );
}

export default CustomFormContainer;
