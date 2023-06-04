import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export const fadeInAnimation = trigger('fadeIn', [
  state(
    'void',
    style({
      opacity: 0,
      transform: 'scale(0.8)',
    })
  ),
  transition(':enter', [
    animate(
      '200ms',
      style({
        opacity: 1,
        transform: 'scale(1)',
      })
    ),
  ]),
  transition(':leave', [
    animate(
      '300ms',
      style({
        opacity: 0,
        transform: 'scale(0.8)',
      })
    ),
  ]),
]);
