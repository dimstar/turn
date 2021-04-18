import * as React from 'react'

interface CardForm {
  nameFirst: string;
  nameLast: string;
  ccNumber: string;
  expDate: string;
  cvs: string;
}

const CardForm = (): JSX.Element => {
  const [formData, setFormData] = React.useState<CardForm>({
    nameFirst: '',
    nameLast: '',
    ccNumber: '',
    expDate: '',
    cvs: ''
  });

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // eslint-disable-next-line no-console
    console.table(formData);
  }

  const handleChangeFact = (inputId: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(fProps => ({
      [inputId]: e.currentTarget.value,
      ...fProps
    }));
  }

  return (
    <form id="CardForm" method="POST" onSubmit={submitForm} autoComplete="off">
      <fieldset>
        <label htmlFor="firstName">
          First Name
            <input id="firstName" type="text" onChange={handleChangeFact("firstName")} />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="lastName">
          Last Name
            <input id="lastName" type="text" onChange={handleChangeFact("lastName")} />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="cardNumber">
          Card Number
            <input id="cardNumber" type="text" onChange={handleChangeFact("cardNumber")} />
        </label>
      </fieldset>
    </form>
  )
}

export default CardForm;
