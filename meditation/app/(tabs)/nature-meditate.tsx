import AppGradient from '@/components/AppGradient';
import ViewWithStatusBar from '@/components/ViewWithStatusBar';
import COLORS from '@/constants/Colors';
import { MEDITATION_DATA, MeditationItem } from '@/constants/MeditationData';
import MEDITATION_IMAGES from '@/constants/MeditationImages';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, ImageBackground, Pressable, Text, View } from 'react-native';

const NatureMeditate = () =>
  <ViewWithStatusBar>
    <AppGradient colors={[COLORS.natureMeditate1, COLORS.natureMeditate2, COLORS.natureMeditate3]}>
      <View className="mb-6">
        <Text className="text-gray-200 mb-3 font-bold text-4xl text-center">
          Nature Meditate
        </Text>
        <Text className="text-indigo-100 text-xl font-medium text-center">
          Start your meditation practice today
        </Text>
      </View>
      <FlatList
        data={MEDITATION_DATA}
        className='mb-5'
        keyExtractor={(item: MeditationItem) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }: { item: MeditationItem; }) => (
          <Pressable
            onPress={() => { }}
            className="h-48 my-3 rounded-md overflow-hidden"
          >
            <ImageBackground
              source={MEDITATION_IMAGES[item.image]}
              resizeMode="cover"
              className='flex-1 justify-center rounded-lg'
            >
              <LinearGradient
                colors={[
                  "transparent",
                  COLORS.black80,
                ]}
                className='flex-1 justify-center items-center'
              >
                <Text className="text-gray-100 text-3xl font-bold text-center">
                  {item.title}
                </Text>
              </LinearGradient>
            </ImageBackground>
          </Pressable>
        )}
      />
    </AppGradient>
  </ViewWithStatusBar>;

export default NatureMeditate;