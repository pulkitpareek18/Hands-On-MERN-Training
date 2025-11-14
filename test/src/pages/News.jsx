import NewsCard from '../components/NewsCard'
import axios from 'axios'
import { useState, useEffect } from 'react'

const News = () => {

    const [newsData, setNewsData] = useState([]);

    const fetchNews = async () => {
        try {
            const response = await axios.get('https://newsdata.io/api/1/latest?apikey=' + import.meta.env.VITE_NEWS_API_KEY);
            setNewsData(response.data.results);
            console.log(response.data.results);
        } catch (error) {
            console.error('Error fetching news data:', error);
        }
    }

    useEffect(() => {
        fetchNews();
    }, []);


  return (
    <div className='grid grid-cols-3 mt-20 justify-center'>
        {
            newsData.map((newsItem) => (
                <NewsCard 
                    key={newsItem.article_id}
                    title={newsItem.title}
                    description={newsItem.description}
                    imgUrl={newsItem.image_url}
                />
            ))
        }
    </div>
  )
}

export default News
