import React from "react";
import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import "../Styles/NavigationLg.css";
import { FaHome, FaUser, FaBriefcase, FaEnvelopeOpen } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

import { startLink } from "./data";

const NavigationLg = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <Stack
      zIndex={99}
      position="fixed"
      top="50%"
      right={40}
      sx={{ transform: "translateY(-50%)" }}
      display={{ xs: "none", lg: "flex" }}
    >
      <ul style={{ listStyle: "none" }}>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          alignItems="end"
          gap={3}
          fontSize={18}
          fontWeight="bold"
        >
          <div className="circle-btn" onClick={() => navigate(`${startLink}/`)}>
            <Box
              className={
                location.pathname === `${startLink}/`
                  ? "circle-btn-icon pageActive"
                  : "circle-btn-icon"
              }
              bgcolor="action.disabledBackground"
              color="text.secondary"
            >
              <FaHome />
            </Box>
            <div className="circle-btn-text">
              <Typography variant="h6" className="circle-btn-name">
                {" "}
                ACCUEIL{" "}
              </Typography>
            </div>
          </div>

          <div
            className="circle-btn"
            onClick={() => navigate(`${startLink}/about`)}
          >
            <Box
              className={
                location.pathname === `${startLink}/about`
                  ? "circle-btn-icon pageActive"
                  : "circle-btn-icon"
              }
              bgcolor="action.disabledBackground"
              color="text.secondary"
            >
              <FaUser />
            </Box>
            <div className="circle-btn-text">
              <Typography variant="h6" className="circle-btn-name">
                {" "}
                À PROPOS DE MOI{" "}
              </Typography>
            </div>
          </div>

          <div
            className="circle-btn"
            onClick={() => navigate(`${startLink}/Portfolio`)}
          >
            <Box
              className={
                location.pathname === `${startLink}/Portfolio`
                  ? "circle-btn-icon pageActive"
                  : "circle-btn-icon"
              }
              bgcolor="action.disabledBackground"
              color="text.secondary"
            >
              <FaBriefcase />
            </Box>
            <div className="circle-btn-text">
              <Typography variant="h6" className="circle-btn-name">
                {" "}
                Projets{" "}
              </Typography>
            </div>
          </div>

          <div
            className="circle-btn"
            onClick={() => navigate(`${startLink}/contact`)}
          >
            <Box
              className={
                location.pathname === `${startLink}/contact`
                  ? "circle-btn-icon pageActive"
                  : "circle-btn-icon"
              }
              bgcolor="action.disabledBackground"
              color="text.secondary"
            >
              <FaEnvelopeOpen />
            </Box>
            <div className="circle-btn-text">
              <Typography variant="h6" className="circle-btn-name">
                {" "}
                Contact{" "}
              </Typography>
            </div>
          </div>
        </Box>
      </ul>
    </Stack>
  );
};
export default NavigationLg;
