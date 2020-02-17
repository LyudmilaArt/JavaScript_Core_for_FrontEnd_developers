 var login = prompt('Whos there?', '');
 var password;

 if (login == 'Cancel') console.log('Canceled');
 else if (login == 'Other')
     console.log('I dont now you');
 else if (login == 'Admin') {
     console.log('Password?');
     var password = prompt('Password please!');
     if (password == 'Cancel')
         console.log('Canceled');
     else if (password == 'Other')
         console.log('Wrong password');
     else if (password == 'TheMaster')
         console.log('Welcome!');
 }