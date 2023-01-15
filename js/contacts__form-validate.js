const validate = new window.JustValidate('#order', {
// поле с ошибкой
    errorLabelCssClass: 'is-label-invalid',
    errorLabelStyle: {
    color: '#D11616',
    fontSize: '12px',
    fontWeight: '400',
    lineHeigh: '16px',
    position: 'absolute',
    top: '-15px',
    },
    focusInvalidField: false,
  }
);

validate
  .addField('#form__name', [
    {
      rule: 'required',
      errorMessage: 'Как вас зовут?',
    },
    {
      rule: 'minLength',
      value: 3,
      errorMessage: 'Не менее 3 символов',
    },
  ])

  .addField('#form__tel', [
    {
      rule: 'required',
      errorMessage: 'Укажите Ваш телефон',
    },
    {
      // Field "validator" used for custom validation.
      validator: (value) => {
        const phone = selector.inputmask.unmaskedvalue();
        return Number(phone) && phone.length === 10
      },
      errorMessage: 'Введите 10 цифр номера телефона',
    },
]);


