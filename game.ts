#! usr/bin/env node

import inquirer from "inquirer";
const systemnumber = Math.floor(Math.random() * 6);


 const answer = await inquirer.prompt([
    {
       message: "choose randomnumber between 1-6",
       type: "number",
        name: "randomnumber",
    }
]);
if (answer.randomnumber === systemnumber) {
    console.log("congratulations! you choose a correct number");
}
else {
    console.log("you choose a wrong number");
}
