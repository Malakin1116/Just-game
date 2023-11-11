let playerName = prompt("Enter your name:");
document.getElementById("story").textContent = `Welcome, ${playerName}! You find yourself in a dark forest. Make decisions to survive.`;

document.getElementById("leftButton").addEventListener("click", function() {
    document.getElementById("story").textContent = "You chose the left path. Keep going.";

    let choice = prompt("You come across a river. Choose what to do: cross a bridge or swim (type 'bridge' or 'swim'):");

    if (choice.toLowerCase() === "bridge") {
        document.getElementById("story").textContent = "You successfully crossed the bridge and continue your journey. You survive!";
    } else if (choice.toLowerCase() === "swim") {
        document.getElementById("story").textContent = "Unfortunately, you couldn't swim across the river and got stuck in the water. Game over.";
    } else {
        document.getElementById("story").textContent = "Invalid choice. Game over.";
    }
});

document.getElementById("rightButton").addEventListener("click", function() {
    document.getElementById("story").textContent = "You chose the right path. Keep going.";

    let choice = prompt("You encounter a bear. Choose what to do: fight or run (type 'fight' or 'run'):");

    if (choice.toLowerCase() === "fight") {
        document.getElementById("story").textContent = "You successfully defeated the bear and continue your journey. You survive!";
    } else if (choice.toLowerCase() === "run") {
        document.getElementById("story").textContent = "You ran away and managed to avoid the bear. You survive!";
    } else {
        document.getElementById("story").textContent = "Invalid choice. Game over.";
    }
});
