import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import styled from 'styled-components';

const Button = styled.button`
  border-radius: 3px;
  padding: 10px;
  font-size: 14px;
  box-sizing: content-box;
  color: #ffa500;
  border-color: #ffa500;
  background-color: transparent;
  transition: all 0.15s ease-in-out;

  &:hover {
    color: #fff;
    background-color: #ffa500;
    cursor: pointer;
  }
`;


storiesOf('Button', module)
  .add('default', () => <Button onClick={action('onClick')}>default</Button>);
