import { useState } from 'react';

export const useFormData = (defaultState = {}) => {
  const [formData, setFormData] = useState(defaultState);

  const onInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetForm = () => {
    setFormData({});
  };

  return {
    formData,
    onInputChange,
    resetForm,
  };
};
