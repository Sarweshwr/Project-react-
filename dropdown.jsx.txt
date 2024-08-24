import Dropdown from 'react-bootstrap/Dropdown';
import Account from "./account";
import DropdownButton from 'react-bootstrap/DropdownButton';
import {Link} from "react-router-dom";
function DropdownProfile() {
  return (
    <DropdownButton id="dropdownProfile" title="Profile">
      <Dropdown.Item><Link to="/account">Account</Link></Dropdown.Item>
      <Dropdown.Item><Link to="/">Settings</Link></Dropdown.Item>
      <Dropdown.Item><Link to="/">Logout</Link></Dropdown.Item>
    </DropdownButton>
  );
}

export default DropdownProfile;