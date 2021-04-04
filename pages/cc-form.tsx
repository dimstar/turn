import React from 'react';

const ccForm = (): JSX.Element => (
  <div>
    <div>
      <form id="">
        <fieldset>
          <label htmlFor="cardNumber">
            Card Number
            <input name="cardNumber" id="cardNumber" type="text" />
          </label>
        </fieldset>
      </form>
    </div>
  </div>
);

export default ccForm;
