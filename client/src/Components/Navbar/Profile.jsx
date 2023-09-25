import { MenuItem } from "@mui/material";
import { Link } from "react-router-dom";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

export const Profile = ({ account, setAccount, partner, setPartner }) => {
  const slicedName = (word) => {
    return word.slice(0, 6);
  };

  return (
    <>
      {account ? (
        <Link
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
           <SupervisorAccountIcon />&nbsp;&nbsp;
          <span>{`${slicedName(account)}`}</span>&nbsp;&nbsp;
        </Link>
      ) : partner ? (
        <Link
          style={{
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
            color: "black",
          }}
        >
          <SupervisorAccountIcon />
          &nbsp;&nbsp;<span>{`${slicedName(partner)}`}</span>&nbsp;&nbsp;
        </Link>
      ) : (
        <Link style={{ display: "none" }}>
          <SupervisorAccountIcon />
          <span>{`${slicedName(partner)}`}</span>&nbsp;&nbsp;
        </Link>
      )}
    </>
  );
};

export default Profile;
