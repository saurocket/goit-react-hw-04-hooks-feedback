import React from 'react';
import Typography from '@material-ui/core/Typography';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';

const useStyles = makeStyles((theme:Theme) => createStyles({
    header: {
       padding: theme.spacing(5)
    }
}))



export const Header:React.FC = () => {
    const clasess = useStyles()
    return (
        <Typography
            className={clasess.header}
            variant="h2"
            component="h2"
            gutterBottom
            color="primary"
            align="center"
        >
            Please leave feedback
        </Typography>
    )
}
