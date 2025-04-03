// components/ButtonLink.js
import { useRouter } from "next/router";
import { Button } from "react-bootstrap";

const ButtonLink = ({ href, variant = "primary", children, className = "" }) => {
  const router = useRouter();

  const handleClick = () => {
    router.push(href);
  };

  return (
     <div className="d-flex justify-content-center mt-3">
    <Button variant={variant} onClick={handleClick} className={className}>
      {children}
    </Button>
    </div>
  );
};

export default ButtonLink;
