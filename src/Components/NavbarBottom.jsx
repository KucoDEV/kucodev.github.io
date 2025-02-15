import React, { Fragment, useEffect, useState } from "react";
import { BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import { FaHome, FaUser, FaBriefcase, FaEnvelopeOpen } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import { startLink } from "./data";

const NavbarBottom = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [value, setValue] = useState();

  useEffect(() => {
    switch (location.pathname) {
      case `${startLink}/`:
        setValue(0);
        break;
      case `${startLink}/about`:
        setValue(1);
        break;
      case `${startLink}/Portfolio`:
        setValue(2);
        break;
      case `${startLink}/contact`:
        setValue(3);
        break;
      default:
        setValue(0);
        break;
    }
  }, [location.pathname]);

  return (
    <Fragment>
      <Box height="56px" display={{ xs: "block", lg: "none" }}></Box>

      <Box
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={3}
        display={{ xs: "block", lg: "none" }}
        zIndex={20}
      >
        <BottomNavigation
          sx={{ bgcolor: "#1a1a1a" }}
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            navigate(event.currentTarget.attributes.link.value);
          }}
        >
          <BottomNavigationAction
            sx={{ color: "#ffffff" }}
            link={`${startLink}/`}
            label="Home"
            icon={<FaHome />}
          />
          <BottomNavigationAction
            sx={{ color: "#ffffff" }}
            link={`${startLink}/about`}
            label="Abute Me"
            icon={<FaUser />}
          />
          <BottomNavigationAction
            sx={{ color: "#ffffff" }}
            link={`${startLink}/Portfolio`}
            label="Portfolio"
            icon={<FaBriefcase />}
          />
          <BottomNavigationAction
            sx={{ color: "#ffffff" }}
            link={`${startLink}/contact`}
            label="Contact"
            icon={<FaEnvelopeOpen />}
          />
        </BottomNavigation>
      </Box>
    </Fragment>
  );
};

export default NavbarBottom;
