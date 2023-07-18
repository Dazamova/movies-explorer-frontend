import React from "react";

export const Input = (props) => {
  const { inputName, name, id, type, value, onChange, minLength, maxLength, error } = props;
  return (
    <div className="input">
      <p className="input__name">{inputName}</p>
      <input id={id} type={type} name={name} value={value} onChange={onChange}
        className="input__field" minLength={minLength} maxLength={maxLength} required />
      <span className={`input__error ${error && "input__error_visible"}`}>{error}</span>
    </div>
  )
}