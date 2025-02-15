import React, { useState } from "react";
import {
  Box,
  Card,
  CardMedia,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";

import "../Styles/Portfolio.css";
import "animate.css";

import { myProjects } from "./data";
import ProjectDetails from "./ProjectDetails";
import { motion } from "framer-motion";

export default function Projects() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.2,
        duration: 0.5,
      },
    },
  };

  const item = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const [open, setOpen] = useState(false);
  const [EProjectDetails, setProjectDetails] = useState({});

  const [repos, setRepos] = useState(myProjects);
  const [filtertype, setFiltertype] = useState("All");

  const handelFilter = (e) => {
    setRepos(
      myProjects?.filter((v) =>
        v?.Language?.includes(e.currentTarget.attributes?.value?.value)
      )
    );
    setFiltertype(e.currentTarget.attributes?.value?.value);
  };

  return (
    <>
      <Container sx={{ my: { xs: "12%", lg: "70px" } }} component="section">
        <Stack textTransform="uppercase" mb={6}>
          <Typography
            fontWeight="900"
            fontSize={{ xs: "25px", lg: "60px" }}
            textAlign="center"
          >
            Mes
            <span style={{ color: "var(--mainPrimary)" }}> Projets</span>
          </Typography>
        </Stack>

        <Stack
          direction="row"
          gap={{ xs: 2, md: 4 }}
          justifyContent="center"
          mt={10}
          mb={4}
        >
          <Typography
            className={`project-type ${
              filtertype === "All" && "project-type-active"
            }`}
            onClick={() => {
              setRepos(myProjects);
              setFiltertype("All");
            }}
          >
            All
          </Typography>

          <Typography
            className={`project-type ${
              filtertype === "HTML" && "project-type-active"
            }`}
            onClick={() => {
              setRepos(
                myProjects.filter(
                  (e) => !e.Language.includes("Javascript", "React")
                )
              );
              setFiltertype("HTML");
            }}
          >
            HTML
          </Typography>

          <Typography
            className={`project-type ${
              filtertype === "Python" && "project-type-active"
            }`}
            value="Python"
            onClick={(e) => handelFilter(e)}
          >
            Python
          </Typography>

          <Typography
            className={`project-type ${
              filtertype === "C" && "project-type-active"
            }`}
            value="C"
            onClick={(e) => handelFilter(e)}
          >
            C
          </Typography>
        </Stack>

        <Grid
          container
          spacing={3}
          component={motion.ul}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {repos &&
            repos.map((e) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={e?.id}
                sx={{ position: "relative", listStyle: "none" }}
                component={motion.li}
                variants={item}
              >
                <Card
                  className="flip-card"
                  component={motion.div}
                  onClick={() => {
                    setOpen(true);
                    setProjectDetails(e);
                  }}
                >
                  <Box className="flip-card-inner">
                    <CardMedia
                      className="flip-card-front"
                      component="img"
                      image={e.img}
                      alt={e?.title}
                      sx={{ objectPosition: "top" }}
                    />

                    <Box className="flip-card-back">
                      <Typography variant="h6" color="white">
                        {" "}
                        {e?.title}{" "}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Container>

      <ProjectDetails
        open={open}
        setOpen={setOpen}
        EProjectDetails={EProjectDetails}
      />
    </>
  );
}
