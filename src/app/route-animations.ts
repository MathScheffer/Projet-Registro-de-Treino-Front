import {
    trigger,
    transition,
    style,
    query,
    group,
    animateChild,
    animate,
    keyframes
} from '@angular/animations'


export const fader = 
trigger('routeAnimations', [
    transition('* <=> *', [
        query(':enter, :leave', [
            style({
                position: 'absolute',
                left: 0,
                width: '100%',
                opacity: 0,
                transform: 'scale(0) translateY(50%)',
            }),
            query(':enter', [
                animate('2000ms ease',
                    style({opacity: 1, transform: 'scale(1) translateY(0)'})
                )
            ])
        ])
    ])
])

export const slider =
  trigger('routeAnimations', [
    transition('* => isLeft', slideTo('left') ),
    transition('* => isRight', slideTo('right') ),
    transition('isRight => *', slideTo('left') ),
    transition('isLeft => *', slideTo('right') )
  ]);

function slideTo(direction: any) {
  const optional = { optional: true };
  return [
    query(':enter, :leave', [
      style({
        position: 'absolute',
        [direction]: 0,
        width: '100%',
        opacity: .5
      })
    ], optional),
    query(':enter', [
      style({ [direction]: '-10%'})
    ]),
    group([
      query(':leave', [
        animate('600ms ease', style({ [direction]: '10%', opacity: 0}))
      ], optional),
      query(':enter', [
        animate('800ms ease', style({ [direction]: '0%', opacity: 1}))
      ])
    ]),
    // Normalize the page style... Might not be necessary

    // Required only if you have child animations on the page
    // query(':leave', animateChild()),
    // query(':enter', animateChild()),
  ];
}