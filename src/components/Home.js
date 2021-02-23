import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { AuthButtonStyled } from "../styles";
import { useState } from "react";
// components
import SuccessAlert from "./SuccessAlert";
// Styling 
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Home = () => {
    const user = useSelector(state => state.authReducer.user);
    const classes = useStyles();
    const [open, setOpen] = useState(false);
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpen(false);
    };

    return (
        <>
        {user &&
        <>
        {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}> */}
        <div className={classes.root}>
          <Alert onClose={handleClose} severity="success">
            You are signed in!
          </Alert>
        </div>
        {/* </Snackbar> */}
        {/* <div class="alert alert-warning alert-dismissible fade show" role="alert">
            <strong>Holy guacamole!</strong> You should check in on some of those fields below.
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div> */}
        </>
        }
        <div style={{marginTop: "10%", marginLeft: "40%"}}>
            <Link to="/garbage">
            <AuthButtonStyled>Garbage</AuthButtonStyled>
            </Link>
            {user &&
            <Link to="/treasures">
            <AuthButtonStyled>Treasures</AuthButtonStyled>
            </Link>
            }
        </div>
        </>
    );
};

export default Home;