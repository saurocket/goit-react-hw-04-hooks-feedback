import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            '& > *': {
                margin: theme.spacing(1),
            },
        },
        btn: {
            fontSize: theme.spacing(3)
        }
    }),
);



type PropsType = {
    buttons: Array<string>
    onChangeStatistics: (value: 'good' | 'neutral' | 'bad') => void
}



export const Buttons:React.FC<PropsType> = ({buttons, onChangeStatistics}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <ButtonGroup
                size="large"
                color="primary"
                variant="outlined"
                aria-label="large outlined primary button group">
                {buttons.map(btn => (
                    <Button
                        key={btn}
                        className={classes.btn}
                    // @ts-ignore
                        onClick={() => onChangeStatistics(btn)}
                    >
                        {btn}
                    </Button>
                ))}
            </ButtonGroup>
        </div>
    );
}