function showPic(picNode)
{
    var text=picNode.getAttribute("title");
    var source=picNode.getAttribute("href");
    var placeHolder=document.getElementById("placeHolder");
    var o=document.getElementById("description");
    o.firstChild.nodeValue=text;
    placeHolder.setAttribute("src",source);
}

function count()
{
   alert(document.getElementsByTagName("ul")[0].childNodes.length);
}