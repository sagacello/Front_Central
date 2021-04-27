import React from 'react';
import { Checkbox } from 'semantic-ui-react';

const CustomCheckbox = ({ checkedError, checkedQuantity, checkedData, checkedDescription }) => (
  <div>
    <Checkbox checked={ checkedError } label="Error" defaultChecked />
    <Checkbox checked={ checkedQuantity } label="Quantity" defaultChecked />
    <Checkbox checked={ checkedDescription } label="Description" defaultChecked />
    <Checkbox checked={ checkedData } label="Data" defaultChecked />
  </div>
);

export default CustomCheckbox;
