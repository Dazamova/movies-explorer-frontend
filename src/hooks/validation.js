import React from "react";

//хук управления формой
export function useForm() {
  const [values, setValues] = React.useState({});

  const handleChange = React.useCallback((event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    setValues((prev) => ({ ...prev, [name]: value }));
  }, []);

  return { values, handleChange, setValues };
}

//хук управления формой и валидации формы
export function useFormWithValidation() {
  const [values, setValues] = React.useState({});
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  const handleChange = React.useCallback((event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: target.validationMessage }));
    setIsValid(target.closest("form").checkValidity());
  }, []);

  const resetForm = React.useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid]
  );

  return { values, handleChange, errors, isValid, resetForm };
}