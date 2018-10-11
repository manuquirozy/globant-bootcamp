let a = fetch('https://randomuser.me/api/?results=100');
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
        img.src=author.picture.large;
        figCap.innerHTML=author.name.first+' '+author.name.last;  
        miSection.append(article);      
        article.append(fig);
        fig.append(img);
        fig.append(figCap);
        article.addEventListener('click', (click)=>{
            console.log(click);
            const favarticle= document.createElement('article');
            const favfig= document.createElement('figure');
            const favimg=document.createElement('img');
            const favfigCap=document.createElement('figcaption');  
            favfig.innerHTML=click.path[0].outerHTML; 
            favfigCap.innerHTML=click.path[1].innerText;   
            miAside.append(favarticle);
            favarticle.append(favfig);                
            favfig.append(favfigCap);                         
        })
    });
});