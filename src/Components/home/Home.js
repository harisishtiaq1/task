import { Box, Container, Grid, Paper, Stack, Toolbar, Typography } from "@mui/material";
import React from "react";
import apple from "../../imgs/Vector (1).png";
import playstore from "../../imgs/playstore.jpg";
import backgroundImg from "../../imgs/background.png";
import homeImg from "../../imgs/Screenshot 2023-06-12 at 6.31 1.png";

const Home = ({ homeRef }) => {
  return (
    <div ref={homeRef}>
      <Toolbar />

      <Container>
        <Grid sx={{ mt: "20px" }} container spacing={4}>
          <Grid item xs={12} sm={7}>
            <Typography
              variant="h1"
              sx={{
                fontWeight: "600",
                textAlign: "initial",
                fontSize: { xs: "60px", md: "79px" },
              }}
            >
              Easy way to become a Pro video App
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{ color: "#ccc", textAlign: "initial", marginTop: "36px" }}
            >
              Add watermarks to your videos online. Add logos, text, photo, and
              more.
            </Typography>
            <Typography
              variant="p"
              component="div"
              sx={{
                color: "black",
                marginTop: "16px",
                textAlign: "initial",
                marginBottom: "16px",
              }}
            >
              Download now
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={4}>
                <Paper
                  sx={{
                    width: "150px",
                    height: "40px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    mt: 3,
                  }}
                >
                  <Box width={30} height={30} component="img" src={apple} />
                  <Stack>
                    <Typography sx={{ fontWeight: "bold", fontSize: "12px" }}>
                      Download on the
                    </Typography>
                    <Typography
                      sx={{ fontWeight: "bold", textAlign: "center" }}
                    >
                      App Store
                    </Typography>
                  </Stack>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
              <Paper
                      sx={{
                        width: "150px",
                        height: "40px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        mt: 3,
                        ml: 2,
                      }}
                    >
                      <Box
                        width={30}
                        height={30}
                        component="img"
                        src={playstore}
                      />
                      <Stack>
                        <Typography
                          sx={{ fontWeight: "bold", fontSize: "12px" }}
                        >
                          GET it on
                        </Typography>
                        <Typography
                          sx={{ fontWeight: "bold", textAlign: "center" }}
                        >
                          Google Play
                        </Typography>
                      </Stack>
                    </Paper>
              </Grid>
            </Grid>
          </Grid>

          <Grid
            item
            xs={12}
            sx={{ display: { xs: "none", sm: "unset" } }}
            sm={5}
          >
            <Box
              sx={{
                background: `url(${backgroundImg})`,
                height: "85vh",
                width: { md: "67%", xs: "99%" },
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
                position: "relative",
                display: "flex",
                alignItems: "center",
                margin: "auto",
              }}
            >
              <Box
                component="img"
                src={homeImg}
                sx={{
                  position: "absolute",
                  left: { xs: "-9px", md: "-57px", sm: "-21px", lg: "-169" },
                  bottom: "160px",
                  width: { xs: "70%", sm: "74%", md: "100%" },
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Home;
