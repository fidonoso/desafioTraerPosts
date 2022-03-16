const getPosts=async()=>{
    try{
        let solicitud = await fetch('https://jsonplaceholder.typicode.com/posts');
        let data = await solicitud.json();
        let tpl=``
        data.forEach(el=>{
            tpl+=`<li><p><strong>${el.title}</strong><br>${el.body}</p></li>`
        })
        let tpl2=
        `<ul>
            ${tpl}
            </ul>`
        document.getElementById('post-data').innerHTML=tpl2

    }catch(e){
        console.log(`Error : ${e}`)
    }
 
}