import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import LanguageIcon from '@material-ui/icons/LanguageOutlined';
import LightIcon from '@material-ui/icons/BrightnessLowOutlined'
import LightOutIcon from '@material-ui/icons/Brightness2Outlined'
import withDynamic from '../../Data/withDynamic';

const useStyles = makeStyles(theme => ({
    appbar: {
        backgroundColor: theme.palette.background.default,
        borderRadius: '1rem'
    },
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

function Topbar(props) {
  const classes = useStyles();

  const name = props.ApplicationReducer.name || 'Pronto'

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default" className={classes.appbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {name}
          </Typography>
          <IconButton color="inherit">
              <LanguageIcon />
          </IconButton>
          <IconButton color="inherit">
              <LightIcon />
          </IconButton>
          <IconButton color="inherit">
              <LightOutIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withDynamic(Topbar).injectReducer('ApplicationReducer').build()