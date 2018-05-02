import React from 'react';
import styled, { css } from 'styled-components';
import { storiesOf } from '@storybook/react';

const Card = styled.div`
  border-radius: 3px;
  padding: 10px;
  font-size: 14px;
  box-sizing: content-box;
  border: 1px solid #e7e7e7;
  background-color: transparent;
  box-shadow: 0px 2px 2px -1px rgba(0, 0, 0, 0.4);
  transition: box-shadow 0.12s ease-in-out;

  ${props => props.hoverable && css`
    &:hover {
      box-shadow: 0px 3px 1px -1px rgba(0, 0, 0, 0.5);
      cursor: pointer;
    }
  `}
`;

storiesOf('Card', module)
  .add('default', () => (
    <Card>
      Long<br />
      .<br />
      .<br />
      .<br />
      .<br />
      .<br />
      .<br />
      .<br />
      Content<br />
    </Card>
  ))
  .add('hoverable', () => (
    <Card hoverable>
      Long<br />
      .<br />
      .<br />
      .<br />
      .<br />
      .<br />
      .<br />
      .<br />
      Content<br />
    </Card>
  ));
