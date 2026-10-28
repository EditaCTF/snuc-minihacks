export default function CcLogo({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="30 60 140 80"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="SNUC Coding Club"
    >
      <path
        d="M84 68.5H49V78.5H39V123H49V132.5H84V123H93V116.5H77V126H55V76H77V85H93V78.5H84V68.5Z"
        fill="currentColor"
      />
      <path
        d="M151 68H116V78H106V122.5H116V132H151V122.5H160V116H144V125.5H122V75.5H144V84.5H160V78H151V68Z"
        fill="currentColor"
      />
    </svg>
  );
}
