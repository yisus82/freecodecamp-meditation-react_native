import ViewWithStatusBar from '@/components/ViewWithStatusBar';
import { Text } from 'react-native';

const Affirmations = () => {
  return (
    <ViewWithStatusBar additionalStyles='justify-center items-center' statusBarStyle='dark'>
      <Text>Affirmations</Text>
    </ViewWithStatusBar>
  );
};

export default Affirmations;