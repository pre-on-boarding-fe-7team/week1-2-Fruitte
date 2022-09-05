import { useState, useCallback } from 'react';

function useInputs(initialForm) {
  const [input, setValue] = useState(initialForm);

  const onChange = useCallback(e => {
    const { name, value } = e.target;
    setValue(input => ({ ...input, [name]: value }));
  }, []);

  return [input, onChange];
}

export default useInputs;
