import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import DeleteOutlined from "@material-ui/icons/DeleteOutlined";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  test: {
    border: (note) => {
      if (note.category == "work") {
        return "1px solid red";
      } else if (note.category == "reminders") {
        return "1px solid green";
      } else if (note.category == "todos") {
        return "1px solid blue";
      } else if (note.category == "money") {
        return "1px solid yellow";
      }
    },
  },
});

export default function NoteCard({ note, handleDelete }) {
  const classes = useStyles(note);

  return (
    <div>
      <Card elevation={1} className={classes.test}>
        <CardHeader
          action={
            <IconButton onClick={() => handleDelete(note.id)}>
              <DeleteOutlined />
            </IconButton>
          }
          title={note.title}
          subheader={note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
