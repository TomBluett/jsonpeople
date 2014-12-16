var people = [
  {
    firstName: 'Tony',
    lastName: 'Stark',
    secret: 'He is an Avenger.'
  }
];

$('#menuToggle').on('click',
function() {
  $('nav ul').toggle(400);
});

function listPeople() {
  $.each(people, function(index, person) {
    var item = $('#template').clone().attr('id', '');
    item.html(item.html().replace('{{ person.firstName }}', person.firstName)
      .replace('{{ person.lastName }}', person.lastName)
      .replace('{{ person.secret }}', person.secret));
    $('#people').append(item);
    item.removeClass('hidden');
  });
}

listPeople();
