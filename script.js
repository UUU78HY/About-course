document.addEventListener("DOMContentLoaded", () => {
    const alertBtn = document.getElementById("alertBtn");
    const addBtn = document.getElementById("addBtn");
    const userInput = document.getElementById("userInput");
    const itemList = document.getElementById("itemList");

    // 1. Explore Button Alert & Scroll
    alertBtn.addEventListener("click", () => {
        document.getElementById("features").scrollIntoView({ behavior: "smooth" });
    });

    // 2. Add New Item Functionality
    function addItem() {
        const textValue = userInput.value.trim();

        if (textValue === "") {
            alert("Kripya pehle kuch text type karein!");
            return;
        }

        // Naya <li> create karna
        const li = document.createElement("li");
        li.textContent = textValue;
        li.classList.add("fade"); // Fade animation apply karna

        // List me insert karna
        itemList.appendChild(li);

        // Input clear karna
        userInput.value = "";
    }

    // Button click aur Enter key dono par trigger karein
    addBtn.addEventListener("click", addItem);
    
    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            addItem();
        }
    });
});