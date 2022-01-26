import React from 'react'
import { View, Text, ImageBackground, Image, ScrollView } from 'react-native';
import BookingAgent from '../images/second/booking-agent.svg';
import Recycle from '../images/second/recycle-shaded.svg';

const second = () => {
    return (
        <ImageBackground source={{uri: 'https://cdn.pixabay.com/photo/2015/08/13/17/30/womans-legs-887286__340.jpg'}} style={{flex: 1}} blurRadius={20}>
        <ScrollView style={{flex: 1}}>
            <BookingAgent height={400} width={400} fill={"blue"} />
            <Recycle height={200} width={200} fill={"blue"} />            
            <BookingAgent height={400} width={400} fill={"blue"} />
            <BookingAgent height={400} width={400} fill={"blue"} />
            <BookingAgent height={400} width={400} fill={"blue"} />
            <BookingAgent height={400} width={400} fill={"blue"} />
        </ScrollView>
        </ImageBackground>
    )
}

export default second
