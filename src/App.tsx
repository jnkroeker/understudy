import { useState } from 'react';
import { createTheme, makeStyles } from '@material-ui/core/styles';
import { CssBaseline, ThemeProvider } from '@material-ui/core';
import clsx from 'clsx';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Content } from './components/Content';
import { VideoPlayer } from './components/video-player';
import { QueryContainer } from './components/query-container'
import { D3Container } from './components/d3-container';
import { closestSquaredDistanceXY } from 'ol/extent';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth 
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: 0
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  }
}));

function App() {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [darkMode, setDarkMode] = useState(true);

  const handleDrawerToggle = () => {
    setOpen(!open)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const theme = createTheme({
    palette: {
      type: darkMode ? "dark" : "light"
    }
  });

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className={classes.root}>
        <CssBaseline/>
        <Header 
          handleDrawerToggle={handleDrawerToggle}
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
        />
        <Sidebar handleDrawerClose={handleDrawerClose} open={open}/>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: open
          })}
        >
          <div className={classes.drawerHeader}/>
          <Content/>
        </main>
      </div>
    </ThemeProvider>
  )
  // return (
  //   <div className="App">
  //     {/* <header className="App-header">
  //     </header> */}
  //     <Grid container spacing={2}>
  //       <body className="vh-100">
  //         <Grid item xs={8}>
  //           <VideoPlayer/>
  //         </Grid>
  //         <Grid item xs={4}>
  //           <QueryContainer/>
  //         </Grid>
  //         <Grid item xs={8}>
  //           <D3Container/>
  //         </Grid>
  //       </body>
  //     </Grid>
  //   </div>
  // );
}

export default App;
