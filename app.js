const search = ()=>{
    const searchBox = document.getElementById('search-item').value.toUpperCase();
    const storeElemet = document.getElementById('product-list');
    const product = document.querySelectorAll('.product');
    const productName = storeElemet.getElementsByTagName('h2');
    for(let i = 0; i< productName.length;i++){
        let match = product[i].getElementsByTagName('h2')[0];
        if(match){
            let textvalue =  match.textContent || match.innerHTML
            if(textvalue.toUpperCase().indexOf(searchBox)>-1){
                product[i].style.display ="";
            }
            else{
                product[i].style.display="none";
            }
        }
    }

}