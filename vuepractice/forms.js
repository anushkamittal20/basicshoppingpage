
function buttonClicked(e) {
    e.preventDefault();
    window.alert("Review Submitted")
    let nam=document.getElementById("name").value;
    let rev=document.getElementById("rev").value;
    let rate=document.getElementById("rating").value;
    console.log(nam,rev,rate);
    document.getElementById("form").className = "hidden";
    document.getElementById('review').innerHTML= "Review-<br>Name- "+nam+"<br>Review- "+rev+"<br>Rate- "+rate;
    
   
    
}
document.getElementById('sub').addEventListener('click',buttonClicked);