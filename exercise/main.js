let a = fetch('https://randomuser.me/api/?results=10');
let b= a.then(function(results){
    return results.json();
}). then(here=>{
    const authors=here.results;
    const miSection=document.querySelector('section');
    const miAside=document.querySelector('aside');
    authors.forEach(author => {
        const article=document.createElement('article');
        const fig= document.createElement('figure');
        const img=document.createElement('img');    
        const figCap=document.createElement('figcaption');  
        const buttonFav=document.createElement('button');  
        const t=document.createTextNode("Favorite");
        img.src=author.picture.large;
        figCap.innerHTML=author.name.first+' '+author.name.last;  
        miSection.append(article);      
        article.append(fig);
        article.classList.add(author.name.first);
        fig.append(img);
        fig.append(figCap);
        fig.append(buttonFav);
        buttonFav.append(t);
        buttonFav.classList.add(author.name.first);
        buttonFav.addEventListener('click', (click)=>{
            console.log(click);  
            const favArticle= document.querySelector("."+click.srcElement.className);
            favArticle.classList.add("favorite");
            miAside.append(favArticle);                
        })
    });
});