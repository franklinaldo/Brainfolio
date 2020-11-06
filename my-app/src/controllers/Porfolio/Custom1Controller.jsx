import React, {useState, useContext} from 'react'
import { UserContext } from '../../context/user.context';
import { makeStyles } from '@material-ui/core/styles';
import CardAccent from "../../common/CardAccent";
import Typography from '@material-ui/core/Typography';
import ProjectListItem from "../../components/Portfolio/ProjectListItem"

import AxiosInstance from "../../utils/axios";
import axios from 'axios'
import SkeletonCard from "../../common/SkeletonCard";

const useStyles = makeStyles( theme => ({
  root: {
    padding: theme.spacing(2),
    borderBottom: `5px solid ${theme.palette.primary.main}`
  },
  label:{
    fontWeight: 700
  },
  title:{
    paddingTop: theme.spacing(2),
    fontWeight: 700,
    fontSize: "1.333rem"
  },
  subTitle:{
    fontWeight: 700,
    fontSize: "1.2rem"
  },
  desc:{
    fontSize: "1rem",
    paddingTop: theme.spacing(1)
  },

}));

const accentColor ="#1E88E5";

function Custom1Controller(props) {
  const classes = useStyles();
  const {state} = useContext(UserContext);
  const config = {
    headers: { Authorization: `Bearer ${state.token}` }
  };

  const { user } = props;


  const [loading, setLoading] = useState(true);
  const [custom, setCustom] = useState([]);

//   React.useEffect(() => {
//     setLoading(true);
//     const source = axios.CancelToken.source();
   

//     AxiosInstance
//       .get(`/public/allproject/${user}`, config)
//       .then(response => {
//         // const { data } = response;
//         // setProjects(data);
//         const data = response?.data;
//         if(data) setProjects(data);
//         console.log(response)
//       })
    
    // setLoading(false);
    // return () => {
    //   source.cancel(
    //     "Canceled because of component unmounted"
    //   );
    // };
    // },[user])

    if ((custom.length) < 1) {
      return (
        <>
        </>
      )
    }

  return (
    <CardAccent className={classes.root} color={accentColor}>
      <Typography className={classes.label} variant="h4">
        {"Awards"}
      </Typography>
       <Typography className={classes.title} variant="h3">
            {"title"}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {"subtitile"}
        </Typography>

      <Typography className={classes.desc} variant="body1">
        {"Body"}
      </Typography>

    </CardAccent>
  )
}
export default Custom1Controller