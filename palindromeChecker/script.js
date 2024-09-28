const userInput = document.getElementById('text-input');
const checkPalindromeBnt = document.getElementById('check-btn');
const displayResult = document.getElementById('result');

function isPalindrome(str){
  let check = true;
  if(str === ''){
    alert('Please input a value');
    return;
  }
  
  displayResult.replaceChildren();
  
  const newStr = str.toLowerCase().replace(/[^\w]|_/g,"").split("");
  let i=0;
  let j=newStr.length-1;
  while(i<j){
    if(newStr[i] === newStr[j]){
      i++;
      j--;
    }else{
      check = false;
      break;
    }
  }
  let resultMsg = `<strong>${str}</strong> ${check ? 'is' : 'is not'} a palindrome.`;
  const pTag = document.createElement('p');
  pTag.className = "user-input";
  pTag.innerHTML = resultMsg;
  displayResult.appendChild(pTag);
  
  displayResult.classList.remove('hidden');
}

checkPalindromeBnt.addEventListener('click', () => {
  isPalindrome(userInput.value);
  userInput.value = '';
});

