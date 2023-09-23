import React from "react";

function SignUp({ setIsSignUp }) {
  return (
    <div className="auth-form">
      <div className="auth-form__wrap">
        <h2 className="auth-form__title">Регистрация</h2>
        <span className="auth-form__subtitle">
          Заполните данные для регистрации
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
          type="text"
          placeholder="Адрес или Почта"
        />
        <input
          className="auth-form__field"
          type="password"
          placeholder="Пароль"
        />
        <input
          className="auth-form__field"
          type="password"
          placeholder="Повторить пароль"
        />
      </div>
      <div className="user-form__btns">
        <button className="user-form__btn user-form__btn--active auth-form__btn">
          Создать аккаунт
        </button>
        <button onClick={() => setIsSignUp(false)} className="user-form__btn auth-form__btn">Войти</button>
      </div>
    </div>
  );
}

export default SignUp;
