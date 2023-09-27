interface ArrowsSvg {
  className?: string;
}

export const ArrowsSvg = ({ className }: ArrowsSvg) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 32 32"
    fill="none"
  >
    <path
      d="M17.3336 20.3088L25.4626 26.2555C27.1992 27.4517 29.3334 25.8948 29.3334 23.4316V20M17.3336 11.6913L25.4626 5.74452C27.1992 4.5483 29.3334 6.10526 29.3334 8.56842V14.6667"
      stroke="#1C274C"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M8.84007 10.2777L13.785 7.02643C15.3769 5.97975 17.3333 7.3421 17.3333 9.49736V22.5027C17.3333 24.6579 15.3769 26.0203 13.785 24.9736L3.89509 18.4709C2.25713 17.394 2.25713 14.606 3.89511 13.5291L5.13135 12.7162"
      stroke="#1C274C"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);
