import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardContent, CssBaseline, Paper } from "@material-ui/core";
// import "./Get.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUser } from "./actions";
const useStyles = makeStyles((theme) => ({
  card: {
    marginTop: theme.spacing(2),
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
}));
const Get = () => {
  const [d, setData] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();

  console.log(d);
  const getData = () => {
    dispatch(getUser);
  };
  React.useEffect(() => {
    const fetchDetails = async () => {
      const res = await axios(`http://localhost:9090/employees`);
      setData(res.data);
      console.log("dd");
    };
    fetchDetails();
  }, []);
  console.log(d);
  return (
    <div>
      <CssBaseline />
      <div className="adminPage">
        <p>Get Method</p>
        {d.map((item) => {
          return (
            <Paper
              item
              alignContent="center"
              spacing={2}
              elevation={8}
              className={classes.card}
            >
              <CardContent>
                <h4> Name:{item.name}</h4>
                <h4> age:{item.age}</h4> <h4> City:{item.city}</h4>
              </CardContent>
            </Paper>
          );
        })}
      </div>
    </div>
  );
};
export default Get;
