import React from "react";
import { Avatar, Card, CardMedia, Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import { useNavigate } from "react-router-dom";
import { startLink } from "./data";

import myImage from "../Images/01.png";
import myImage2 from "../Images/02.png";
import myImage3 from "../Images/03.png";
import "../Styles/Home.css";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import useProgressiveImg from "./useProgressiveImg";

export const Home = () => {
  const navigate = useNavigate();

  const [src, { blur }] = useProgressiveImg(myImage3, myImage);

  return (
    <Box minHeight="710px" height="100vh" overflow="hidden">
      <Box
        className="home-bg-img"
        minHeight="710px"
        height="100vh"
        bgcolor="text.disabled"
        display={{ xs: "none", md: "block" }}
      ></Box>

      <Container maxWidth="xs">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          position="absolute"
          top={0}
          left={0}
          height="100%"
          minHeight="710px"
        >
          <Grid
            container
            height={{ xs: "auto", md: "100%" }}
            display="flex"
            alignItems="center"
            justifyContent={{ xs: "center", md: "left" }}
            p={{ xs: 2, md: 6 }}
          >
            <Grid item md={4} padding={0} height="100%">
              <Box display={{ xs: "none", md: "flex" }} height="100%">
                <Card sx={{ borderRadius: "30px" }}>
                  <CardMedia
                    component="img"
                    image={src}
                    alt="Mathéo PICHOT-MOÏSE Pic"
                    height="100%"
                    width="100%"
                    style={{
                      filter: blur ? "blur(20px)" : "none",
                      transition: blur ? "none" : "filter 0.3s ease-out",
                    }}
                  />
                </Card>
              </Box>

              <Box display={{ xs: "flex", md: "none" }}>
                <Avatar
                  alt="Mathéo PICHOT-MOÏSE Image"
                  src={myImage2}
                  sx={{
                    width: "100%",
                    height: "300px",
                    border: "4px solid #252525",
                    objectFit: "top",
                    bgcolor: "black",
                  }}
                />
              </Box>
            </Grid>

            <Grid item md={8} mt={{ xs: 4, md: 0 }}>
              <Box>
                <Typography
                  fontSize={{ xs: "25px", md: "50px" }}
                  fontWeight="bold"
                  color="text.disabled"
                  textAlign="center"
                >
                  Mathéo PICHOT-MOÏSE
                </Typography>

                <Typography
                  className="animate-charcter"
                  fontSize={{ xs: "21px", md: "40px" }}
                  fontWeight="bold"
                  textAlign="center"
                  my={1}
                >
                  Développeur Junior
                </Typography>

                <Typography
                  fontSize={{ xs: "15px", md: "20px" }}
                  color="text.secondary"
                  textAlign="justify"
                  px={{ xs: 2, md: 10 }}
                  className="animate__animated animate__fadeIn"
                >
                  Je suis Mathéo PICHOT-MOÏSE étudiant en BUT Informatique à l’IUT de Clermont-Ferrand. Grand joueur d’échecs, ce jeu me permet de développer ma capacité à réfléchir de manière logique, à anticiper et à rester concentré pendant de longues périodes de temps. Je suis aussi quelqu’un d’autonome notamment grâce à mes expériences professionnelles pendant des travaux saisonniers, où j’ai appris à m’adapter rapidement aux tâches demandées.
                </Typography>

                <Box
                  className="project-btn"
                  component="button"
                  mt={5}
                  mx="auto"
                  color="text.primary"
                  boxShadow={2}
                  onClick={() => navigate(`${startLink}/about`)}
                >
                  <Box className="project-btn-icon">
                    <ArrowForwardIosIcon />
                  </Box>
                  <Box className="project-btn-text"> À PROPOS DE MOI </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Home;
