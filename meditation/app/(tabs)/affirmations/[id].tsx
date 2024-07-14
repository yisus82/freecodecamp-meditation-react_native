import AppGradient from '@/components/AppGradient';
import ViewWithStatusBar from '@/components/ViewWithStatusBar';
import AFFIRMATION_GALLERY from '@/constants/AffirmationGallery';
import COLORS from '@/constants/Colors';
import { AntDesign } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { ImageBackground, Pressable, ScrollView, Text } from 'react-native';

const Affirmation = () => {
  const { id } = useLocalSearchParams();
  const [affirmationImage, setAffirmationImage] = useState(undefined);
  const [affirmationText, setAffirmationText] = useState('');

  useEffect(() => {
    setAffirmationImage(undefined);
    setAffirmationText('');
    if (id) {
      const affirmationId = +id;
      for (const affirmationGroup of AFFIRMATION_GALLERY) {
        for (const affirmation of affirmationGroup.data) {
          if (affirmation.id === affirmationId) {
            setAffirmationImage(affirmation.image);
            setAffirmationText(affirmation.text);
            return;
          }
        }
      }
    }
  }, [id]);

  return (
    <ViewWithStatusBar>
      <ImageBackground
        source={affirmationImage}
        resizeMode='cover'
        className='flex-1'
      >
        <AppGradient colors={[COLORS.black30, COLORS.black90]}>
          <Pressable onPress={() => router.back()}>
            <AntDesign name='leftcircleo' size={50} color='white' />
          </Pressable>
          <ScrollView
            className='mt-10'
            showsVerticalScrollIndicator={false}
          >
            {affirmationText.split('.').map((sentence, index) =>
              sentence && <Text
                className='text-white text-3xl mb-10 font-bold text-center'
                key={index}
              >
                {sentence}.
              </Text>
            )}
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </ViewWithStatusBar>
  );
};

export default Affirmation;