import AppGradient from '@/components/AppGradient';
import Button from '@/components/Button';
import COLORS from '@/constants/Colors';
import MEDITATION_IMAGES from '@/constants/MeditationImages';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View } from 'react-native';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <View className="flex-1">
      <ImageBackground source={MEDITATION_IMAGES.beach} resizeMode='cover' className="flex-1">
        <AppGradient colors={[COLORS.initialGradient, COLORS.finalGradient]}>
          <View className="flex-1 justify-between">
            <View>
              <Text className="text-center text-white font-bold text-4xl">Simple Meditation</Text>
              <Text className="text-center text-white text-2xl mt-3">Simplifying meditation for everyone</Text>
            </View>
            <View>
              <Button text="Get Started" onPress={() => router.push('/nature-meditate')} />
            </View>
            <StatusBar style='light' />
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;