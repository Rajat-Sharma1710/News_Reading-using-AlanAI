import React, {useState, useEffect} from 'react'
import alanBTN from '@alan-ai/alan-sdk-web'
import styles from './styles';
import imageURL from './imageURL'
import NewsCard from './components/NewsCards/NewsCard';
const alankey='e7b07fb282be4b4b99cd9ef2e5b5fef62e956eca572e1d8b807a3e2338fdd0dc/stage'
const App = ()=>{
    const classes=styles();
    const[newsArticles,setNewsArticles]= useState([]);
    const[activeArticles,setActiveArticles]=useState(-1);
    useEffect( () =>{
        alanBTN({
            key:alankey,
            onCommand:({ command,articles })=>{
                if(command==='newsHeadlines'){
                    setNewsArticles(articles);
                    setActiveArticles(-1);
                } else if(command === 'highlight'){
                    setActiveArticles((preActiveArticles)=> preActiveArticles+1);
                }
            }
        })
    },[])

    return (
        <div>
            <div className={classes.logo}>
                <img src={imageURL} className={classes.newsLogo} alt="news image"/>
            </div>
            <NewsCard articles={newsArticles} activeArticles={activeArticles}/>
        </div>
    ) 
};

export default App;