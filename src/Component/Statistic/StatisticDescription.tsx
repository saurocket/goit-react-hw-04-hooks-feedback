import {createStyles, makeStyles, Theme, Typography} from "@material-ui/core";
import React from "react";

type PropsType = {
    value: string | number
    variant?: 'span' | 'p'
    align?: 'left' | 'center'
}
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
           textTransform: 'capitalize',
        },
    }),
);

export const StatisticDescription:React.FC<PropsType> = ({value, variant='span', align='left' }) => {



    const classes = useStyles()
    return <Typography
        align={align}
        className={classes.root}
        color="primary"
        variant="h5"
        component={variant}>
        {value}
    </Typography>

}