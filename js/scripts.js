function Contact(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.addresses = [];
}

Contact.prototype.fullName = function(){
  return this.firstName + " " + this.lastName;
}

function Address(type, street, city, state){
  this.addressType = type;
  this.street = street;
  this.city = city;
  this.state = state;
}

Address.prototype.fullAddress = function(){
  return this.addressType + " " + this.street + " " + this.city + " " + this.state;
}

function resetFields() {
    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
    $("input.new-street").val("");
    $("input.new-city").val("");
    $("input.new-state").val("");
    $("input.new-type").val("");
}




$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' +
                                 '<div class="form-group">' +
                                   '<label for="new-type">Address type: Home, Mailing, or Business.</label>' +
                                   '<input type="text" class="form-control new-type">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-street">Street</label>' +
                                   '<input type="text" class="form-control new-street">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-city">City</label>' +
                                   '<input type="text" class="form-control new-city">' +
                                 '</div>' +
                                 '<div class="form-group">' +
                                   '<label for="new-state">State</label>' +
                                   '<input type="text" class="form-control new-state">' +
                                 '</div>' +
                               '</div>');
  });

  $("#new-contact").submit(function(event) {
    event.preventDefault();
    var fname = $("#new-first-name").val();
    var lname = $("#new-last-name").val();
    var newContact = new Contact(fname, lname);

    $(".new-address").each(function() {
      var inputtedType = $(this).find("input.new-type").val();
      var inputtedStreet = $(this).find("input.new-street").val();
      var inputtedCity = $(this).find("input.new-city").val();
      var inputtedState = $(this).find("input.new-state").val();
      var newAddress = new Address(inputtedType, inputtedStreet, inputtedCity, inputtedState);
      newContact.addresses.push(newAddress);
    });

    $("ul#contacts").append("<li><span class='contact'>" + newContact.fullName() + "</span></li>");

    $('#contacts').last().click(function(){
      $('#show-contact').show();
      $('#show-contact h2').text(newContact.firstName);
      $('.first-name').text(newContact.firstName);
      $('.last-name').text(newContact.lastName);
      $("ul#addresses").text("");
        // debugger;
      newContact.addresses.forEach(function(address){
        $('ul#addresses').append("<li>" + address.fullAddress() + "</li>");
      });
    });

    resetFields();
    // $("input#new-first-name").val("");
    // $("input#new-last-name").val("");


  });

});
