interface ComponentProps {
  show: boolean;
}

// Loading Spinner
export default function Loader({ show }: ComponentProps) {
  return show ? <div className="loader"></div> : null;
}
