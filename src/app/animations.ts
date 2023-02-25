import { trigger, transition, style, animate } from '@angular/animations';

export function cardAnimation() {
  return trigger('cardAnimation', [
    transition('* => *', [
      style({ opacity: 0, transform: 'translateY(30px)' }),
      animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
    ])
  ]);
}