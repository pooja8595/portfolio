import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Education = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={[styles.card]}>
                <View style={{ alignItems: 'center', }}>
                    <Text style={{ color: '#fff', fontSize: 18, marginHorizontal: 15 }}> Education Qualification & Awards</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{ marginHorizontal: 10, marginVertical: 10, }}>
                    <Text style={{ color: '#000', fontSize: 14, fontWeight: 500 }}>Master Of Computer Application (MCA)</Text>
                    <Text style={{ color: '#000', fontSize: 13, }}>Banasthali Vidyapeeth University College , Jaipur 67 % (2020) </Text>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 10, }}>
                    <Text style={{ color: '#000', fontSize: 14, fontWeight: 500 }}>Bachelor Of Computer Application (BCA)</Text>
                    <Text style={{ color: '#000', fontSize: 13, }}>DAV Centenary College , Haryana 62 % (2017) </Text>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 10, }}>
                    <Text style={{ color: '#000', fontSize: 14, fontWeight: 500 }}>Senior Secondary Examination - Class XII</Text>
                    <Text style={{ color: '#000', fontSize: 13, }}>Modern Vidaya Mandir, Haryana 60 % </Text>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 10, }}>
                    <Text style={{ color: '#000', fontSize: 14, fontWeight: 500 }}>Higher Secondary Examination - Class X</Text>
                    <Text style={{ color: '#000', fontSize: 13, }}>Modern Vidaya Mandir, Haryana 68 % </Text>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 15 }}>
                    <Text style={{ color: '#000', fontSize: 14, fontWeight: 500 }}>AWARDS : </Text>
                </View>
                <View style={{
                    height: 1,
                    backgroundColor: '#bfbfbf',
                }} />
                <View style={{ marginHorizontal: 10, marginVertical: 10, }}>
                    <Text style={{ color: '#000', fontSize: 14, fontWeight: 500 }}>Participated in the Data Science workshop of
                        KVCH (2019).
                    </Text>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 10, }}>
                    <Text style={{ color: '#000', fontSize: 14, fontWeight: 500 }}>Selected for IQ test competition from Rawal Institutions (2014).
                    </Text>
                </View>
                <View style={{ marginHorizontal: 10, marginVertical: 10, }}>
                    <Text style={{ color: '#000', fontSize: 14, fontWeight: 500 }}>Java Web Application Development from Aptech Learning.
                    </Text>
                </View>
            </ScrollView>
            <TouchableOpacity style={{ alignSelf: 'flex-end', marginHorizontal: 10, marginBottom: 50, backgroundColor: "#0200fe", paddingHorizontal: 30, paddingVertical: 10, marginVertical: 10, borderRadius: 5 }} onPress={() => navigation?.navigate('Awards')}>
                <Text style={{ color: '#fff' }}>Next</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Education

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