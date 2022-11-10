
const Arr = ['paper','rock','scissors']
const num = Math.floor(Math.random() * 3) ;
const userInput =prompt('Enter one of those \'Paper\' \'Rock\' \'Scissors.\'').toLowerCase()
let outputUser = document.getElementById("outputUser");
const outputComputer = document.getElementById('outputComputer');
const bord = document.getElementById("bord");
outputUser.innerHTML = "User: "+userInput ;
outputComputer.innerHTML = "Computer: "+ Arr[num]


    if(userInput === Arr[num])
    {
            bord.innerHTML = 'Drow'

    }
    else if(userInput === 'paper' && Arr[num] === 'rock'){
        bord.innerHTML = "Let's go u win!"
    }
   else if(userInput === 'rock' && Arr[num] === 'scissors'){
    bord.innerHTML = "Let's go u win!"
    }

    else if(userInput === 'scissors' && Arr[num] ==='paper'){
        bord.innerHTML = "Let's go u win!"
    }
    else{
        bord.innerHTML = 'sorry u lose..'
    }

