import {React} from 'react';
import { Typography, AppBar, Card,CardActions, Button, CardContent,CardMedia,CssBaseline,Grid, Toolbar, Container } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import useStyles from './styles';



const cards = [1,2,3,4,5,6,7,8,9]   

const App = () =>  {
    const classes = useStyles();
 
 return (
    <>
    <CssBaseline />
        <AppBar position="relative">
            <Toolbar>
                <PhotoCamera/>
                <Typography variant="h6">
                    Photo Album
                </Typography>
            </Toolbar>
        </AppBar>
 

        <main>
            <div>
                <Container maxWidth="sm" style={{marginTop:'100px'}}>
                        <Typography variant  = "h2" align="center" color="textprimary" gutterBottom>
                            Photo Album
                        </Typography>
                        <Typography variant="h5" align="centre" color="textsecondary" paragraph>
                            This is a photo album and this para was intended to be as long as possible
                        </Typography>
                        <div>
                            <Grid container spacing={2} justify="center">
                           
                                <Grid item>
                                    <Button variant = "contained" color ="primary">
                                        See my photos!
                                    </Button>
                                </Grid>

                                <Grid item>
                                    <Button variant = "outlined" color ="primary">
                                        Secondary
                                    </Button>
                                </Grid>

                            </Grid>
                        </div>
                </Container>
            </div>
         <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card) => (
                        <Grid item key={card} xs={12} sm={6} md={4}>
                            <Card className={classes.card}>
                                <CardMedia
                                    className={classes.cardMedia}
                                    image="https://source.unsplash.com/random"
                                    title="Image Title"
                                />
                                <CardContent className={classes.cardContent}>
                                    <Typography gutterBottom variant="h5">
                                        Heading
                                    </Typography>
                                    <Typography>
                                        this is a media section, you can use this as a decription.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                <Button size="small" color="primary">View</Button>
                                <Button size="small" color="secondary">Edit</Button>
                                </CardActions>
                            </Card>
                          </Grid>    
                ))}
                
             </Grid>
         </Container>          
        </main> 
        <footer className={classes.footer}>
            <Typography variant='h6' align='center' gutterBottom>
                Footer
            </Typography>
            <Typography variant='subtitle1' align='center' color='textSecondary'>
                Something for the footer!
            </Typography>

        </footer>
    </>
 );
}

export default App;
