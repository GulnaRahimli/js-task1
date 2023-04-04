// !! task-1 


function carName (name)

{ return ( name )};

function carYear (year)
{return year};

function fuelConsumed ( l )
{
return (l )
}

function carData ()
{let result= `avtomobilin markasi : ${carName ("BMW" , "2014")} ---- avtomobilin istehsal olundugu il: ${carYear(2014)};
avtomobilin serf etdiyi yanacag 100 km:13 ${fuelConsumed("l")};
`

console.log(result);
}

carData()


// !! task-2


let login = "Gulnar"
let passWordd = "Gulnar1998!"

let userName = prompt ("Include in your name ");
let passWord = prompt ("Include in your password");

console.log(userName , passWord);

if (login==userName,
    passWord==passWordd) 
    {
      alert  ("Your entry is successful")
    }
else 
    {

       alert ("Your password or name is incorrect")
    }