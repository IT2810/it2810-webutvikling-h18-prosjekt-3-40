import GoalsScreen from "../screens/goals/GoalsScreen";
import CreateGoalScreen from "../screens/goals/CreateGoalScreen";

import React from 'react';
import {createStackNavigator} from 'react-navigation'


const GoalsStackNavigator = createStackNavigator({

    Goals: GoalsScreen,
    CreateGoal: CreateGoalScreen,
});

export default GoalsStackNavigator;