import React, { useEffect, useState,useContext } from 'react';
import homeStyles from './HomeStyles';
import LeftSideBar from './LeftSideBar';
import Stories from '../Stories/Stories';
import StatusUpdateWidget from '../StatusUpdateWidget/StatusUpdateWidget';
import FeedCard from '../FeedCard/FeedCard';
import db from '../../Firebase/Firebase';
import {AppContext} from '../../Context/Context';

function Home() {
    const classes = homeStyles();
    const [posts, setPosts] = useState([]);
    const [{ user }] = useContext(AppContext);
    
    useEffect(() => {
        db.collection('posts').orderBy("timeStamp", "desc").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
        });
    }, []);
    return (
        <div className={classes.container}>
            <div className={classes.leftSection}>
                <LeftSideBar></LeftSideBar>
            </div>
            <div className={classes.midSection}>
                <Stories></Stories>
                <StatusUpdateWidget></StatusUpdateWidget>
                {posts.map(post => (
                    <FeedCard key={post.id} {...post.data} postId={post.id} userId={user.uid}></FeedCard>
                ))}

            </div>
            <div className={classes.rightSection}></div>
        </div>
    )
}

export default Home
