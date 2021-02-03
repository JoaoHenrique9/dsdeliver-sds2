import { useIsFocused, useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, ScrollView, Alert, TouchableWithoutFeedback, View } from 'react-native';
import { fetchOrders } from '../api';
import Header from '../Header';
import OrderCard from '../OrderCard';
import { Order } from '../types';


function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  
  const fetchData = () => {
    setIsLoading(true);
    fetchOrders()
      .then(response => setOrders(response.data))
      .catch(() => Alert.alert('Houve um erro ao busccar os pedidos'))
      .finally(() => setIsLoading(false));
  }
  useEffect(() => {
    if(isFocused){
      fetchData();
    }
  }, [isFocused]);

  const handleOnPress = (order: Order) => {
    navigation.navigate('OrderDetails',{order});
  }
  return (
    <>
      <Header />
      <ScrollView style={styles.Container}>
        {isLoading ? (
          <Text>Buscando pedidos...</Text>
        ) : (
            orders.map(order => (
              <TouchableWithoutFeedback 
                key={order.id} 
                onPress={()=>{handleOnPress(order)}} 
              >
                <View>
                  <OrderCard order={order} />
                </View>
              </TouchableWithoutFeedback>
            ))
          )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  Container: {
    paddingRight: '5%',
    paddingLeft: '5%',
  }
});
export default Orders;