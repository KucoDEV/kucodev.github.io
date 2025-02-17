import React, { Fragment } from "react";
import { Grid, Typography } from "@mui/material";

import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineDot,
  TimelineContent,
} from "@mui/lab";

import "animate.css";
import { timelineData } from "./data";

export default function Experience() {
  return (
    <Fragment>
      <Typography
        variant="h5"
        textTransform="uppercase"
        fontWeight={700}
        mb={2}
      >
        Parcours :
      </Typography>

      <Timeline
        position="right"
        color="text.white"
        sx={{ px: 0, overflow: "hidden" }}
      >
        <Grid container alignItems="end">
          <Grid item xs={12} md={6}>
            {timelineData.map(
              (item, index) =>
                index < timelineData?.length / 2 && (
                  <TimelineItem
                    key={index}
                    sx={{
                      "&::before": { content: "none" },
                    }}
                  >
                    <TimelineSeparator>
                      <TimelineDot color="primary">{item.icon}</TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography
                        variant="body1"
                        component="span"
                        bgcolor="divider"
                        py={0.3}
                        px={2}
                        borderRadius="20px"
                      >
                        {item.date}
                      </Typography>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="h6">{item.organization}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                )
            )}
          </Grid>

          <Grid item xs={12} md={6}>
            {timelineData.map(
              (item, index) =>
                index >= timelineData?.length / 2 && (
                  <TimelineItem
                    key={index}
                    sx={{
                      "&::before": { content: "none" },
                    }}
                  >
                    <TimelineSeparator>
                      <TimelineDot color="primary">{item.icon}</TimelineDot>
                      <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent sx={{ py: "12px", px: 2 }}>
                      <Typography
                        variant="body1"
                        component="span"
                        bgcolor="divider"
                        py={0.3}
                        px={2}
                        borderRadius="20px"
                      >
                        {item.date}
                      </Typography>
                      <Typography variant="h6">{item.title}</Typography>
                      <Typography variant="h6">{item.organization}</Typography>
                    </TimelineContent>
                  </TimelineItem>
                )
            )}
          </Grid>
        </Grid>
      </Timeline>
    </Fragment>
  );
}
