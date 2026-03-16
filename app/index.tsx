import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

interface Pokemon {
  name: string;
  url: string;
}

export default function Index() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const fetchPokemons = async () => {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/?limit=10");
      const data = await res.json();
      setPokemons(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <Pressable onPress={fetchPokemons}>
        <Text style={{borderColor: "red"}}>Load Pokemons</Text>
      </Pressable>

      {pokemons.map((pokemon) => (
        <View key={pokemon.name}>
          <Text style={{ color: "red" }}>{pokemon.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}