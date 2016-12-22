import {
  animate,
  AnimationEntryMetadata,
  state,
  style,
  transition,
  trigger,
} from '@angular/core';

export const shrinkOut: AnimationEntryMetadata = trigger('shrinkOut', [
  state('open', style({ height: '*' })),
  state('noOpen', style({ height: 0 })), 
  transition('noOpen => open', [
    animate(250)
  ]),
  transition('open => noOpen', [ 
    animate(250) 
  ]),
]);