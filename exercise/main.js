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
        const buttonUndo=document.createElement('button');
        const t2=document.createTextNode("Undo");
        img.src=author.picture.large;
        figCap.innerHTML=author.name.first+' '+author.name.last;  
        miSection.append(article);      
        article.append(fig);
        article.classList.add(author.name.first);
        fig.append(img);
        fig.append(figCap);
        buttonFav.append(t);
        buttonFav.classList.add(author.name.first);
        buttonUndo.append(t2);
        buttonUndo.classList.add(author.name.first);
        fig.append(buttonFav);
        fig.append(buttonUndo);
        buttonFav.addEventListener('click', (click)=>{
            console.log((click.path[3]).includes("aside"));
            if(click.path[3]!=="hola"){
                console.log("HOLA");
            }
            let favArticle= document.querySelector("."+click.srcElement.className);
            miAside.append(favArticle);                
        })
        buttonUndo.addEventListener('click', (click)=>{ 
            let favArticle= document.querySelector("."+click.srcElement.className);
            miSection.append(favArticle);                
        })
    });
});