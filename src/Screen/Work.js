import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Image ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Work = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={[styles.card]}>
                <View style={{ alignItems: 'center', }}>
                    <Text style={{ color: '#fff', fontSize: 18, marginHorizontal: 15 }}> Work Experience (1.6 Years +)</Text>
                </View>
            </View>
            <View style={{
                alignSelf: 'center',
                backgroundColor: '#fff',
                elevation: 2,
                shadowOffset: { width: 0, height: 2, },
                shadowOpacity: 1,
                shadowRadius: 2,
                marginVertical: 10,
                padding: 15,
                width: windowWidth - 10,
                maxWidth: 400,
                borderRadius: 4,
            }}>
                <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold' }}>React Native Developer</Text>
                <Text style={{ color: '#000', fontSize: 12, fontWeight: 'bold' }}>Elite Mindz Mobile App & Software(New Delhi,Janakpuri)</Text>
            </View>
            <ScrollView>
                <View style={{ marginHorizontal: 10, marginTop: 15 }}>
                    <Text style={{ color: '#000', fontSize: 15, fontWeight: 'bold' }}>Project Completed : </Text>
                </View>
                <View style={{
                    height: 1,
                    backgroundColor: '#bfbfbf',
                    marginVertical: 10
                }} />
                <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                    <Text style={{ color: '#000', fontSize: 15, fontWeight: 500 }}>Project # 1</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                    <Image
                        source={require('../Assets/ktclogo.png')}
                        style={{
                            height: 50,
                            width: 50,
                            resizeMode: 'contain',
                        }}
                    />
                    <View>
                        <Text style={{ color: '#000', fontSize: 15, marginLeft: 10, fontWeight: 500 }}>KTC Customer Application</Text>
                        <Text style={{ color: '#000', fontSize: 10, marginLeft: 10 }}>A new , premium cab app , focused on safety and comfort.</Text>
                    </View>
                </View>
                <View style={{ marginVertical: 10 }}>
                    <Text style={{ color: '#000', fontSize: 10, marginLeft: 10, fontWeight: 500 }}>Live On Play Store & App Store</Text>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                    <Text style={{ color: '#000', fontSize: 15, fontWeight: 500 }}>
                        Description :
                    </Text>
                    <Text style={{ color: '#000', fontSize: 12, marginTop: 10 }}>
                        This KTC customer app will allow users to have access to their previous booking history. They can book a cab on the same route by tapping on one of the previously booked histories for faster booking process. KTC App offers a safe, convenient and comfortable cab service. KTC is India's No.1 Cab service with 10000+ vehicle fleet ranging from hatchback, Sedan and SUV. Our services being spread across 50+ locations
                        Whatever your travel destination is! Download the KTC app now and book your ride just in few seconds. KTC offers Local Cabs, Airport Transfer Cabs, Outstation cabs, Package trips ( Hourly Rental packages), and more.
                    </Text>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 10, flexDirection: 'row' }}>
                    <Text style={{ color: '#000', fontSize: 14, fontWeight: 500 }}>Environment : </Text>
                    <Text style={{ color: '#000', fontSize: 13, }}>Frontend </Text>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 10, flexDirection: 'row' }}>
                    <Text style={{ color: '#000', fontSize: 14, fontWeight: 500 }}>Team Size : </Text>
                    <Text style={{ color: '#000', fontSize: 13, }}>Individual</Text>
                </View>
            </ScrollView>
            <TouchableOpacity style={{ alignSelf: 'flex-end', marginHorizontal: 10, marginBottom: 50, backgroundColor: "#0200fe", paddingHorizontal: 30, paddingVertical: 10, marginVertical: 10, borderRadius: 5 }} onPress={() => navigation?.navigate('vesta')}>
                <Text style={{ color: '#fff' }}>Next</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Work
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