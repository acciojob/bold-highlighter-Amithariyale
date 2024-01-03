const boldItems=document.querySelectorAll('strong');
function highlight() {
    //Write your code here
	boldItems.forEach(item=>item.style.color='green');
	
}


function return_normal() {
    //Write your code here

    boldItems.forEach(item=>item.style.color='black');
}
