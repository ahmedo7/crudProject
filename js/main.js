var productNameInput = document.getElementById('productNameInput');
var productPriceInput = document.getElementById('productPriceInput');
var productGategoryInput = document.getElementById('productGategoryInput');
var productDescriptionInput = document.getElementById('productDescriptionInput');
var addBtn = document.getElementById('addBtn');
var updateBtn = document.getElementById('updateBtn');
var updateComplete ;
var productContainer ;
  
if(localStorage.getItem('myPoduct') != null){

productContainer = JSON.parse(localStorage.getItem('myPoduct'));

displayProduct(productContainer);

}
else{
    var productContainer = [] ;

}

function addProduct()
{
var products = {
    name : productNameInput.value ,
    price : productPriceInput.value ,
    gategory : productGategoryInput.value ,
    desc : productDescriptionInput.value
}
productContainer.push(products);
 localStorage.setItem('myPoduct', JSON.stringify(productContainer));
displayProduct(productContainer);
clearProduct();
}

function clearProduct(){
    productNameInput.value='';   
    productPriceInput.value='';
    productGategoryInput.value='';
    productDescriptionInput.value='';
}

function displayProduct(productList){

 var box = ``;
 for( var i = 0 ; i < productList.length ; i++){
  box += `<tr>
  <td>${i+1}</td>
  <td>${productList[i].name}</td>
  <td>${productList[i].price}</td>
  <td>${productList[i].gategory}</td>
  <td>${productList[i].desc}</td>
  <td><button onclick="updateProduct(${i})" class="btn btn-warning">update</button></td>
  <td><button onclick="deleteProduct(${i});" class="btn btn-danger">delete</button></td>

</tr>`

 }

document.getElementById('tableBody').innerHTML = box;

}


function searchProduct(searchTerm){
    var searchResult = [];

for(var i=0 ; i< productContainer.length ; i++){

if( productContainer[i].name.toLowerCase().includes(searchTerm.toLowerCase()) == true){


    searchResult.push(productContainer[i]);
}
}

displayProduct(searchResult);

}




function deleteProduct(deleteIndex){

 productContainer.splice(deleteIndex, 1);
 localStorage.setItem('myPoduct' , JSON.stringify(productContainer));

displayProduct(productContainer);

}




function updateProduct(updateForm){

productNameInput.value = productContainer[updateForm].name;
productPriceInput.value = productContainer[updateForm].price;
productGategoryInput.value = productContainer[updateForm].gategory;
productDescriptionInput.value = productContainer[updateForm].desc;

updateBtn.classList.replace('d-none' , 'd-inline-block');
addBtn.classList.add('d-none');
updateComplete = updateForm ;
}

function updateFormSystem(){

productContainer[updateComplete].name = productNameInput.value ;
productContainer[updateComplete].price = productPriceInput.value ;
productContainer[updateComplete].gategory = productGategoryInput.value ;
productContainer[updateComplete].desc = productDescriptionInput.value ;


localStorage.setItem('myPoduct' , JSON.stringify(productContainer));

displayProduct(productContainer);

clearProduct();

}