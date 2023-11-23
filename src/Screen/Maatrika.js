import { StyleSheet, Text, View, SafeAreaView, Dimensions, ScrollView, Image ,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const Maatrika = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{ backgroundColor: '#fff', flex: 1 }}>
            <View style={[styles.card]}>
                <View style={{ alignItems: 'center', }}>
                    <Text style={{ color: '#fff', fontSize: 18, marginHorizontal: 15 }}> Work Experience (1.6 Years +)</Text>
                </View>
            </View>
            <ScrollView>
                <View style={{ marginHorizontal: 10, marginVertical: 10 }}>
                    <Text style={{ color: '#000', fontSize: 15, fontWeight: 500 }}>Project # 4</Text>
                </View>
                <View style={{ flexDirection: 'row', marginHorizontal: 10, alignItems: 'center' }}>
                    <Image
                        source={require('../Assets/maatrika.png')}
                        style={{
                            height: 50,
                            width: 50,
                            resizeMode: 'contain',
                        }}
                    />
                    <View>
                        <Text style={{ color: '#000', fontSize: 15, marginLeft: 10, fontWeight: 500 }}>Maatrika Care</Text>
                        <Text style={{ color: '#000', fontSize: 10, marginLeft: 10 }}>The MoneyFair</Text>
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
                        Designed to cater to the distinctive healthcare needs of the elderly, the Vesta Doctor App is an all-inclusive, digitally-driven clinic management software that revolutionizes geriatric care in the modern era.
                        The Vesta Doctor App stands at the intersection of healthcare and technology, seamlessly integrating our robust elder care platform with state-of-the-art clinic management features. Our goal is to optimize patient care, enhance medical practice operations, and simplify the caregiving journey, all in one digital hub.
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
            <TouchableOpacity style={{ alignSelf: 'flex-end', marginHorizontal: 10, marginBottom: 50, backgroundColor: "#0200fe", paddingHorizontal: 30, paddingVertical: 10, marginVertical: 10, borderRadius: 5 }} onPress={() => navigation?.navigate('Education')}>
                <Text style={{ color: '#fff' }}>Next</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}

export default Maatrika

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