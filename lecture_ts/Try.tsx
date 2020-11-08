import * as React from 'react';
import { TryProps } from './types';

const Try: React.FunctionComponent<TryProps> = (props) => {
  return (
    <li>
      <div>{props.tryInfo.try}</div>
      <div>{props.tryInfo.result}</div>
    </li>
  );
};

export default Try;
