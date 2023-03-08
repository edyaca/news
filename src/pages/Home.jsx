import { useEffect } from "react"
import { StyleSheet, View } from "react-native"
import { useDispatch, useSelector } from "react-redux"
import { getLatestNews } from "../redux/news/newsSlice"
import NewList from "../components/NewList"

const Home = () => {
  const { latestNews } = useSelector((state) => state.newsSlice)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLatestNews())
  }, []);

  console.log('Lalo 1:')
  console.log(latestNews)
  return (
    <View style={styles.container}>
      <NewList list={latestNews}/>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 20,
    marginTop: 10,
  },
})
export default Home
