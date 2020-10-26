import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardAccent from "../../common/CardAccent";
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';

import AxiosInstance from "../../utils/axios";
import axios from 'axios'
import SkeletonCard from "../../common/SkeletonCard";

const data = {
  softSkills: [ "Leadership", "Logic"],
  technicalSkills:["React.js", "Nest.js"]  
}

const useStyles = makeStyles( theme => ({
  root: {
    padding: theme.spacing(2),
    borderBottom: `5px solid ${theme.palette.primary.main}`
  },
  title:{
    fontWeight: 700
  },
  container:{
    "& > *": {
      marginRight: theme.spacing(1)
    }
  },
  chip: {
    backgroundColor: "#1976D2",
    "& > span": {
      fontWeight:700,
      color:"#FAFAFA",
      minWidth: "80px",
      textAlign: "center"
    },
  },
  outlined: {
    border: "1px solid #1976D2",
    "& > span": {
      fontWeight:700,
      minWidth: "80px",
      textAlign: "center",
      color: "#1976D2"
    },
  },
  subTitle:{
    fontWeight: 700,
    marginTop: theme.spacing(2)
  }
}));


const accentColor = "#FDD835";

function SkillController(props) {
  const classes = useStyles();

  const { user } = props;
  const [loading, setLoading] = useState(true);
  const [skills, setSkills] = useState({
    technicalSkills: [],
    softSkills: []
  });

  const [technicalSkills, setTechnical] = useState([])
  const [softSkills, setSoft] = useState([])



  React.useEffect(() => {
    setLoading(true);
    const source = axios.CancelToken.source();
   

    AxiosInstance
      .get(`/public/skills/${user}`)
      .then(response => {
        const { data } = response;
        const technical = data.filter(item => item.category === "Technical")
        const soft = data.filter(item => item.category == "Soft") 
        setTechnical(technical)
        setSoft(soft)
    
      })
    
    setLoading(false);
    return () => {
      source.cancel(
        "Canceled because of component unmounted"
      );
    };
  },[user])

  return (
    <CardAccent className={classes.root} color={accentColor}>
      <Typography className={classes.title} variant="h4" gutterBottom> Skills</Typography>
      <Typography className={classes.subTitle} variant="h6" gutterBottom> Technical Skills</Typography>
        <>
          {
            loading? <SkeletonCard /> :
              <>
                <div className={classes.container}>
                  {
                    technicalSkills.map((value,key)=> {
                      return(
                        <Chip className={classes.chip} key={key} label={value.name} />
                      )
                    })
                  }
                </div>
                <Typography className={classes.subTitle} variant="h6" gutterBottom> Soft Skills</Typography>
                <div className={classes.container}>
                  {
                    softSkills.map( (value,key)=> {
                      return(
                        <Chip color="primary" variant="outlined" className={classes.outlined} key={key} label={value.name} />
                      )
                    })
                  }
                </div>
            </>
          }
        </>
     
    </CardAccent>
  )
}

export default SkillController
