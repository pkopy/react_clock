import React, {useEffect, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
    root: {
        width: '750px',
        height: '500px',
        // border: '1px solid',
        marginLeft: 20,
        marginTop: 20,
        background: '#fff',
        boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
        borderRadius:'0 0 5px 5px',
        // background: 'linear-gradient(90deg, rgba(255,0,0,.8), rgba(255,0,0,0) 71%), linear-gradient(180deg, rgba(0,255,0,.8), rgba(0,255,0,0) 70.71%), linear-gradient(336deg, rgba(0,0,255,.8), rgba(0,0,255,0) 70.71%)'
    },
    paper: {
        width: 'calc(100%-2px)',
        height: 5,
        // borderRadius:'5px 5px 0 0',
        // border: '1px solid',

        background: 'linear-gradient(270deg, rgba(0,0,255,.8), rgba(0,0,255,0) 50%), linear-gradient(90deg, rgba(0,0,255,.8), rgba(0,0,255,0) 50%)'
    },
}));
export default function (props) {
    const classes = useStyles();
    return(
        <div className={classes.root} >
            <div className={classes.paper}></div>

        </div>
    )
}