import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './pages/Home';
import Bluetooth from './pages/Bluetooth'
import Live from './pages/Details/Live';
import Airdots from './pages/Details/Airdots';
import Airpods from './pages/Details/Airpods';
import Buds from './pages/Details/Buds';
import T13 from './pages/Details/T13';
import Tune from './pages/Details/Tune';

const stack = createStackNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen 
                    name="Home"
                    component={Home}
                    options={{headerShown: false}}
                />
                <stack.Screen 
                    name="Bluetooth"
                    component={Bluetooth}
                />
                <stack.Screen 
                    name="Live"
                    component={Live}
                />
                <stack.Screen 
                    name="AirDots"
                    component={Airdots}
                />
                <stack.Screen 
                    name="Airpods"
                    component={Airpods}
                />
                <stack.Screen 
                    name="Buds"
                    component={Buds}
                />
                <stack.Screen 
                    name="T13"
                    component={T13}
                />
                <stack.Screen 
                    name="Tune"
                    component={Tune}
                />
            </stack.Navigator>
        </NavigationContainer>
    )
}

