import {toggle} from './actions';
import {tooltipCursor} from '../state';
import {register} from '../dispatcher';

export const dispatchToken = register(({action, data}) => {

  switch (action) {

    case toggle:

      const currentValue = tooltipCursor().get(`${data}TooltipShowed`)
      tooltipCursor(tooltip => {
        return tooltip
          .set('skypeTooltipShowed', false) 
          .set('googleTooltipShowed', false)
      })
      tooltipCursor(tooltip => tooltip.set(`${data}TooltipShowed`, !currentValue))

  }

});
