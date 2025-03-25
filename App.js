import { Image } from 'expo-image';
import { StyleSheet, Text, SafeAreaView, FlatList, ScrollView, SectionList } from 'react-native';

const inimigos = ['Duende Verde', 'Venom', 'Electro', 'Grãos'];
const poderesinimigos = [
  {
    title: 'Duende Verde',
    data: ['Lança teias', 'Super força', 'Super agilidade'],
  },
  {
    title: 'Venom',
    data: ['Super força', 'Super agilidade', 'Super resistência'],
  },
  {
    title: 'Electro',
    data: ['Super força', 'Super agilidade', 'Super resistência'],
  }
];

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text>Acompanhe o Homem Aranha em uma Missão</Text>
        <Image style={styles.img} source={require('./img/SpiderMan2.png')} />

        <Text style={styles.subtitle}>Principais inimigos</Text>
        <FlatList
          data={inimigos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        />

        <Text style={styles.subtitle}>Principais Poderes dos inimigos</Text>
        <SectionList
          sections={poderesinimigos}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionHeader}>{title}</Text>
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
  img: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  scroll: {
    width: '100%',
    padding: 14,
  },

  subtitle: { // Corrigido de "subtitulo" para "subtitle"
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
    marginLeft: 10,
  },
  item: {
    fontSize: 14,
    padding: 10,
    marginLeft: 10,
  },

  sectionHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    backgroundColor: '#f4f4f4',
    padding: 5,
    marginTop: 10,
  },
});