    // (function()
        // {


            let temporaryVariable, ReverseValue,
            newValue = 0;
        // let localVariable = document.getElementById("number");//.value;
        // temporaryVariable = localVariable.value;
        localVariable = 1213;
        temporaryVariable = localVariable;
        console.log(temporaryVariable);

        // function execute() {


        console.log(Number(321.3323))

        while (localVariable > 0) {
            ReverseValue = localVariable % 10;
            // console.log(ReverseValue);
            // console.log("--------------");
            newValue = (newValue * 10) + ReverseValue;
            console.log(newValue);
            localVariable = parseInt(localVariable / 10);

        }
        console.log(newValue)
        if (temporaryVariable === newValue) {
            console.log("It is a palindrome");
        }
        else {
            console.log("It is a not palindrome");
        }
        // }








    // }
        // )();
