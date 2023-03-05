import { trigger, transition, style, animate, animateChild, query } from '@angular/animations';

export function cardAnimation() {
    return trigger('cardAnimation', [
        transition('* => *', [
            style({ opacity: 0, transform: 'translateY(30px)' }),
            animate('700ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
        ])
    ]);
}

export function cardAnimationCategory() {
  return trigger('cardAnimationCategory', [
      transition('* => *', [
        style({ opacity: 0, transform: 'translateY(30px)' }),
        animate('400ms ease-in-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      // Add this transition to trigger the animation every time categoryFilter changes
      // and set a boolean flag to trigger the animation only once per filter change
      // and wait for the animation to complete before resetting the flag
      // The * wildcard means any state change
      transition('* => *', [
        animate('0s', style('*')),
        query('@*', [
          animateChild()
        ], { optional: true }),
        animate('0s', style('*')),
        query('@cardAnimationCategory', [
          animateChild()
        ], { optional: true }),
        animate('0s', style('*')),
        query(':self', [
          animate('700ms ease-out', style('*'))
        ], { optional: true })
      ])
    ]);
  }
  