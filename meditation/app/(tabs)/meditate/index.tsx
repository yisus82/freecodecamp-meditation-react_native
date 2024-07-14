import AppGradient from '@/components/AppGradient';
import ViewWithStatusBar from '@/components/ViewWithStatusBar';
import COLORS from '@/constants/Colors';
import { MEDITATION_DATA, MeditationItem } from '@/constants/MeditationData';
import MEDITATION_IMAGES from '@/constants/MeditationImages';
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { FlatList, ImageBackground, Pressable, Text } from 'react-native';

const Meditate = () =>
  <ViewWithStatusBar>
    <AppGradient colors={[COLORS.meditate1, COLORS.meditate2, COLORS.meditate3]}>
      <Text className='text-zinc-50 text-3xl font-bold mb-6'>
        Start your meditation practice today
      </Text>
      <FlatList
        data={MEDITATION_DATA}
        className='mb-5'
        keyExtractor={(item: MeditationItem) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: { item: MeditationItem; }) => (
          <Pressable
            onPress={() => router.push(`/meditate/${item.id}`)}
            className='h-48 my-3 rounded-md overflow-hidden'
          >
            <ImageBackground
              source={MEDITATION_IMAGES[item.image]}
              resizeMode='cover'
              className='flex-1 justify-center rounded-lg'
            >
              <LinearGradient
                colors={[
                  'transparent',
                  COLORS.black80,
                ]}
                className='flex-1 justify-center items-center'
              >
                <Text className='text-gray-100 text-3xl font-bold text-center'>
                  {item.title}
                </Text>
              </LinearGradient>
            </ImageBackground>
          </Pressable>
        )}
      />
    </AppGradient>
  </ViewWithStatusBar>;

export default Meditate;