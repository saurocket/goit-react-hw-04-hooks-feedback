import React from 'react';
import {createStyles, Theme, makeStyles} from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';


import Good from '@material-ui/icons/InsertEmoticon';
import Neutral from '@material-ui/icons/SentimentSatisfied';
import Bad from '@material-ui/icons/MoodBad';

import {TypeState} from "./Statistic";
import {StatisticDescription} from "./StatisticDescription";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: 360,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    }),
);

export const StatisticList: React.FC<TypeState> = ({state}) => {
    const classes = useStyles();

    const total = Object.values(state).reduce((item, acc) => {
        return acc += item
    }, 0)
    const percent = Math.round(state.good / total * 100)


    return (
        <List className={classes.root}>
            {Object.entries(state).map(fb => (
                <ListItem key={fb[0]}>
                    <ListItemAvatar>
                        <Avatar>
                            {fb[0] === 'good' && <Good color='primary'/>}
                            {fb[0] === 'neutral' && <Neutral color='action'/>}
                            {fb[0] === 'bad' && <Bad color='secondary'/>}
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                        primary={<StatisticDescription value={fb[0]}/>}
                        secondary={<StatisticDescription value={fb[1]}/>}
                    />
                </ListItem>
            ))}
            <StatisticDescription
                value={`total: ${total}`}
                variant={'p'}
            />
            <StatisticDescription
                value={`positive feedback: ${percent}%`}
                variant={'p'}
            />
        </List>
    );
}

