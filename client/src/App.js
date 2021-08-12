import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CssBaseline,
  Container,
  Grid,
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import PenIcon from "@material-ui/icons/Create";
import { PostList } from "./components/PostList";
import { AddPostForm } from "./components/AddPostForm.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  container: {
    marginTop: theme.spacing(3),
  },
}));
const App = () => {
  const [open, setOpen] = useState(false);
  const handleOpen =()=>{
    setOpen(true);
  }
  const headleClose= () =>{
    setOpen(false);
  }
  const classes = useStyles
  ();
  return (
    <>
      <CssBaseline>
        <Container maxWidth="lg">
          <AppBar position="static" color="inherit" elevation={0}>
            <Toolbar>
              <IconButton
                edge="start"
                className={classes.container}
                color="inherit"
              />
              <Typography
                variant="h5"
                color="secondary"
                className={classes.title}
              >
                <a href="http:loocalhost:3000/posts">Blogger</a>
              </Typography>
              <Button
                color="primary"
                variant="outlined"
                startIcon={<PenIcon />}
              >
                New Post
              </Button>
            </Toolbar>
          </AppBar>
          <Grid container calssName={classes.container}>
            <Grid item xs={12}>
              <Router>
                <Switch>
                  <Route exact path="/posts" component={PostList}/>
                </Switch>
                <Redirect from="/" to="/posts"/>
              </Router>
            </Grid>
          </Grid>
        </Container>
        <AddPostForm open={open} headleClose={handleClose}>

        </AddPostForm>
      </CssBaseline>
    </>
  );
};

export default App;
