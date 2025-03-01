import React from "react";
import {
  Avatar,
  Box,
  Container,
  Divider,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2/Grid2";

import myImage2 from "../Images/02.png";
import myImage3 from "../Images/03.png";

import { myPersonalInfo, skills, skills2 } from "./data";
import Parcours from "./Parcours";
import { FiDownload } from "react-icons/fi";

import "../Styles/index.css";
import "animate.css";

import useProgressiveImg from "./useProgressiveImg";
import { motion } from "framer-motion";

export default function About() {
  const [src, { blur }] = useProgressiveImg(myImage3, myImage2);
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <Container sx={{ my: { xs: "12%", lg: "70px" } }}>
      <Stack textTransform="uppercase" mb={6} position="relative">
        <Typography
          fontWeight="900"
          fontSize={{ xs: "25px", lg: "60px" }}
          textAlign="center"
        >
          À propos de
          <span style={{ color: "var(--mainPrimary)" }}> MOI</span>
        </Typography>
      </Stack>

      <Grid container spacing={3}>
        <Grid item xs={12} lg={5} color="text.secondary">
          <Box display="flex" justifyContent="center" mb={{ xs: 6, lg: 0 }}>
            <Avatar
              alt="Mathéo PICHOT-MOÏSE"
              src={src}
              sx={{
                width: "300px",
                height: "300px",
                border: "4px solid #252525",
                objectFit: "top",
                boxShadow: "0 8px 4px 0 text.primary, 0 6px 20px 0 primary",
              }}
              style={{
                filter: blur ? "blur(20px)" : "none",
                transition: blur ? "none" : "filter 0.3s ease-out",
              }}
            />
          </Box>
        </Grid>

        {/* ------------------------------------- personal infos ------------------------------ */}
        <Grid item xs={12} lg={7}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            width="100%"
          >
            <Typography variant="h5" textTransform="uppercase">
              Mes informations :
            </Typography>

            <Box
              display="flex"
              flexWrap="wrap"
              justifyContent="space-between"
              mt={3}
              color="text.secondary"
            >
              {myPersonalInfo &&
                myPersonalInfo.map((e) => (
                  <Stack flex="0 0 50%" key={e?.id}>
                    <Stack
                      direction={{ xs: "column", sm: "row" }}
                      mb={1}
                      columnGap={2}
                    >
                      <Typography
                        textTransform="capitalize"
                        color="text.secondary"
                      >
                        {`${e?.title}: `}
                      </Typography>
                      {e?.title === "email" ? (
                        <a
                          href={"mailto:" + e?.info}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Typography
                            fontWeight={900}
                            color={e?.color || "var(--mainPrimary)"}
                            mr={2}
                            className="animate__animated animate__flipInX"
                            sx={{ textDecoration: "underline" }}
                          >
                            {e?.info}
                          </Typography>
                        </a>
                      ) : e?.title === "phone" ? (
                        <a
                          href={"tel:" + e?.info.replace(/\s/g, "")}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Typography
                            fontWeight={900}
                            color={e?.color || "var(--mainPrimary)"}
                            mr={2}
                            className="animate__animated animate__flipInX"
                            sx={{ textDecoration: "underline" }}
                          >
                            {e?.info}
                          </Typography>
                        </a>
                      ) : (
                        <Typography
                          fontWeight={900}
                          color={e?.color || "var(--mainPrimary)"}
                          mr={2}
                          className="animate__animated animate__flipInX"
                        >
                          {e?.info}
                        </Typography>
                      )}
                    </Stack>
                  </Stack>
                ))}
            </Box>
          </Box>

          <Box display="flex" justifyContent={{ xs: "center", lg: "left" }}>
            <Link
              href="../../public/index.html"
              download
              color="#ffffff"
              underline="none"
            >
              <Box className="project-btn" color="text.primary" mt={5}>
                <Box className="project-btn-icon">
                  <FiDownload />{" "}
                </Box>
                <Box className="project-btn-text"> Télécharger mon CV </Box>
              </Box>
            </Link>
          </Box>
        </Grid>
      </Grid>

      <Divider sx={{ bgcolor: "gray", width: "50%", mx: "auto", my: 4 }} />

      {/* ------------------------------------- Skills ------------------------------ */}
      <Box mt={6} component="section">
        <Typography variant="h5" textTransform="uppercase" fontWeight={700}>
          Compétences :
        </Typography>

        <Grid
          container
          spacing={2}
          my={4}
          color="text.primary"
          textAlign="center"
          // className="animate__animated animate__zoomIn"
          component={motion.ul}
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="container"
        >
          {skills?.map((skill, i) => (
            <Grid
              xs={6}
              sm={4}
              lg={3}
              key={skill?.id}
              sx={{ listStyle: "none", flexGrow: "1 !important" }}
              component={motion.li}
              variants={item}
            >
              <Box
                fontSize={60}
                color={skill?.color || "text.primary"}
                bgcolor="action.hover"
                paddingY="20px"
                borderRadius="10px"
                boxShadow={3}
                borderBottom="2px solid #d2b76f"
                sx={{
                  "&:hover": {
                    // boxShadow: '0 4px 8px 0 rgb(1 141 255 / 42%)',
                    boxShadow: "0 4px 8px 0 rgb(210 183 111 / 42%)",
                    transform: "translateY(-10px)",
                    transition: "all .5s",
                    transitionDelay: 80 * i,
                  },
                }}
              >
                {skill?.icon}
                <Typography
                  variant="body1"
                  fontWeight={700}
                  sx={{ userSelect: "none" }}
                >
                  {skill?.title}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Divider sx={{ bgcolor: "Divider", width: "50%", mx: "auto", my: 4 }} />

      <Box my={6}>
        <Typography
          variant="h5"
          textTransform="uppercase"
          fontWeight={700}
          mb={2}
        >
          Outils :
        </Typography>

        <Box
          display="flex"
          flexDirection="row"
          gap={3}
          flexWrap="wrap"
          textAlign="center"
        >
          {skills2?.map((skill, i) => (
            <Box
              key={skill?.id}
              fontSize={60}
              color={skill?.color || "primary"}
              flex={{ xs: "1 1 auto" }}
            >
              <Box
                sx={{
                  "&:hover": {
                    transform: "scale(1.2)",
                    transition: "all .5s",
                    filter: `drop-shadow(0 4px 8px ${skill?.color || "blue"})`,
                  },
                }}
              >
                {skill?.icon}
              </Box>

              <Typography variant="body1" mb={2}>
                {skill?.title}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      <Divider sx={{ bgcolor: "gray", width: "50%", mx: "auto", my: 4 }} />

      {/* Parcours component ------------------------------------- */}
      <Parcours />
    </Container>
  );
}
