import React, { useState,useEffect, createRef}from 'react'
import {Card,CardActions,CardActionArea,CardContent,CardMedia,Button,Typography} from '@material-ui/core'
import classNames from 'classnames'
import useStyle from './Styles'
const MCard = ({article:{ description,publishedAt,source,title,url,urlToImage },i,activeArticles})=>{
    const classes=useStyle();
    const [elrefs,setElrefs]=useState([]);
    const scrollToRef=(ref)=> window.scroll(0,ref.current.offsetTop-50);
    useEffect(()=>{
        setElrefs((refs)=>Array(20).fill().map((_, j)=>refs[j] || createRef()))
    },[]);

    useEffect(()=>{
        if(i===activeArticles && elrefs[activeArticles]){
            scrollToRef(elrefs[activeArticles])
        }
    },[i,activeArticles,elrefs])
    return (
        <Card ref={elrefs[i]} className={classNames(classes.Card,activeArticles===i?classes.activeCard:null)}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage}/>
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString() }</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.CardActions}>
                <Button size="small" colo="primary">Read More</Button>
                <Typography variant="h5" color="textSecondary">{i+1}</Typography>
            </CardActions>
        </Card>

    );
}

export default MCard;