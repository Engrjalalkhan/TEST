import React, {useState, useRef, useEffect} from 'react';
import {FlatList, View, Image, StyleSheet} from 'react-native';

const Swapimage = () => {
  const images = [
    'https://trztechnologies.com/wp-content/uploads/2016/03/office-1024x500.jpg',
    'https://trztechnologies.com/wp-content/uploads/2016/03/woman-1191828_960_720-960x500.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current.scrollToIndex({index: nextIndex, animated: true});
      setCurrentIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex, images.length]);

  const handleSwipe = ({viewableItems}) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({item}) => (
          <View style={styles.imageContainer}>
            <Image source={{uri: item}} style={styles.image} />
          </View>
        )}
        onViewableItemsChanged={handleSwipe}
        viewabilityConfig={{viewAreaCoveragePercentThreshold: 100}}
      />

      {/* Dots indicator */}
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[styles.dot, index === currentIndex && styles.activeDot]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom:70,
  },
  imageContainer: {
    width: 430, // Width of each image
    height: 200, // Height of each image
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 20,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  activeDot: {
    backgroundColor: 'blue',
  },
});

export default Swapimage;
