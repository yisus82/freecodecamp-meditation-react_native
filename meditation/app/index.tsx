import Button from '@/components/Button';
import COLORS from '@/constants/Colors';
import MEDITATION_IMAGES from '@/constants/MeditationImages';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = () =>
  <View className="flex-1">
    <ImageBackground source={MEDITATION_IMAGES.beach} resizeMode='cover' className="flex-1">
      <LinearGradient colors={[COLORS.initialGradient, COLORS.finalGradient]} className="flex-1">
        <SafeAreaView className="flex-1 mx-5 my-12 justify-between">
          <View>
            <Text className="text-center text-white font-bold text-4xl">Simple Meditation</Text>
            <Text className="text-center text-white text-2xl mt-3">Simplifying meditation for everyone</Text>
          </View>
          <View>
            <Button text="Get Started" onPress={() => { }} />
          </View>
          <StatusBar style='light' />
        </SafeAreaView>
      </LinearGradient>
    </ImageBackground>
  </View>;

export default HomeScreen;