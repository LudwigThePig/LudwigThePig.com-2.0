import * as React from 'react';

interface ILudwigJumbo {
  animated: string;
}

const LudwigJumbo: React.SFC<ILudwigJumbo> = ({ animated }) => (
  <svg 
    className={`${animated}Img jumbo-img`}
    id="Layer_2" data-name="Layer 2" 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 828 945"
  >
    <path 
      id="back-right-leg" 
      d="M640,873q5,49.5,10,99h81l18-36L703,819Z" 
      transform="translate(-91.02 -26.99)" 
      fill="#ed6767"
    />
    <path 
      id="back-left-leg" 
      d="M370,873l-10,99H279l-18-36,46-117Z" 
      transform="translate(-91.02 -26.99)" 
      fill="#ed6767"
    />
    <polygon 
      id="slice-1"
      points="279 846 54 657 9 522 9 396 27 315 0 207 18 0 162 18 261 72 414 36 279 846" 
      fill="#001011"
    />
    <polygon 
      id="slice-2"
      points="279 846 414 873 549 846 612 792 414 36 279 846" 
      fill="#001011"
    />
    <polygon 
      id="stripe-3"
      points="774 657 817.99 522 817.99 396 799.99 315 828 207 810 0 666 18 567 72 414 36 774 657" 
      fill="#001011"
    />
    <polygon 
      id="front-left-leg"
      points="54 657 216 792 162 945 90 945 54 657" 
      fill="#793f5c"
    />
    <polygon 
      id="leg-stripe"
      points="666 945 612 792 414 36 774 657 738 945 666 945" 
      fill="#793f5c"
    />
    <polygon 
      id="nose"
      points="412.99 684 574.99 630 556.99 513 412.99 441 268.99 513 250.99 630 412.99 684" 
      fill="#ed6767"
    />
    <polygon 
      id="glasses"
      points="412.99 333 358.99 342 340.99 450 277.99 513 223.99 522 151.99 477 97.99 369 16.99 342 25.99 315 115.99 342 268.99 306 349.99 324 376.99 315 412.99 306 448.99 315 475.99 324 556.99 306 709.99 342 799.99 315 808.99 342 727.99 369 673.99 477 601.99 522 547.99 513 484.99 450 466.99 342 412.99 333" 
      fill="#a43a4b"
    />
    <polygon 
      id="nostril-1"
      points="484.99 612 466.99 603 457.99 585 457.99 567 466.99 549 484.99 540 502.99 549 511.99 567 511.99 585 502.99 603 484.99 612" 
      fill="#001011"
    />
    <polygon 
      id="nostril-2"
      points="340.99 612 358.99 603 367.99 585 367.99 567 358.99 549 340.99 540 322.99 549 313.99 567 313.99 585 322.99 603 340.99 612" 
      fill="#001011"
    />
  </svg>
);

export default LudwigJumbo;
