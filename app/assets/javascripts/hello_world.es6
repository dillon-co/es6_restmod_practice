class HelloWorld {
  constructor(name) {
    this.name = name;
  }

  function sayName() {
    alert(this.name);
  }
}
$(function{
  var hello = document.getElementById("hello");
  $(hello).on('click', function(){
    alert("Working here")
    let thing = new HelloWorld("Dillon Was Here");
    thing.sayName;
  })
});
