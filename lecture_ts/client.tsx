// React, ReactDOM은 TS에서 아래와 같이 import하는데
// 그 이유는 export default처리가 안되어 있기 때문이다. 
import * as React from 'react';
import * as  ReactDOM from 'react-dom';

import NumberBaseball from './NumberBaseball';

ReactDOM.render(<NumberBaseball />, document.querySelector('#root'));
