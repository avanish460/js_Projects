const form = document.getElementById("form");
const convertbtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

const convertToRoman = (num) => {
    const reference = [
        ['M',1000],
        ['CM',900],
        ['D',500],
        ['CD',400],
        ['C',100],
        ['XC',90],
        ['L',50],
        ['XL',40],
        ['X',10],
        ['IX',9],
        ['V',5],
        ['IV',4],
        ['I',1],
    ];

    const result = [];

    reference.forEach((arr)=>{
        while(num >= arr[1]){
            result.push(arr[0]);
            num -= arr[1];
        }
    });
    return result.join('');
};

const isValid = (str, num) => {
    let errMsg = '';
    if(!str || str.match(/[e.]/g))
        errMsg = 'Please enter a valid number.';
    else if(num < 1)
        errMsg = 'Please enter a number greater than or equal to 1.';
    else if(num > 3999)
        errMsg = 'Please enter a number less than or equal to 3999.';
    else
        return true;

    //Handle error text and output styling
    output.innerText = errMsg;
    output.classList.add('alert');

    return false;
};

const clearOutput = () => {
    output.innerText = '';
    output.classList.remove('alert');
};

form.addEventListener('submit', e => {
    e.preventDefault();
    updateUI();
});

convertbtn.addEventListener('click', ()=>{
 updateUI();
});

const updateUI = () => {
    const numStr = document.getElementById('number').value;
    const num = parseInt(numStr, 10);

    output.classList.remove('hidden');

    clearOutput();

    if(isValid(numStr, num)){
        output.innerText = convertToRoman(num);
    }
};


