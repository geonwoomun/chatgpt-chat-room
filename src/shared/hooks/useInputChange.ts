import React, { useCallback, useState } from 'react';

const useInputChange = (initialValue: string = '') => {
  const [inputValue, setInputValue] = useState(initialValue);

  const handleChange = useCallback((event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  }, []);

  return [inputValue, handleChange] as const;
};

export default useInputChange;
