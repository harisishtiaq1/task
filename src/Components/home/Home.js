import {  Box, Container, Grid, Toolbar, Typography } from '@mui/material'
import React from 'react'
import apple from "../../imgs/Vector (1).png"
import playstore from "../../imgs/playstore.jpg"
import backgroundImg from "../../imgs/background.png"
import homeImg from "../../imgs/Screenshot 2023-06-12 at 6.31 1.png"

const Home = ({homeRef}) => {
    
  return (
    <div ref={homeRef}>
      <Toolbar/>

      <Container>
        <Grid sx={{mt:'20px'}} container spacing={4}>
            <Grid item xs={12} sm={7}>
                <Typography variant="h1" sx={{fontWeight:'600',textAlign:'initial',fontSize:{xs:'60px',md:'79px'}}}>Easy way to become a Pro video App</Typography>
                <Typography variant="p" component="div" sx={{color:'#ccc',textAlign:'initial',marginTop:'36px'}}>Add watermarks to your videos online. Add logos, text, photo, and more.</Typography>
                <Typography variant='p' component="div" sx={{color:'black',marginTop:'16px',textAlign:'initial',marginBottom:'16px'}}>Download now</Typography>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{border:"1px solid #ccc",borderRadius:'7px',margin:'auto',width:{xs:'58%',sm:'80%'} }}>
                            <Box sx={{display:'flex',justifyContent:'space-between',padding:{xs:'11px',md:'9px 11px'}}}>
                                <Box component="img" src={playstore} sx={{alignSelf:'start',width:{xs:'22%',md:'38%'},mt:'6px',mr:'20px'}}/>
                                <Typography sx={{fontSize:'10px',lineHeight:'1.3'}}>Get it on<Box sx={{fontSize:'14px',fontWeight:'600'}}> Google Play</Box></Typography>
                            </Box> 
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <Box sx={{border:"1px solid #ccc",borderRadius:'7px',width:{xs:'58%',sm:'80%'},margin:'auto' }}>
                            <Box sx={{display:'flex',justifyContent:'space-between',padding: "11px"}}>
                                <Box component="img" src={apple} sx={{alignSelf:'start',mt:'0px',mr:'20px',width:{sm:'unset',md:'27%'}}}/>
                                <Typography sx={{fontSize:'11px',lineHeight:{xs:'1.3'},}}>Download on the <Box sx={{fontSize:'14px',fontWeight:'600'}}> App Store</Box></Typography>
                            </Box> 
                        </Box>
                    </Grid>
                </Grid>
            </Grid>
            
            <Grid item xs={12} sx={{display:{xs:'none',sm:'unset'}}} sm={5}>
                <Box sx={{background: `url(${backgroundImg})`,height:'85vh',width:{md:'67%',xs:"99%"},backgroundSize:'100% 100%',backgroundRepeat:'no-repeat',position:'relative',display:'flex',alignItems:'center',margin:'auto'}}>
                    <Box component='img' src={homeImg} sx={{position:'absolute',left:{xs:'-9px',md:'-57px',sm:'-21px',lg:'-169'},bottom:'160px',width:{xs:'70%',sm:'74%',md:'100%'}}}/>
                </Box>
            </Grid>
        </Grid>
        </Container>
    </div>
  )
}

export default Home



