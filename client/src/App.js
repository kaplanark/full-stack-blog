import React from "react";
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
  ThemeProvider,
} from "@material-ui/core";
import PenIcon from "@material-ui/icons/Create";
const useStyles = makeStyles( theme => ({
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
  const classes = useStyles();
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
              <Typography variant="h6" color="secondary" ca
              className={classes.title}>
                <a href="http:loocalhost:3000/posts">Blogger</a>
              </Typography>
              <Button color="primary" variant="outlined" startIcon={<PenIcon/>}>
                New Blog
              </Button>
            </Toolbar>
          </AppBar>
        </Container>
      </CssBaseline>
    </>
  );
};

export default App;
