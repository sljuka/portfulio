import setToString from '../lib/settostring';
import {dispatch} from '../dispatcher';

export function toggle(value) {
  dispatch(toggle, value)
}

setToString('tooltip', {
  toggle
});
