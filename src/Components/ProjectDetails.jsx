import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardMedia,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Link,
  Stack,
} from "@mui/material";
import { Zoom, Typography } from "@mui/material";
import { Box } from "@mui/system";

import CloseIcon from "@mui/icons-material/Close";
import VisibilityIcon from "@mui/icons-material/Visibility";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function ProjectDetails({ open, setOpen, EProjectDetails }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Zoom}
      keepMounted
      disableScrollLock
      onClose={handleClose}
      aria-describedby="details-dialog-slide"
      sx={{ transition: "all .5s cubic-bezier(0.4, 0, 0.2, 1) 0ms" }}
    >
      <Box position="absolute" right={10} top={10}>
        <IconButton onClick={handleClose}>
          {" "}
          <CloseIcon />{" "}
        </IconButton>
      </Box>

      <DialogTitle
        color="text.disabled"
        textTransform="capitalize"
        fontSize={25}
        textAlign="center"
      >
        {EProjectDetails.title}
      </DialogTitle>

      <DialogContent>
        <Typography variant="body1" color="text.secondary">
          {" "}
          Langage & Framework:{" "}
        </Typography>

        <Typography variant="h6">
          {EProjectDetails.Language &&
            EProjectDetails.Language.length > 1 &&
            EProjectDetails.Language.join(", ")}
        </Typography>

        <Card sx={{ my: 3, overflow: "hidden", height: "300px" }}>
          <CardActionArea
            className="portfolio-card"
            sx={{ position: "relative" }}
          >
            <CardMedia
              component="img"
              image={EProjectDetails.img}
              alt={EProjectDetails.title}
              width="100%"
              height="100%"
            />
          </CardActionArea>
        </Card>

        <Typography variant="body1" color="text.secondary">
          {" "}
          Description:{" "}
        </Typography>
        <Typography variant="body1"> {EProjectDetails.description} </Typography>

        <Stack
          direction="row"
          justifyContent="space-around"
          marginTop={2}
          gap={2}
          flexWrap="wrap"
        >
          <Link underline="none" href={EProjectDetails.link} target="_blank">
            <Button size="lg" variant="outlined" endIcon={<VisibilityIcon />}>
              Demo{" "}
            </Button>
          </Link>

          <Link
            underline="none"
            href={EProjectDetails.githubLink}
            target="_blank"
          >
            <Button
              size="lg"
              color="primary"
              variant="outlined"
              endIcon={<GitHubIcon />}
            >
              {" "}
              Github{" "}
            </Button>
          </Link>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
