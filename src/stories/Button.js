import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';

const Button = styled.button`
  border-radius: 3px;
  padding: 10px;
  font-size: 14px;
  box-sizing: content-box;
  color: #ffa500;
  border-color: #ffa500;
  background-color: transparent;
  transition: all 0.15s ease-in-out;

  &:hover:not(:disabled) {
    color: #fff;
    background-color: #ffa500;
    cursor: pointer;
  }

  &:disabled {
    color: #bbb;
    background-color: #fff;
    border-color: #bbb;
    cursor: not-allowed;
  }
`;

const FloatButton = Button.extend`
  box-shadow: 0px 2px 2px -0.5px rgba(0, 0, 0, 0.4);
  &:hover:not(:disabled) {
    box-shadow: 0px 3px 1px -0.2px rgba(0, 0, 0, 0.5);
  }
`;

storiesOf('Button', module)
  .add('default', () => <Button>default button</Button>)
  .add('default disabled', () => <Button disabled>default button disabled</Button>)
  .add('float', () => <FloatButton>float button</FloatButton>)
  .add('float disabled', () => <FloatButton disabled>float button disabled</FloatButton>);
