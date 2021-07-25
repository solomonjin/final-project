import React from 'react';
import { Grid, Box, IconButton, Typography } from '@material-ui/core';
import { MyPaper } from '.';
import { makeStyles } from '@material-ui/core/styles';
import MailIcon from '@material-ui/icons/Mail';
import InsertCommentIcon from '@material-ui/icons/InsertComment';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import DeleteIcon from '@material-ui/icons/Delete';
import formatDate from '../lib/format-date';
import Highlighter from 'react-highlight-words';
import { parseKeywords } from '../../server/createSearchStream';

const useStyles = makeStyles({
  root: {
    color: '#393e41'
  },
  title: {
    lineHeight: '1.25em'
  },
  subtext: {
    opacity: '50%'
  },
  highlight: {
    color: '#ff4300',
    backgroundColor: 'transparent'
  }
});

export default function Submission(props) {
  const classes = useStyles();

  return (
    <MyPaper elevation={3}>
      <Box p={2} pb={0}>
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.title} variant="h6">
              <Highlighter
                highlightClassName={classes.highlight}
                searchWords={parseKeywords(props.keywords)}
                textToHighlight={props.title}
                autoEscape
               />
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.subtext} variant="body2">
              {`Posted by ${props.author} in ${props.sub}`}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.subtext} variant="body2">
              {formatDate(parseInt(props.date))}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="space-evenly">
              <Grid item xs align="center">
                <IconButton>
                  <MailIcon color="primary" />
                </IconButton>
              </Grid>
              <Grid item xs align="center">
                <IconButton>
                  <InsertCommentIcon color="primary" />
                </IconButton>
              </Grid>
              <Grid item xs align="center">
                <IconButton>
                  <OpenInNewIcon color="primary" />
                </IconButton>
              </Grid>
              <Grid item xs align="center">
                <IconButton>
                  <DeleteIcon color="primary" />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </MyPaper>
  );
}
