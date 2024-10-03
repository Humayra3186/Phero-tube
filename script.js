//load category

const loadCategory = ()=>{
    fetch(' https://openapi.programming-hero.com/api/phero-tube/categories')
    .then(res => res.json())
    .then(data =>showCategory(data.categories))
    .catch(error=> console.log(error))
}

const showCategory = (data)=>{
    const container = document.getElementById('category-container')
    data.forEach(item => {
       const div = document.createElement('div')
      
       div.innerHTML = `<button id="btn-${item.category_id}" class="btn"> ${item.category}`

       container.append(div);
        
    });
}


// video load

const loadVideo=()=>{
   
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(res=>res.json())
    .then(data=>showVideos(data.videos))
    .catch(error=> console.log(error))
}

const showVideos = (videos)=>{

    const container = document.getElementById('video-container')

    videos.forEach(video =>{
        const div = document.createElement("div")
        div.innerHTML=`
                    <div class="card card-compact ">
 
    <img
      src=${video.thumbnail}
      alt="Shoes"
      class="h-[12rem] lg:h-40 w-full rounded-md" />
  
  <div class="py-4">
    <div class="h-9 w-9  ">
      <img class="h-full w-full rounded-full" src=${video.authors[0].profile_picture} alt="">
   
    </div>
    
    </div>`

    container.append(div)
    })

}

loadCategory()
loadVideo()


