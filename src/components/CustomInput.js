import React, { Component, createRef } from 'react';
import { Input, Button } from 'semantic-ui-react';

class CustomInput extends Component {
  inputRef = createRef();
  handleClick = () => this.inputRef.current.focus();
  render() {
    return (
      <div style={{ height: '60px' }}>
        <Button content="focus" onClick={this.handleClick} />
        <Input ref={this.inputRef} placeholder="Insira o ID..." />
      </div>
    );
  }
}

export default CustomInput;
