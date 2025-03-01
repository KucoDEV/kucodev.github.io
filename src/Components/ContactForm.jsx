import React, { Fragment, useRef, useState } from "react";
import {
  Box,
  Grid,
  Paper,
  Slide,
  Snackbar,
  TextField,
} from "@mui/material";

import { IoPaperPlane } from "react-icons/io5";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const form = useRef();

  const [snackbarState, setSnackbarState] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lp3qp5q",
        "template_dc270ak",
        form.current,
        "Q4VgSuu5zR0FYlGeR"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setSnackbarState(true);
          }
        },
        (error) => {
          console.log();
        }
      );

    e.target.reset();
  };

  return (
    <Fragment>
      <Box
        sx={{ display: "flex", flexDirection: "column" }}
        className="animate__animated animate__pulse"
      >
        <Box
          component="form"
          ref={form}
          noValidate
          onSubmit={sendEmail}
          ml={{ lg: 8 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                autoComplete="given-name"
                name="user_name"
                fullWidth
                id="fullName"
                label="Prénom & Nom"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="email"
                label="Email"
                name="user_email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField fullWidth id="subject" label="Sujet" name="subject" />
            </Grid>
            <Grid item xs={12}>
              <TextField
                className="contact-input"
                fullWidth
                name="message"
                label="Message"
                type="text"
                id="message"
                multiline
                rows={4}
              />
            </Grid>
          </Grid>

          <Box
            className="project-btn"
            component="button"
            my={3}
            mx="auto"
            color="text.primary"
            type="submit"
          >
            <Box className="project-btn-icon">
              <IoPaperPlane />
            </Box>
            <Box className="project-btn-text"> ENVOYER</Box>
          </Box>
        </Box>
      </Box>

      <Snackbar
        open={snackbarState}
        onClose={() => {
          setSnackbarState(false);
        }}
        autoHideDuration={6000}
        TransitionComponent={Slide}
        sx={{ bottom: { xs: 65, md: "24px" } }}
        children={
          <Paper
            elevation={4}
            sx={{
              bgcolor: "text.disabled",
              color: "white",
              p: 1.5,
              mx: "auto",
              display: "flex",
              gap: 1,
            }}
          >
            <TaskAltIcon />
            <span>Le message a été envoyé.</span>
          </Paper>
        }
      />
    </Fragment>
  );
}
