function check1(someVar)
{
    if (someVar == 3)
    {
        document.getElementById(String(someVar)).style.background='#00ff00';
        // document.getElementById("answer").textContent="Correct";
    }
    else
    {
        document.getElementById(String(someVar)).style.background='#ff0000';
        // document.getElementById("answer").textContent="Incorrect";
    }

    // document.getElementById("answer").style.visibility="visible";

    for (var i = 1; i < 5; i++)
    {
        if (i != someVar)
        {
            document.getElementById(String(i)).disabled = true;
        }
    }
}

function check2(someVar)
{
    if (someVar == 7)
    {
        document.getElementById(String(someVar)).style.background='#00ff00';
        // document.getElementById("answer").textContent="Correct";
    }
    else
    {
        document.getElementById(String(someVar)).style.background='#ff0000';
        // document.getElementById("answer").textContent="Incorrect";
    }

    // document.getElementById("answer").style.visibility="visible";

    for (var i = 5; i < 8; i++)
    {
        if (i != someVar)
        {
            document.getElementById(String(i)).disabled = true;
        }
    }
}