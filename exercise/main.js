let a = fetch('https://randomuser.me/api/?results=100');
let b= a.then(function(resultados){
    return resultados.json();
}). then(here=>{
    const authors=here.results;
    const miSection=document.querySelector('section');
    authors.forEach(author => {
        const figCap=document.createElement('figcaption');
        const img=document.createElement('img');
        const article=document.createElement('article');
        img.src=author.picture.large;
        figCap.innerHTML=author.name.first+' '+author.name.last;  
        miSection.append(article);      
        article.append(img);
        article.append(figCap);
        article.addEventListener('click', ()=>{
            console.log("click");
        })
    });
});