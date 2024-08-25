import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Product from '../../components/Product';
import { CartContext } from './../../contexts/CartContext';

export default function Home() {
    const navigation = useNavigation();
    const { cart, addItemCart } = useContext(CartContext);

    const [products, setProducts] = useState([
        { id: '1', name: "Coca cola", price: 19.90 },
        { id: '2', name: "Chocolate", price: 6.50 },
        { id: '4', name: "Queijo 500g", price: 15 },
        { id: '5', name: "Batata frita", price: 23.90 },
        { id: '6', name: "Guarana lata", price: 6.00 },
    ]);

    function handleAddItemCart(item) {
        addItemCart(item);
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cartContent}>
                <Text style={styles.title}>Lista de produtos</Text>
                <TouchableOpacity style={styles.cartButton} onPress={() => navigation.navigate('Cart')}>
                    {cart.length >= 1 && (
                        <View style={styles.dot}>
                            <Text style={styles.dotText}>{cart?.length}</Text>
                        </View>
                    )}
                    <Feather name="shopping-cart" size={30} color="#333" />
                </TouchableOpacity>
            </View>

            <FlatList
                data={products}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (<Product data={item} addToCart={() => handleAddItemCart(item)} />)}
                contentContainerStyle={styles.productList}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingEnd: 16,
        paddingStart: 16,
    },
    cartContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 5,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333',
    },
    cartButton: {
        padding: 10,
    },
    dot: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "red",
        width: 20,
        height: 20,
        borderRadius: 10,
        position: 'absolute',
        zIndex: 99,
        top: -5,
        right: -5,
    },
    dotText: {
        color: '#FFF',
        fontSize: 12,
        fontWeight: 'bold',
    },
    productList: {
        paddingBottom: 16,
    },
});
