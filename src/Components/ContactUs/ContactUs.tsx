import "./ContactUs.css";
import {Button, ButtonGroup, Checkbox, FormControlLabel, makeStyles, TextField, Typography} from "@material-ui/core";
import {MailOutline,Send,Cancel} from "@material-ui/icons";

function ContactUs(): JSX.Element {

    const createClasses = makeStyles( {
        textBox: {margin:"5px 0", width: 400},
        headline: {fontSize: 30}
    });

    const classes = createClasses();

    return (
        <div className="ContactUs Box">

		    <Typography className={classes.headline}> <MailOutline/> Contact Us</Typography>

            <TextField label="Name" variant="outlined" className={classes.textBox} />
            <br />

            <TextField label="Email" variant="outlined"  className={classes.textBox}  />
            <br />

            <TextField label="Message" variant="outlined"  className={classes.textBox}  />
            <br />

            <FormControlLabel control={<Checkbox/>} label="Send me updates via email"/>
            <br/>

            <ButtonGroup variant="contained" fullWidth>
            <Button color="primary" startIcon={<Send/>}>Send</Button>
            <Button color="secondary" startIcon={<Cancel/>}>Cancel</Button>
            </ButtonGroup>
        </div>
    );
}

export default ContactUs;
