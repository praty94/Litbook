import React from 'react';
import Story from './Story';
const stories_data = [
    {
        contentImg:"https://imgur.com/w3kmr4x.jpg",
        userImg:"https://imgur.com/njUtYEa.jpg",
        title:"C0PR"
    },
    {
        contentImg:"https://imgur.com/jZCe97t.jpg",
        userImg:"https://imgur.com/trla6Fe.jpg",
        title:"Alexa"
    },   
    
    {
        contentImg:"https://imgur.com/5S6KF0w.jpg",
        userImg:"https://imgur.com/YI15KbN.jpg",
        title:"Ronaldo"
    },  
    {
        contentImg:"https://imgur.com/7EWhDbn.jpg",
        userImg:"https://imgur.com/NhWQIIQ.jpg",
        title:"John"
    },
    {       
        contentImg:"https://imgur.com/CyihOwS.jpg",
        userImg:"https://imgur.com/Xv3IkAN.jpg",
        title:"Cortana"
    }
]
function Stories() {
    return (
        <div style={{padding:10,display:'flex',justifyContent:'center'}}>
            {stories_data.map((story,index)=>{
                return <Story {...story} key={index}></Story>
            })}
        </div>
    )
}

export default Stories
