

  function myFunction() {
    window.open("http://www.google.com/");
  }

  var elements = document.getElementsByClassName("column");
  var elements1 = document.getElementsByClassName("column-m");



  // Declare a loop variable
  var i;

  // List View
  function listView() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.width = "77%";
    }
  }
// list -m
  function listView() {
    for (i = 0; i < elements1.length; i++) {
      elements1[i].style.width = "100%";
    }
  }

  // Grid View
  function gridView() {
    for (i = 0; i < elements.length; i++) {
      elements[i].style.width = "25%";
    }
  }

  // List 2 view
      function list2View(){
        for (i=0; i<elements.length; i++){
          elements[i].style.width = "42%";
        }
      }

//select all check box
  function toggle(source) {
    var checkboxes = document.querySelectorAll('input[type="checkbox"]');
    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i] != source)
            checkboxes[i].checked = source.checked;
    }
}


function getSelected(source) {
  var  items  = [];
  var gridlist = document.getElementById(source);


  var checkboxes =gridlist.querySelectorAll('input[type="checkbox"]');
  for (var i = 0; i < checkboxes.length; i++) {
      if(checkboxes[i].checked)
        items.push( checkboxes[i].val);
  }
  return items;
}

// open and close form
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}




// sort by alphapet


  //---------------------------------------------------------


//test

$(function(){
  $('#filter').keyup(function(){
      var val = $(this).val().toUpperCase();
      $('#example > tbody > tr').each(function(index , element){
          if($(this).text().toUpperCase().indexOf(val)<0)
              $(this).hide();
          else
              $(this).show();
      });
  });
});







$(function () {
  $('[data-toggle="popover"]').popover()
})

$(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})

