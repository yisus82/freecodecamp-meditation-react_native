import AppGradient from '@/components/AppGradient';
import Button from '@/components/Button';
import ViewWithStatusBar from '@/components/ViewWithStatusBar';
import AUDIO_FILES from '@/constants/AudioFiles';
import COLORS from '@/constants/Colors';
import { MEDITATION_DATA, MeditationItem } from '@/constants/MeditationData';
import MEDITATION_IMAGES from '@/constants/MeditationImages';
import { DEFAULT_DURATION, TimerContext } from '@/context/TimerContext';
import { AntDesign } from '@expo/vector-icons';
import { Audio } from 'expo-av';
import { router, useLocalSearchParams } from 'expo-router';
import { useContext, useEffect, useState } from 'react';
import { ImageBackground, Pressable, Text, View } from 'react-native';

const Meditation = () => {
  const { id } = useLocalSearchParams();
  const [meditation, setMeditation] = useState<MeditationItem>();
  const { duration: secondsRemaining, setDuration: setSecondsRemaining } = useContext(TimerContext);
  const [isMeditating, setIsMeditating] = useState(false);
  const [audioSound, setAudioSound] = useState<Audio.Sound>();
  const [isPlayingAudio, setPlayingAudio] = useState(false);

  useEffect(() => {
    (async () => {
      if (id) {
        const meditationId = +id;
        for (const meditation of MEDITATION_DATA) {
          if (meditation.id === meditationId) {
            await audioSound?.unloadAsync();
            setMeditation(meditation);
            await Audio.setAudioModeAsync({
              playsInSilentModeIOS: true,
            });
            const { sound } = await Audio.Sound.createAsync(
              AUDIO_FILES[meditation.audio]
            );
            setAudioSound(sound);
            return;
          }
        }
      }
    })();
  }, [id]);

  const toggleMeditationSessionStatus = async () => {
    if (secondsRemaining === 0) {
      setSecondsRemaining(DEFAULT_DURATION);
    }

    if (isPlayingAudio) {
      await audioSound?.pauseAsync();
    } else {
      await audioSound?.playAsync();
    }

    setPlayingAudio(!isPlayingAudio);
    setIsMeditating(!isMeditating);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (secondsRemaining === 0) {
      toggleMeditationSessionStatus();
      return;
    }

    if (isMeditating) {
      timer = setTimeout(() => setSecondsRemaining(secondsRemaining - 1), 1000);
    }

    return () => clearTimeout(timer);
  }, [secondsRemaining, isMeditating]);

  useEffect(() => {
    return () => {
      setSecondsRemaining(DEFAULT_DURATION);
      audioSound?.unloadAsync();
    };
  }, [audioSound]);

  const formatTime = (timeInSeconds: number) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;

    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleAdjustDuration = () => {
    if (isMeditating) {
      toggleMeditationSessionStatus();
    }

    router.push("/(modal)/adjust-meditation-duration");
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
          <Button text='Adjust duration' onPress={handleAdjustDuration} buttonAdditionalClassNames='mb-5' />
          <Button text={isMeditating ? 'Stop' : 'Start'} onPress={toggleMeditationSessionStatus} buttonAdditionalClassNames='mb-5' />
        </AppGradient>
      </ImageBackground>
    </ViewWithStatusBar>
  );
};

export default Meditation;