// https://www.codewars.com/kata/abbreviate-a-two-word-name/javascript

function abbrevName(name){
  const str = name.split(" ");
  return `${str[0][0]}.${str[1][0]}`.toUpperCase();
}
