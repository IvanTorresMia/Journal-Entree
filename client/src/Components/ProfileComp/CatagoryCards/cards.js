import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import grey from "@material-ui/core/colors/grey";
import indigo from "@material-ui/core/colors/indigo";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    padding: 2,
    margin: 10,
    backgroundColor: grey[400],
  },
  media: {
    height: 140,
  },
  Buttons: {
    backgroundColor: indigo[500],
  },
});

const Cards = ({ title, description, tempImage, handleJournalClick }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="contained" className={classes.Buttons}>
          Delete
        </Button>
        <p className="display-con">{title}</p>
        <button className="btn" size="small" color="primary" onClick={handleJournalClick}>
          Journal
        </button>
      </CardActions>
    </Card>
  );
};

export default Cards;

{
  /* <div className="cards col">
<button className="rounded delete-catagory">x</button>
<h3>{title}</h3>
<p>{description}</p>
</div> */
}
