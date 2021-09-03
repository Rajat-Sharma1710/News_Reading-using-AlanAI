import React from 'react'
import {Grow,Grid,Typography} from "@material-ui/core"
import MCard from "../Cards/MCard"

import styles from './Styles.js'

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'latest news', info:'Latest news on anything' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports, Technology', text: 'Give/show me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, WWE, Smartphones,...', text: 'Articles on PlayStation 5' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'News from CNN' },
  ];

const NewsCard = ({ articles,activeArticles })=>{
    const classes=styles();

    if(!articles.length){
        return (
            <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                    {infoCards.map((infoCard)=>(
                        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard} >
                            <div className={classes.card} style={{backgroundColor:infoCard.color}} >
                                <Typography variant="h5">{infoCard.title}</Typography>
                                {infoCard.info ?
                                        (<Typography variant="h6"><strong>{infoCard.title.split(' ')[2]}</strong><br />
                                                {infoCard.info}
                                        </Typography>):null}
                                
                                <Typography variant ="h6">Try Saying :<br/> <i>{infoCard.text}</i></Typography>
                            </div>
                        </Grid>
                    ))}
                </Grid>
            </Grow>
        )
    }

    return (
        <Grow in>
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {articles.map((article,i)=>(
                    <Grid key={i} item xs={12} sm={6} md={4} lg={3} style={{display:"flex"}}>
                        <MCard article={article} activeArticles={activeArticles} i={i}/>
                     </Grid>
                ))} 
            </Grid>

        </Grow>
    );
}
export default NewsCard;