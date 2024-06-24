
import React, { useEffect } from 'react'
import { Header } from './Header'
import { Box, Grid, Typography } from '@material-ui/core'
import { Button, Card, CardActions, CardContent, CardMedia, Divider } from '@mui/material'
import product1 from "../images/service1.png"
import product4 from "../images/service4.png"
import service from "../images/service10.png"
import caseStudy from "../assets/studycase1.png";
import caseStudy2 from "../assets/studycase2.png";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Footer } from './Footer'

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <>
            <Header />
            <Box style={{ marginTop: '50px', display: 'grid', justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='h3' style={{ color: 'purple' }}>Our Services</Typography>    
                <Divider style={{backgroundColor:'purple',height:'2px'}} />                      
            </Box>
            <Grid container spacing={0}>
                <Grid item lg={12}  data-aos="zoom-in">

                    <Box style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Grid lg={4} >
                            <Card sx={{ maxWidth: 450 }} style={{cursor:'pointer'}} >
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={product1}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div" >
                                    Mobile App Development
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">More Details</Button>
                                </CardActions>
                            </Card>

                        </Grid>

                        <Grid lg={4}>
                            <Card sx={{ maxWidth: 450 }} style={{cursor:'pointer'}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={caseStudy2}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Web Design & Development
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">More Details</Button>
                                </CardActions>
                            </Card>

                        </Grid>

                    </Box>
                </Grid>

                <Grid item lg={12} data-aos="zoom-in">
                    <Box style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Grid lg={4}>
                            <Card sx={{ maxWidth: 450 }} style={{cursor:'pointer'}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={product4}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Software Testing Service
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Empowering businesses through cutting-edge IT solutions. Our expertise spans web-development, Mobile application development, digital marketing.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">More Details</Button>
                                </CardActions>
                            </Card>
                        </Grid>

                        <Grid lg={4}>
                            <Card sx={{ maxWidth: 450 }} style={{cursor:'pointer'}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={service}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    IT Service
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Empowering businesses through cutting-edge IT solutions. Our expertise spans web-development, Mobile application development, digital marketing.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">More Details</Button>
                                </CardActions>
                            </Card>

                        </Grid>

                    </Box>
                </Grid>

                <Grid item lg={12} data-aos="zoom-in" >
                    <Box style={{ marginTop: '50px', display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <Grid lg={4}>
                            <Card sx={{ maxWidth: 450 }} style={{cursor:'pointer'}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={caseStudy}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Digital Marketing
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Empowering businesses through cutting-edge IT solutions. Our expertise spans web-development, Mobile application development, digital marketing.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">More Details</Button>
                                </CardActions>
                            </Card>

                        </Grid>

                        <Grid lg={4}>
                            <Card sx={{ maxWidth: 450 }} style={{cursor:'pointer'}}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={product1}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                    Our Products
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                    Empowering businesses through cutting-edge IT solutions. Our expertise spans web-development, Mobile application development, digital marketing.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">More Details</Button>
                                </CardActions>
                            </Card>

                        </Grid>

                    </Box>
                </Grid>
               
            </Grid>
            <Box style={{ marginTop: '50px' }}>
                <Footer />

            </Box>
        </>
    )
}

export default Services