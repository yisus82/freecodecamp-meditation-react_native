import AppGradient from '@/components/AppGradient';
import Button from '@/components/Button';
import ViewWithStatusBar from '@/components/ViewWithStatusBar';
import COLORS from '@/constants/Colors';
import MEDITATION_IMAGES from '@/constants/MeditationImages';
import { router } from 'expo-router';
import { ImageBackground, Text, View } from 'react-native';

const HomeScreen = () =>
  <ViewWithStatusBar>
    <ImageBackground source={MEDITATION_IMAGES.beach} resizeMode='cover' className='flex-1'>
      <AppGradient colors={[COLORS.black40, COLORS.black80]}>
        <View className='flex-1 justify-between'>
          <View>
            <Text className='text-center text-white font-bold text-4xl'>Simple Meditation</Text>
            <Text className='text-center text-white text-2xl mt-3'>Simplifying meditation for everyone</Text>
          </View>
          <View>
            <Button text='Get Started' onPress={() => router.push('/meditate')} />
          </View>
        </View>
      </AppGradient>
    </ImageBackground>
  </ViewWithStatusBar>;

export default HomeScreen;