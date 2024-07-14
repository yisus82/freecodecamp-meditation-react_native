import AppGradient from '@/components/AppGradient';
import Button from '@/components/Button';
import ViewWithStatusBar from '@/components/ViewWithStatusBar';
import COLORS from '@/constants/Colors';
import { MEDITATION_DATA, MeditationItem } from '@/constants/MeditationData';
import MEDITATION_IMAGES from '@/constants/MeditationImages';
import { AntDesign } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';

const Meditation = () => {
  const { id } = useLocalSearchParams();
  const [meditation, setMeditation] = useState<MeditationItem>();
  const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [isMeditating, setIsMeditating] = useState(false);

  useEffect(() => {
    if (id) {
      const meditationId = +id;
      for (const meditation of MEDITATION_DATA) {
        if (meditation.id === meditationId) {
          setMeditation(meditation);
          return;
        }
      }
    }
  }, [id]);

  const toggleIsMeditating = () => {
    if (secondsRemaining === 0) {
      setSecondsRemaining(10);
    }
    setIsMeditating(!isMeditating);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (secondsRemaining === 0) {
      toggleIsMeditating();
      return;
    }

    if (isMeditating) {
      timer = setTimeout(() => setSecondsRemaining(secondsRemaining - 1), 1000);
    }

    return () => clearTimeout(timer);
  }, [secondsRemaining, isMeditating]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <ViewWithStatusBar>
      <ImageBackground
        source={MEDITATION_IMAGES[meditation?.image ?? '']}
        resizeMode='cover'
        className='flex-1'
      >
        <AppGradient colors={['transparent', COLORS.black80]}>
          <Pressable onPress={() => router.back()}>
            <AntDesign name='leftcircleo' size={50} color='white' />
          </Pressable>
          <View className='flex-1 justify-center items-center'>
            <View className='justify-center items-center bg-neutral-200 rounded-full w-44 h-44'>
              <Text className='text-blue-800 text-4xl font-rmono'>{formatTime(secondsRemaining)}</Text>
            </View>
          </View>
          <Button text={isMeditating ? 'Stop' : 'Start'} onPress={toggleIsMeditating} buttonAdditionalClassNames='mb-5' />
        </AppGradient>
      </ImageBackground>
    </ViewWithStatusBar>
  );
};

export default Meditation;