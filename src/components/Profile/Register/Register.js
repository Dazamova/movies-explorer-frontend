import React from "react";
import { AuthorisationForm } from "../AuthorisationForm/AuthorisationForm";
import { Input } from "../AuthorisationForm/Input/Input";

export const Register = (props) => {
  const { onSubmit } = props;
  const [formValue, setFormValue] = React.useState('', '');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formValue);
  }

  return (
    <AuthorisationForm header="Добро пожаловать!" buttonText="Зарегистрироваться" onSubmit={handleSubmit} isDisplay={true}>
      <>
        <Input
          inputName="Имя"
          name="name"
          id="name"
          type="text"
          onChange={handleChange}
          value={formValue.name || ''}
          minLength="2"
          maxLength="20"
        />
        <Input
          inputName="E-mail"
          name="email"
          id="email"
          type="email"
          onChange={handleChange}
          value={formValue.email || ''}
          minLength="6"
          maxLength="40"
        />
        <Input
          inputName="Пароль"
          name="password"
          id="password"
          type="password"
          onChange={handleChange}
          value={formValue.password || ''}
          minLength="6"
          maxLength="10"
          error="visible"
        />
      </>
    </AuthorisationForm>
  )
}