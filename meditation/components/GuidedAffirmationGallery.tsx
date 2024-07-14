import { AffirmationGroup } from "@/constants/AffirmationGallery";
import { Link } from "expo-router";
import { FlatList, Image, Pressable, Text, View } from "react-native";

const GuidedAffirmationsGallery = ({ group }: { group: AffirmationGroup; }) =>
  <View className="my-5">
    <View className="mb-2">
      <Text className="text-white font-bold text-xl">{group.title}</Text>
    </View>
    <View className="space-y-2">
      <FlatList
        data={group.data}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>
          <Link href={`/affirmations/${item.id}`} asChild>
            <Pressable>
              <View className="h-36 w-32 rounded-md mr-4">
                <Image
                  source={item.image}
                  resizeMode="cover"
                  className="w-full h-full"
                />
                <Text>{item.text}</Text>
              </View>
            </Pressable>
          </Link>
        }
        horizontal
      />
    </View>
  </View>;

export default GuidedAffirmationsGallery;