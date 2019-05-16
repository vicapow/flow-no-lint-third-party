// @flow

import invalidTypes from './invalid-types';
import failedLint  from './failed-lint';
import {StatefulInput} from 'baseui/input';

const a = failedLint(20);


function foo(a: number): string {
  // $FlowFixMe
  return 10;
}

