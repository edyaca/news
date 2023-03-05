import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getLatestNews } from "../redux/news/newsSlice"


const useMovies = () =>{
    const { latestNews } = useSelector ((state) => state.newsSlice)
    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(getLatestNews())
    }, [])
    return{latestNews}
}
export default useMovies