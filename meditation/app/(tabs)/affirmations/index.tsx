import AppGradient from '@/components/AppGradient';
import GuidedAffirmationsGallery from '@/components/GuidedAffirmationGallery';
import ViewWithStatusBar from '@/components/ViewWithStatusBar';
import AFFIRMATION_GALLERY from '@/constants/AffirmationGallery';
import COLORS from '@/constants/Colors';
import { ScrollView, Text, View } from 'react-native';

const Affirmations = () =>
  <ViewWithStatusBar>
    <AppGradient colors={[COLORS.affirmations1, COLORS.affirmations2, COLORS.affirmations3]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-zinc-50 text-3xl font-bold">
          Change your beliefs with affirmations
        </Text>
        <View>
          {AFFIRMATION_GALLERY.map(group =>
            <GuidedAffirmationsGallery
              key={group.title}
              group={group}
            />
          )}
        </View>
      </ScrollView>
    </AppGradient>
  </ViewWithStatusBar>;

export default Affirmations;