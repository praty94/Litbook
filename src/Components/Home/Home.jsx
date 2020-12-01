import React, { useEffect, useState, useContext } from 'react';
import homeStyles from './HomeStyles';
import LeftSideBar from './LeftSideBar';
import RightSideBar from './RightSideBar';
import Stories from '../Stories/Stories';
import StatusUpdateWidget from '../StatusUpdateWidget/StatusUpdateWidget';
import FeedCard from '../FeedCard/FeedCard';
import db from '../../Firebase/Firebase';
import { AppContext } from '../../Context/Context';
import ToastNotification from '../ToastNotification/ToastNotification';
import SkeletonFeedCard from '../FeedCard/SkeletonFeedCard';

function Home() {
    const classes = homeStyles();
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [{ user }] = useContext(AppContext);

    useEffect(() => {
        setIsLoading(true);
        db.collection('posts').orderBy("timeStamp", "desc").onSnapshot(snapshot => {
            setPosts(snapshot.docs.map(doc => ({ id: doc.id, data: doc.data() })))
            setIsLoading(false);
        });
    }, []);
    return (
        <div className={classes.container}>
            <ToastNotification message="This feature is yet to be implemented!"></ToastNotification>
            <div className={classes.leftSection}>
                <LeftSideBar></LeftSideBar>
            </div>
            <div className={classes.midSection}>
                <Stories></Stories>
                <StatusUpdateWidget></StatusUpdateWidget>
                {isLoading ? <SkeletonFeedCard></SkeletonFeedCard> : null}
                {posts.map(post => (
                    <FeedCard key={post.id} {...post.data} postId={post.id} userId={user.uid}></FeedCard>
                ))}

            </div>
            <div className={classes.rightSection}>
                <RightSideBar></RightSideBar>
            </div>
        </div>
    )
}

export default Home
