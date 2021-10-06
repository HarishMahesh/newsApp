async function displayNews(type,btnPosition)
{
    const newsPart = document.getElementById('news-portion')
    const btn = document.getElementsByClassName('type');
    for (i =0; i < 8; ++i)
    {
        btn[i].setAttribute('style','color:#ffffff')
    }
    newsPart.innerHTML = '';
    let data;
    let jsonData;
    try{
        data = await fetch(`https://gnews.io/api/v4/top-headlines?token=24061ac229398273e9ab78946f81cd5b&lang=en&country=in&topic=${type}`);
 
        jsonData = await data.json();
    }catch{
        alert('Try loading this page after some time')
    }
    const news = jsonData.articles;
    
    for (i in news)
    {
        let {title,description,url,image,source} = news[i];
        let sourceName = source.name;
        newsPart.innerHTML += `<div class="col-sm-6 mt-3 total-new-container">
        <div class="news-container">
        <div class="news-img">
            <img src="${image}" alt="">
        </div>
        <div>
        <a href="${url}" target="_blank">
            <h3>${title}</h3>
        </a>
        <p>${description}</p>
        <p class="source"><b>Source :</b>${sourceName}</p>
        </div>
        </div>
    </div>`
    }

    btn[btnPosition].setAttribute('style','color:#52dc57')
}

displayNews('breaking-news',0)