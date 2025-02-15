import React from "react";
import { CircularProgress, LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";

export function CircularWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress
        variant="determinate"
        {...props}
        sx={{ width: "100px", height: "100px" }}
      />
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,

          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="caption" component="div" color="text.white">
          {`${Math.round(props.value)}%`}
        </Typography>
      </Box>
    </Box>
  );
}

export function LinearWithLabel(props) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress
          variant="determinate"
          sx={{ height: "25px", borderRadius: "25px" }}
          {...props}
        />
      </Box>
      <Box
        sx={{
          minWidth: 35,
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Typography variant="body2" color="text.primary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
}
