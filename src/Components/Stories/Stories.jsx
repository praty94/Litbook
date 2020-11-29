import React from 'react';
import Story from './Story';
const stories_data = [
    {
        contentImg:"https://upload.wikimedia.org/wikipedia/en/thumb/9/9f/Cyberpunk_2077_box_art.jpg/220px-Cyberpunk_2077_box_art.jpg",
        userImg:"data:image/png;base64,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",
        title:"C0PR"
    },
    {
        contentImg:"https://images.unsplash.com/photo-1509114397022-ed747cca3f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        userImg:"https://i.pinimg.com/originals/71/cc/ea/71cceac2b5363fae6e8ad00f940b68c4.jpg",
        title:"Alexa"
    },   
    
    {
        contentImg:"https://cdn.wionews.com/sites/default/files/styles/story_page/public/2020/06/05/143417-untitled-design-54.jpg",
        userImg:"https://thumbor.forbes.com/thumbor/fit-in/416x416/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5ec593cc431fb70007482137%2F0x0.jpg%3Fbackground%3D000000%26cropX1%3D1321%26cropX2%3D3300%26cropY1%3D114%26cropY2%3D2093",
        title:"Ronaldo"
    },  
    {
        contentImg:"https://images.unsplash.com/photo-1519444793799-fb6e09f43bfb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60",
        userImg:"https://i.pinimg.com/236x/0a/8a/84/0a8a84a639106a8c450a24ebdbb4eebb.jpg",
        title:"John"
    },
    {       
        contentImg:"https://d2skuhm0vrry40.cloudfront.net/2020/articles/2020-07-31-10-28/halo-infinite-multiplayer-is-free-to-play-report-1596187669355.jpg/EG11/thumbnail/750x422/format/jpg/quality/60",
        userImg:"https://www.extremetech.com/wp-content/uploads/2016/07/Cortana-Feature-640x354.jpg",
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
