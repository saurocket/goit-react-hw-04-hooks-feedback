import React, {useState} from 'react'
import {Header} from './Header'
import {Buttons} from "./ButtonGroup/ButtonGroup";
import {Statistics} from "./Statistic/Statistic";
import {StatisticDescription} from "./Statistic/StatisticDescription";

export type IState = {
    good: number,
    neutral: number,
    bad: number
}

export const MainPage = () =>  {

    const [state, setState] = useState<IState>({
        good: 0,
        neutral: 0,
        bad: 0
    })

    const onChangeStatistics = (value: 'good' | 'neutral' | 'bad') => {
        setState(prevState => {

            return {...prevState, [value]: prevState[value] += 1}
        })
    }
        return (
            <>
                <Header/>
                <Buttons
                    buttons={Object.keys(state)}
                    onChangeStatistics={onChangeStatistics}
                />
                {Object.values(state).find(i => i !== 0) ?
                    <Statistics
                        state={state}
                    /> :
                    <StatisticDescription
                        value={'no feedback given'}
                        variant={'p'}
                        align={'center'}
                    />
                }
            </>
        )

}