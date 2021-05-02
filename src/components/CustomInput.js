import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Input, Button } from 'semantic-ui-react';

function CustomInput() {
  const history = useHistory();
const [id, setId] = useState('')

  const handleInputChange = ({ target: { value } }) => {
    setId(value);
  };
 const handleSubmit = () => {
    history.push(`/central/${id}`);
  };
 const handleClick = () => {
    handleSubmit();
  }
    return (
      <div style={{ height: '60px' }}>
        <Button content="Busca por ID" onClick={handleClick} />
        <Input name="id" value={id} onChange={handleInputChange} placeholder="Insira o ID..." />
      </div>
    );
}

export default CustomInput;
