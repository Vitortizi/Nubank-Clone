/* eslint-disable prettier/prettier */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

import Main from './pages/Main';


export default function Routes() {
    
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={Main}
                options={{
                    headerTransparent: true,
                    title: false,
                }}
            />
        </Stack.Navigator>
    );
}