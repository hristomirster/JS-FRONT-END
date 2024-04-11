function solve(input) {
    let baristaCount = Number(input.shift());
    let team = {};

    for (let i = 0; i < baristaCount; i++) {
        let [name, shift, cofeeTypes] = input[i].split(" ");
        team[name] = {
            shift: shift,
            cofeeTypes: cofeeTypes.split(","),
        };
    };

    let commandLine = input.shift();

    while (commandLine != "Closed") {
        const [command, name, ...args] = commandLine.split(" / ");
        switch (command) {
            case "Prepare": //"Prepare / Alice / day / Espresso"
                if (
                    team[name].shift === args[0] &&
                    team[name].cofeeTypes.includes(args[1])
                ) {
                    console.log(`${name} has prepared a ${args[1]} for you!`);
                } else {
                    console.log(
                        `${name} is not available to prepare a ${args[1]}.`
                    );
                }
                break;
            case "Change Shift": // "Change Shift / Bob / night",
                team[name].shift = args[0];
                console.log(`${name} has updated his shift to: ${args[0]}`);
                break;
            case "Learn": // "Learn / Carol / Latte",
                if (team[name].cofeeTypes.includes(args[0])) {
                    console.log(`${name} knows how to make ${args[0]}.`);
                } else {
                    console.log(
                        `${name} has learned a new coffee type: ${args[0]}.`
                    );
                    team[name].cofeeTypes.push(args[0]);
                }
                break;
        }

        // console.log(command, name, args[0], args[1]);

        commandLine = input.shift();
    }

    for (const name in team) {
        console.log(
            `Barista: ${name}, Shift: ${team[name].shift}, Drinks: ${team[
                name
            ].cofeeTypes.join(", ")}`
        );
    }
    // console.log(team);
}

solve([
    "3",
    "Alice day Espresso,Cappuccino",
    "Bob night Latte,Mocha",
    "Carol day Americano,Mocha",
    "Prepare / Alice / day / Espresso",
    "Change Shift / Bob / night",
    "Learn / Carol / Latte",
    "Learn / Bob / Latte",
    "Prepare / Bob / night / Latte",
    "Closed",
]);
