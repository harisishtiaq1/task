import { Box, Container, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import React, { useState } from "react";
import Question from "./Question";

function FrequentlyAskedQuestions({faqRef}) {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <Box sx={{ mt: 2 }} ref={faqRef}>
      <Toolbar/>
      <Typography
        variant="h5"
        component="h5"
        sx={{ textAlign: "center", fontWeight: "bold" }}
      >
        Frequently asked questions
      </Typography>
      <Container>
        <Grid container sx={{ mt: 2 }}>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                width: "1200px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "21px",
                  lineHeight: "31.5px",
                }}
              >
                Question number 01 goes here?
              </Typography>
              <IconButton onClick={handleToggleVisibility}>
                {isVisible ? (
                  <KeyboardArrowUpIcon />
                ) : (
                  <KeyboardArrowDownIcon />
                )}
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {isVisible && <Question />}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                width: "1200px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "21px",
                  lineHeight: "31.5px",
                }}
              >
                Question number 02 goes here?
              </Typography>
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                width: "1200px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "21px",
                  lineHeight: "31.5px",
                }}
              >
                Question number 03 goes here?
              </Typography>
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                width: "1200px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "21px",
                  lineHeight: "31.5px",
                }}
              >
                Question number 04 goes here?
              </Typography>
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                border: "1px solid lightgrey",
                padding: 1,
                borderRadius: "5px",
                width: "1200px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Typography
                sx={{
                  fontWeight: "600",
                  fontSize: "21px",
                  lineHeight: "31.5px",
                }}
              >
                Question number 05 goes here?
              </Typography>
              <IconButton>
                <KeyboardArrowDownIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default FrequentlyAskedQuestions;
