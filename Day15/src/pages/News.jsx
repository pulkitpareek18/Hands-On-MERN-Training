import axios from 'axios'
import { useState, useEffect } from 'react'
import NewsCard from '../components/NewsCard'

const News = () => {

    const [newsData, setNewsData] = useState([]);

    useEffect(() => {

        const fetchNews = async () => {
            try{
                const response = await axios.get("https://newsdata.io/api/1/latest?apikey="+import.meta.env.VITE_NEWS_API_KEY);
                setNewsData(response.data.results);
                console.log(response.data.results);
            }
            catch(error){
                console.error("Error fetching news data:", error);
            }
        }
        
        fetchNews();
        
    }, []);



  return (
    <div className="grid grid-cols-3 mt-20 justify-center">
        
        {

            newsData.map((item,index)=>(
                <NewsCard 
                    title={item.title}
                    description={item.description}
                    imgUrl={item.image_url}
                    key={item.article_id}
                />
            ))


        }



    </div>
  )
}

export default News
