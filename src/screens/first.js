import React from 'react';
import { View, Text, ImageBackground, FlatList, Image, Dimensions, StatusBar} from 'react-native';
const { width, height } = Dimensions.get('screen');

const data = [
    'https://cdn.pixabay.com/photo/2019/09/23/04/50/jellyfish-4497496__340.jpg',
    'https://cdn.pixabay.com/photo/2021/08/31/11/58/woman-6588614__340.jpg',
    'https://cdn.pixabay.com/photo/2021/06/22/16/04/beauty-6356536__340.jpg',
    'https://cdn.pixabay.com/photo/2021/09/07/16/31/nature-6604374__340.jpg',
    'https://cdn.pixabay.com/photo/2017/06/05/07/59/octopus-2373177__340.png',
    'https://cdn.pixabay.com/photo/2017/02/01/09/48/dog-2029214__340.jpg',
    'https://cdn.pixabay.com/photo/2017/06/16/10/14/underwater-2408569__340.jpg',
];

const imageW = width * 0.7;
const imageH = imageW * 1.54;

const First = () => {
    return (
        <ImageBackground source={{uri: 'https://cdn.pixabay.com/photo/2017/12/15/13/51/polynesia-3021072__340.jpg'}}
            style={{width: '100%', height: '100%',}} resizeMode='cover' blurRadius={30}>
        <StatusBar hidden />
        <View style={{flex: 1}}>
            <FlatList 
                data={data}
                keyExtractor={(_ ,index) => index.toString()} 
                horizontal
                renderItem={({item})=> {
                    return <View style={{width, justifyContent: 'center', alignItems: 'center'}}>
                        <Image source={{uri: item}} style={{width: imageW, height: imageH, resizeMode: 'cover', borderRadius: 16,}} />
                    </View> 
                }} 
            />
        </View>
        </ImageBackground>

    )
}

export default First
