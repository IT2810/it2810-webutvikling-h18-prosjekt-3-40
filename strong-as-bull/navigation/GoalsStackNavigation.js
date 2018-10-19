import GoalsScreen from "../screens/Goals/GoalsScreen";
import CreateGoalScreen from "../screens/Goals/CreateGoalScreen";

import React from 'react';
import {createStackNavigator} from 'react-navigation'


const GoalsStackNavigator = createStackNavigator({

    Goals: GoalsScreen,
    CreateGoal: CreateGoalScreen,
});

export default GoalsStackNavigator;