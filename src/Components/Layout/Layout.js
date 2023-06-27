import React from "react";
import ContactInformation from "../Footer/ContactInformation/ContactInformation";
import {
  Container,
  Divider,
  Grid,
  ThemeProvider,
  Toolbar,
  createTheme,
} from "@mui/material";
import RequestAQuote from "../Footer/Request a Quote/RequestAQuote";
import AboutUs from "../Footer/AboutUs/AboutUs";
import Company from "../Footer/Company/Company";
import ContactUs from "../Footer/ContactUs/ContactUs";
import NewsLetter from "../Footer/NewsLetter/NewsLetter";
import DownloadApp from "../DownloadApp/DownloadApp";
import FrequentlyAskedQuestions from "../FrequentlyAskedQuestions/FrequentlyAskedQuestions";
import PricePlans from "../PricePlans/PricePlans";
import YouCanDo from "../WhatYouCanDo/YouCanDo";

function Layout({pricingRef,faqRef,contactRef}) {
  const theme = createTheme({
    typography: {
      fontFamily: "Poppins, sans-serif",
      fontWeightBold: "600",
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <YouCanDo />
      <PricePlans pricingRef={pricingRef} />
      <FrequentlyAskedQuestions faqRef={faqRef} />
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <DownloadApp />
        </Grid>
      </Grid>
      <Container>
        <Grid container spacing={3} sx={{ mt: 3 }}>
          <Grid item xs={12} md={6}>
            <ContactInformation contactRef={contactRef} />
          </Grid>
          <Grid item xs={12} md={6}>
            <RequestAQuote />
          </Grid>
        </Grid>
        <Divider variant="middle" sx={{ mt: 6, border: "1px solid #D9D9D9" }} />
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <AboutUs />
          </Grid>
          <Grid item xs={12} md={3}>
            <Company />
          </Grid>
          <Grid item xs={12} md={3}>
            <ContactUs />
          </Grid>
          <Grid item xs={12} md={3}>
            <NewsLetter />
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
    // <ThemeProvider theme={theme}>
    // </ThemeProvider>
  );
}

export default Layout;
