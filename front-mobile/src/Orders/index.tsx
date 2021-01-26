import React from 'react';
import { StyleSheet, Text,ScrollView, View } from 'react-native';
import Header from '../Header';
import OrderCard from '../OrderCard';


function Orders() {
    return (
        <>
        <Header/>
        <ScrollView style={styles.Container}>
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
            <OrderCard />
        </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    Container:{
        paddingRight: '5%',
        paddingLeft: '5%',
    }
});
export default Orders;