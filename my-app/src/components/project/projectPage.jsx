import React from 'react';
import ReactPlayer from 'react-player/youtube'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import axios from 'axios';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import useStyles from './useStyles'
import {  useTheme } from '@material-ui/styles';

import ProjectDisplay from './ProjectFile';
import ProjectAuthor from './ProjectAuthor';

import './project.css';
import { useEffect } from 'react';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Brainfolio
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// gather it from backend
const author = [1, 2, 3];

export default function ProjectPage() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'), {
                    defaultMatches: true
                  });
  const classes = useStyles();

  const [projects, setProjects] = React.useState([]);
  const [dataNotRecieved, setDataNotRecieved] = React.useState(true);

  useEffect(() => {
    if (dataNotRecieved) {
      console.log("data in");
      axios.get("http://localhost:5000/projects/")
      .then((res) => {
        const resData = res.data;
        setProjects(resData);
      })
      setDataNotRecieved(false);
    };
  });

  return (
    <div>
      <Grid container spacing={isMobile ? 1 : 3}>
        <Grid item xs={12} sm={12}>
          <div class="project-title">
              <Typography variant="h3" align="center"> 
                Project Title
              </Typography>
          </div>
        </Grid>
        <Grid item xs={12} sm={12} md={8}>
          <div class="project-desc"> 
            <div class="project-desc-word">
              <Typography variant="h4">
                Description:
              </Typography>
              <div class="project-desc-body">
                <Typography>
                  Enter the description here.
                </Typography>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <div class="author">
            <div class="author-word">
            <Typography variant="h5">
                Author:
            </Typography>    
            </div>
            <div>
              <ProjectAuthor/>
            </div>
          </div>
          
        </Grid>
        <Grid item xs={12} sm={12}>
          <div class="project-bg">
            <div>
              <div class="project-word">
              <Typography variant="h4">
                  Project Display
              </Typography>
              </div>

              <div class="project-display">
                <ProjectDisplay/>
              </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={12} sm={12}>
          <div class="video-bg">
            <div>
              <div class="video-word">
                <Typography variant="h4">
                  <b>Video</b>
                </Typography>
              </div>
              <div class="video">
                  <div className='player-wrapper'>
                      <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=SLsTskih7_I'
                        width='100%'
                        height='100%'
                      />
                  </div>
                </div>
            </div>
          </div>
        </Grid>
      </Grid>

    </div>
  );
}