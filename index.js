function scuberGreetingForFeet(a){
  let result;
  if ( a <= 400 ) 
    result = 'This one is on me!';
  else if ( a > 400 && a < 2500)
    result = 'I will gladly take your thirty bucks.';
  else if ( a >= 2501)
    result = 'No can do.';
    return result;

  
}

function ternaryCheckCity(a){
  console.log(a)
  return ( a === 'NYC' ? 'Ok, sounds good.' : 'No go.');

}

function switchOnCharmFromTip(a){
switch (a) {
  case 'generous':
    return 'Thank you so much.'
  break;
  case 'not as generous':
    return 'Thank you.'
  break;
  default: 
  return 'Bye.'
}
    

}