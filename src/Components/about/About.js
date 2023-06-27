import { Box, Button, Container, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import backimg from '../../imgs/element-2.png'
import aboutImg from "../../imgs/aboutImg.png"

const About = ({aboutRef}) => {
  return (
    <>
    <Box ref={aboutRef}>
        <Toolbar/>
        {/* <Container> */}
      <Grid container >
        <Grid item xs={12} sm={6} sx={{textAlign:{xs:'center'}}}>
          <Container>
            <Box sx={{backgroundImage:`url(${backimg})`,backgroundRepeat:'no-repeat',backgroundSize:{md:'96% 75%',xs:'100%',lg:'83% 75%',sm:'0'},backgroundPositionY:{lg:'17rem',md:'17rem',xs:'11rem'},backgroundPositionX:{lg:'4rem',md:'1rem'}}}>
              <Box component='img' src={aboutImg} sx={{width:{xs:'70%',sm:'unset'},position:'relative',bottom:{lg:'18px'},left:{lg:'31px'}}} />
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6} sx={{textAlign:{xs:'center',sm:'initial',display:'flex',alignItems:'center'}}}>
            <Container>
                <Typography variant='p' component='div' sx={{color:'#2AAFF6'}}>About us</Typography>
                <Typography variant='h1' sx={{fontSize:'40px',fontWeight:'700',mt:'14px',mb:'14px'}}>Add Watermark Your Photos, or Videos, Free</Typography>
                <Typography variant='p' component='div' sx={{color:'#ADAFB5',lineHeight:'30px',fontSize:'20px'}}>Simple video editing software to add watermarks
                to your videos online. No need to install an app. Simply upload your video, upload your watermark photo, and place it anywhere on the video frame! You don't need to create an account but you can try our Pro
                </Typography>
                <Button sx={{backgroundImage:"linear-gradient(180deg, #00CFF4 0%, #598DFA 100%)",color:'white',fontSize:'12px',p:"14px 24px",mt:'14px',width:{xs:"95%",sm:'unset'}}}>Download</Button>
            </Container>
        </Grid>

      </Grid>
      {/* </Container> */}
    </Box>
    </>
  )
}

export default About
