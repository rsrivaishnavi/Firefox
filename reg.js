function check()
{
    let ps=document.getElementById("sp").value;
    let cp=document.getElementById("cp").value;
    console.log(ps)
    console.log(cp)
    if (ps==cp)
    document.getElementById('res').innerHTML="You have succesfully registered";
    else
    document.getElementById('res').innerHTML="Please check your password";

}