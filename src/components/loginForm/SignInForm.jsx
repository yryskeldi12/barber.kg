import React from "react";

function SignInForm({ setIsSignUp }) {
  return (
    <div className="auth-form">
      <div className="auth-form__wrap">
        <h2 className="auth-form__title">Вход</h2>
        <span className="auth-form__subtitle">
          Заполните данные для того чтобы войти
        </span>
        <button className="user-form__btn user-form__btn--active auth-form__enter">
          Вход через Google
        </button>
        <span className="auth-form__extra">Или</span>
      </div>

      <div className="auth-form__fields">
        <input
          className="auth-form__field"
          type="text"
          placeholder="Никнэйм"
        />
        <input
          className="auth-form__field"
          type="password"
          placeholder="Пароль"
        />
      </div>
      <div className="user-form__btns">
        <button className="user-form__btn user-form__btn--active auth-form__btn">
          Войти
        </button>
        <button onClick={() => setIsSignUp(true)} className="user-form__btn auth-form__btn">Регистрация</button>
      </div>
    </div>
  );
}

export default SignInForm;
