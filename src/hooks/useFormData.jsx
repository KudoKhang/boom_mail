import { useState } from 'react';

export const useFormData = () => {
  const [formData, setFormData] = useState({});

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return {
    formData,
    onInputChange,
  };
};
