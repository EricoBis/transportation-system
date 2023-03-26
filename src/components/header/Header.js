import { StyledLink } from "../../styles";
import { ImTruck } from "react-icons/im";
import { StyledHeader } from "./style";

function Header() {
  return (
    <StyledHeader>
      <StyledLink to="/">
        <ImTruck />
      </StyledLink>
    </StyledHeader>
  );
}

export default Header;
