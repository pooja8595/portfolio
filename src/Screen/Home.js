import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, Dimensions, Image, ScrollView, Linking, } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import AntDesign from 'react-native-vector-icons/AntDesign'
const Home = () => {
    const navigation = useNavigation();
    const openExternalLink = (url) => {
        console.log('Conditions not met, opening URL:', url);
        Linking.openURL(url).catch((err) =>
            console.error('An error occurred', appdata))

    };
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={[styles.card]}>
                <View style={{ alignItems: 'center', }}>
                    <Text style={{ color: '#fff', fontSize: 18, marginHorizontal: 15 }}> Welcome to My Portfolio</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{
                    alignSelf: 'center',
                    backgroundColor: '#fff',
                    elevation: 2,
                    shadowOffset: { width: 0, height: 2, },
                    shadowOpacity: 1,
                    shadowRadius: 2,
                    marginVertical: 10,
                    padding: 10,
                    width: windowWidth - 10,
                    maxWidth: 400,
                    borderRadius: 4,
                }}>
                    <View style={{ alignItems: 'center', }}>
                        <Image
                            source={require('../Assets/myimag.jpg')}
                            style={{
                                height: 100,
                                width: 100,
                                resizeMode: 'contain',
                                borderRadius: 50,
                                borderColor: '#000'
                            }}
                        />
                    </View>
                    <View style={{ marginHorizontal: 50, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ color: '#000', fontSize: 15, }}> Hy I am Er. Pooja </Text>
                    </View>
                    <View style={{ marginHorizontal: 50, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 12 }}>
                        <Text style={{ color: '#000', fontSize: 15, }}>8595207997</Text>
                    </View>
                    <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', }}>
                        <Text style={{ color: '#000', fontSize: 15, }}>pujabhrdwaj85100@gmail.com</Text>
                    </View>
                    <View style={{ marginHorizontal: 20, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginVertical: 12 }}>
                        <Text style={{ color: '#000', fontSize: 15, }}>Faridabad,India</Text>
                    </View>
                    <View style={{ alignItems: 'center', flexDirection: 'row', justifyContent:"center"}}>
                        <TouchableOpacity onPress={() => openExternalLink("https://github.com/pooja8595")}>
                            <AntDesign name='github' color={'#000'} size={20} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => openExternalLink("https://www.linkedin.com/in/p-mishra-769a7217b/")} style={{ marginLeft: 20 }}>
                            <AntDesign name='linkedin-square' color={'blue'} size={20} />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 15 }}>
                    <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold' }}>Objective : </Text>
                    <View style={{
                        height: 1,
                        backgroundColor: '#bfbfbf',
                        marginVertical: 10
                    }} />
                    <Text style={{ color: '#000', fontSize: 13, }}>
                        I am a self-motivated person , who believes in teamwork and looks forward to achieving individual and organizational goals with
                        perfection and dedication . I tend to learn and adapt to every new challenge , comprehensive problem-solving abilities.
                    </Text>
                </View>
            </ScrollView>

            <TouchableOpacity style={{ alignSelf: 'flex-end', marginHorizontal: 10, marginBottom: 50, backgroundColor: "#0200fe", paddingHorizontal: 30, paddingVertical: 10, marginVertical: 10, borderRadius: 5 }} onPress={() => navigation?.navigate('Work')}>
                <Text style={{ color: '#fff' }}>Next</Text>
            </TouchableOpacity>

        </SafeAreaView>
    )
}

export default Home
const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
    card: {
        // flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center',
        backgroundColor: "#0200fe",
        elevation: 3,
        shadowOffset: { width: 0, height: 2, },
        shadowOpacity: 0.2,
        shadowRadius: 2,
        marginHorizontal: 10,
        padding: 10,
        width: windowWidth - 0,
        maxWidth: 400,
        height: 80,
        // borderBottomRightRadius: 15,
        // borderBottomLeftRadius: 15
    },
})