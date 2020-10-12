import { LinearProgress, withStyles } from '@material-ui/core';

const BorderLinearProgress = withStyles((theme) => ({
    root: {
        height: 15,
        borderRadius: 5,
        border: "1px solid lightgrey",
        boxShadow: "1px 1px 8px #888888",
    },
    colorPrimary: {
        backgroundColor: "#f8f8ff"
    },
    bar: {
        borderRadius: 5,
        backgroundColor: '#D96704',
    },
}))(LinearProgress);

export default BorderLinearProgress;