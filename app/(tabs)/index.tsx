// app/index.tsx
import React, { useState } from 'react';
import { View, Text, Button, Image, StyleSheet } from 'react-native';
import { fetchRandomCard, Card } from '../_api';

export default function HomeScreen() {
  const [card, setCard] = useState<Card | null>(null);
  const [loading, setLoading] = useState(false);

  const handleDrawCard = async () => {
    setLoading(true);
    try {
      const randomCard = await fetchRandomCard();
      setCard(randomCard);
    } catch (error) {
      setCard(null);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Card Drawer</Text>
      <Button
        title={loading ? 'Drawing...' : 'Draw a Card'}
        onPress={handleDrawCard}
        disabled={loading}
      />
      {card && (
        <View style={styles.cardContainer}>
          <Image
            source={{ uri: card.image_url }}
            style={styles.cardImage}
            resizeMode="contain"
            onError={(e) => console.log('Image Load Error:', e.nativeEvent.error)} // Log errors
            key={card.image_url} // Force re-render on URL change
          />
          <Text style={styles.cardText}>
            {`${card.rank} of ${card.suit}`}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  cardContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  cardImage: {
    width: 200,
    height: 300,
  },
  cardText: {
    fontSize: 18,
    marginTop: 10,
    textTransform: 'capitalize',
  },
  urlText: {
    fontSize: 12,
    color: 'gray',
    marginTop: 5,
  },
});