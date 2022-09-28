//file:///Users/kim/Downloads/FT-M2-master/04-Ajax/homework/index.html
let URL = 'http://localhost:5000/amigos'

$('#boton').click(function(){
    $("#lista").empty()
    $.get(`${URL}`, function(data){
        console.log(data)
        data.forEach(e => {
            // let li = document.createElement8("li")
            // li.id= e.id;
            // li.innerText= e.name
            // let list  = document.getElementById('lista')
            // list.appendChild(li)
    
            $('#lista').append(`<li id="${e.id}">${e.name} X</li>`)
        });
    });
    
})

$("#search").click(function(){
    let id = $('#input').val()
    console.log(id);
    if(id){
        $.get(`${URL}/${id}`, function (data) {
            $('#amigo').text(`${data.name}`)
        })
    }
    
})

$("#delete").click(function(){
    let id = $('#inputDelete').val()
    if(id){
       $.ajax({
           url:`${URL}/${id}`,
           type: "DELETE",
           success:function () {
               $('#success').text("Amigo eliminado")
               
           }
       })}
 })
   

