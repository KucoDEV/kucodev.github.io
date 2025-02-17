import React from "react";
import { Container, Grid, Link, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";

import { FaMap, FaEnvelopeOpen, FaPhoneAlt } from "react-icons/fa";
import {
  FaLinkedinIn,
  FaWhatsapp,
  FaGithub,
} from "react-icons/fa";
import "../Styles/Contact.css";
import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <Container sx={{ my: { xs: "12%", lg: "70px" } }}>
      <Stack textTransform="uppercase" mb={6}>
        <Typography
          fontWeight="900"
          fontSize={{ xs: "25px", lg: "60px" }}
          textAlign={{ xs: "left", lg: "center" }}
        >
          ME <span style={{ color: "var(--mainPrimary)" }}>CONTACTER</span>
        </Typography>
      </Stack>

      <Grid container>
        <Grid item lg={4}>
          <Stack
            textTransform="capitalize"
            height="100%"
            direction="column"
            justifyContent="space-between"
          >
            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={2}
              mb={4}
            >
              <Stack fontSize={40} color="text.disabled">
                <FaMap />
              </Stack>

              <Stack fontSize={40} textAlign="left">
                <Typography> Localisation </Typography>
                <Typography> Clermont-Ferrand, France </Typography>
              </Stack>
            </Stack>

            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={2}
              mb={4}
            >
              <Stack fontSize={30} color="text.disabled">
                <FaEnvelopeOpen />
              </Stack>

              <Stack fontSize={30} textAlign="left">
                <Typography> Email </Typography>

                <Link
                  href="mailto:contact@matheo-pichotmoise.fr"
                  underline="hover"
                  sx={{ color: "text.praimary", textTransform: "lowercase" }}
                  fontSize={15}
                >
                  contact@matheo-pichotmoise.fr
                </Link>
              </Stack>
            </Stack>

            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={2}
              mb={4}
            >
              <Stack fontSize={40} color="text.disabled">
                <FaPhoneAlt />
              </Stack>

              <Stack textAlign="left">
                <Typography> Appelez-moi </Typography>
                <Link
                  href="tel:+33769724327"
                  underline="hover"
                  sx={{ color: "text.praimary" }}
                >
                  +33 7 69 72 43 27
                </Link>
              </Stack>
            </Stack>

            <Stack
              display="flex"
              flexDirection="row"
              alignItems="center"
              gap={2}
              mb={3}
              justifyContent={{ xs: "center", lg: "left" }}
              className="animate__animated animate__zoomIn"
            >
              <Link
                href="https://www.linkedin.com/in/math%C3%A9o-pichot-mo%C3%AFse-b538222a0/"
                target="_blank"
                rel="noopener"
              >
                <Box
                  className="social-icons"
                  bgcolor="action.disabledBackground"
                >
                  <FaLinkedinIn />
                </Box>
              </Link>

              <Link
                href="https://wa.me/+33769724327"
                target="_blank"
                rel="noopener"
              >
                <Box
                  className="social-icons"
                  bgcolor="action.disabledBackground"
                >
                  <FaWhatsapp />
                </Box>
              </Link>

              <Link
                href="https://github.com/KucoDEV"
                target="_blank"
                rel="noopener"
              >
                <Box
                  className="social-icons"
                  bgcolor="action.disabledBackground"
                >
                  <FaGithub />
                </Box>
              </Link>
            </Stack>
          </Stack>
        </Grid>

        <Grid item lg={7}>
          <ContactForm />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Contact;
