import { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CardItem({ data, addAmount, removeAmount}) {
  const [amount, setAmount] = useState(data?.amount);

  function handleIncrease(){
    addAmount();
    setAmount(item => item + 1);
  }

  function handleDecrease(){
    removeAmount();

    if(amount === 0){
      setAmount(0);
      return;
    }

    setAmount(item => item - 1);
  }

  return (
    <View style={styles.container}>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{data.name}</Text>
        <Text style={styles.price}>R$ {data.price}</Text>
      </View>

      <View style={styles.amountContainer}>
        <TouchableOpacity style={styles.button} onPress={handleDecrease}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>

        <Text style={styles.amount}>{amount}</Text>

        <TouchableOpacity style={styles.button} onPress={handleIncrease}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoContainer: {
    marginBottom: 12,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#333',
  },
  price: {
    fontSize: 16,
    color: '#666',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 14,
  },
  button: {
    backgroundColor: '#168fff',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    shadowColor: '#168fff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 16,
    color: '#333',
    fontWeight: 'bold',
  }
});
