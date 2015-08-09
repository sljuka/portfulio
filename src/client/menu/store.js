import {toggle, setMenuStyle} from './actions';
import {menuCursor} from '../state';
import {register} from '../dispatcher';

export const dispatchToken = register(({action, data}) => {

  switch (action) {

    case toggle:
      if(data === null) {
        const currentValue = menuCursor().get('expanded')
        menuCursor(menu => menu.set('expanded', !currentValue))
      } else {
        menuCursor(menu => menu.set('expanded', data))  
      }
      break;

    case setMenuStyle:
      const isCompact = data <= 700
      if(!isCompact)
        menuCursor(menu => menu.set('expanded', false))
      menuCursor(menu => menu.set('compact', isCompact))
      break;

  }

});
