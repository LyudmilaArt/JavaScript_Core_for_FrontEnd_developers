var login = prompt('Whos there?', '');
var password;
switch (login) {
    case 'Cancel': {
        console.log('Canceled');
    }
    break;
case 'Other': {
    console.log('I dont now you');
}
break;
case 'Admin': {
    console.log('Password?');
var password = prompt('Password please!');
if (password == 'Cancel')
    console.log('Canceled');
else if (password == 'Other')
    console.log('Wrong password');
else if (password == 'TheMaster')
    console.log('Welcome!');}
}
