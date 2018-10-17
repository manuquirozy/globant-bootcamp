
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
        const buttonDelete=document.createElement('button');
        const t2=document.createTextNode("Delete");
        img.src=author.picture.large;
        figCap.innerHTML=author.name.first+' '+author.name.last;  
        miSection.append(article);      
        article.append(fig);
        article.classList.add(author.name.first);
        fig.append(img);
        fig.append(figCap);
        buttonFav.append(t);
        buttonFav.classList.add(author.name.first);
        buttonDelete.append(t2);
        buttonDelete.classList.add(author.name.first);
        fig.append(buttonFav);
        fig.append(buttonDelete);
        buttonFav.addEventListener('click', (click)=>{
            let favArticle= document.querySelector("."+click.srcElement.className);
            if(click.path[2].className.includes("favorite")){
                miSection.append(favArticle);      
                favArticle.classList.remove("favorite");    
            }
            else{
                miAside.append(favArticle);      
                favArticle.classList.add("favorite");    
            }         
        })
        buttonDelete.addEventListener('click', (click)=>{ 
            let favArticle= document.querySelector("."+click.srcElement.className);
            favArticle.classList.add("delete");               
        })
    });
});