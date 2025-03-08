import { useEffect, useState, useCallback } from 'react';
import { View, Text, StyleSheet, useWindowDimensions } from 'react-native';
import Animated, { 
  useAnimatedStyle, 
  withSpring,
  withSequence,
  withTiming
} from 'react-native-reanimated';

export default function DigitalClock() {
  const [date, setDate] = useState(new Date());
  const { width, height } = useWindowDimensions();

  const updateTime = useCallback(() => {
    setDate(new Date());
  }, []);

  useEffect(() => {
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, [updateTime]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          scale: withSequence(
            withSpring(1.02, { damping: 15 }),
            withTiming(1, { duration: 150 })
          ),
        },
      ],
    };
  });

  const dynamicStyles = StyleSheet.create({
    time: {
      fontSize: Math.min(width / 8, height / 3),
    },
    date: {
      fontSize: Math.min(width / 25, height / 12),
    },
  });

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.clockContainer, animatedStyle]}>
        <Text style={[styles.time, dynamicStyles.time]}>
          {formatTime(date)}
        </Text>
        <Text style={[styles.date, dynamicStyles.date]}>
          {formatDate(date)}
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clockContainer: {
    alignItems: 'center',
  },
  time: {
    color: '#fff',
    fontFamily: 'RobotoMono-Bold',
    letterSpacing: 2,
  },
  date: {
    color: '#fff',
    fontFamily: 'RobotoMono-Bold',
    marginTop: 20,
    opacity: 0.7,
    letterSpacing: 1,
  },
});