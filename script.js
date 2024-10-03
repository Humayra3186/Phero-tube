//time convert

const timeSet = (time) =>{
    const hour = parseInt(time / 3600);
    const min = parseInt((time%3600) / 60);
    const sec = parseInt(((time%3600) / 60) % 60);

    return `${hour} hour ${min} min ${sec} sec`
}

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
      class="h-[12rem] lg:h-40 w-full rounded-md relative" />

     

      ${ video.others.posted_date?.length === 0 ? "":
       `<span class="text-[0.8rem] lg:text-[0.6rem] bg-black text-white absolute top-[10rem] lg:top-[9rem] right-2">${timeSet(video.others.posted_date)}</span>`}
    
  
  <div class="py-4 flex gap-3">
    <div class="h-9 w-9  ">
      <img class="h-full w-full rounded-full" src=${video.authors[0].profile_picture} alt="">
   
    </div>
    
    <div>
       <h2 class="text-lg md:text-base font-semibold">${video.title}</h2>

       <div class="flex gap-2">
       <p class="text-[0.8rem] text-neutral-500"> ${video.authors[0].profile_name}</p>
       ${
        video.authors[0].verified === true? `<img class="w-5" src="https://img.icons8.com/?size=96&id=D9RtvkuOe31p&format=png"/>` : ""
       }
       </div>
       <p class="text-[0.8rem] text-neutral-500"> ${video.others.views} views</p>
    </div>
    </div>`

    container.append(div)
    })

}

loadCategory()
loadVideo()


