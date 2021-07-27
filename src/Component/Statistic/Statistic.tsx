import {StatisicHeader} from "./StatisticHeader";
import React from "react";
import { StatisticList } from "./StatisticsList";
import {IState} from "../MainPage";

export type TypeState  = {
    state: IState
}

export const Statistics:React.FC<TypeState> = ({state}) => {
    return (
        <>
           <StatisicHeader/>
            <StatisticList state={state}/>
       </>
    )

}