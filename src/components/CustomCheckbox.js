import React from 'react';
import { List, Checkbox } from 'semantic-ui-react';

const CustomCheckbox = ({
  checkedError,
  checkedQuantity,
  checkedData,
  checkedDescription,
  checkedOrigin,
}) => (
    <List horizontal='true' >
      <List.Item>
        <Checkbox checked={checkedError} label="Error" defaultChecked />
      </List.Item>
      <List.Item>
        {' '}
        <Checkbox
          checked={checkedDescription}
          label="Description"
          defaultChecked
        />
      </List.Item>
      <List.Item>
        {' '}
        <Checkbox checked={checkedOrigin} label="Origin " defaultChecked />
      </List.Item>
      <List.Item>
        {' '}
        <Checkbox checked={checkedData} label="Data" defaultChecked />
      </List.Item>
      <List.Item>
        {' '}
        <Checkbox checked={checkedQuantity} label="Quantity" defaultChecked />
      </List.Item>
    </List>
);

export default CustomCheckbox;
