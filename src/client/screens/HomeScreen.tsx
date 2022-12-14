import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import MainLayout from "../layouts/MainLayout";
import { FloatingAction } from "react-native-floating-action";
import { useEffect, useState } from "react";
import Categories from "../components/Categories";
import { useNavigation } from "@react-navigation/native";

export default function Homepage() {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);


  const navigate = useNavigation()



  const upcomingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=57f69e0d07d803f48a501b9447c516e1&language=en-US",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      // console.log(data.results);
      setData(data.results);
    } catch (e) {
      console.log(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    upcomingMovies();
  }, []);

  return (
    <MainLayout>
      <Categories />
      <ScrollView>
        <View>
          <Text className="text-white font-bold text-xl py-2">
            New Releases
          </Text>
          <ScrollView horizontal>
            {data.map((movie, id) => (
              <TouchableOpacity
                key={movie.id}
                className="space-y-2 px-1 items-start"
                onPress={() => navigate.navigate("MovieDetails")}
              >
                <Image
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${movie.poster_path}`,
                  }}
                  resizeMode="contain"
                  className="h-36 w-28 rounded-md mb-3"
                />
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </MainLayout>
  );
}
