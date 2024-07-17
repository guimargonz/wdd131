document.addEventListener("DOMContentLoaded", () => {
    // Set the current year
    const currentYearElement = document.getElementById("currentYear");
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;

    // Set the last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    const lastModified = document.lastModified;
    lastModifiedElement.textContent = lastModified;

    filterGames();
});

function filterGames() {
    const genre = document.getElementById("genre").value;
    const complexity = document.getElementById("complexity").value;
    const rpgItems = document.querySelectorAll(".rpg-item");

    rpgItems.forEach(item => {
        const itemGenre = item.getAttribute("data-genre");
        const itemComplexity = item.getAttribute("data-complexity");

        if ((genre === "all" || itemGenre === genre) &&
            (complexity === "all" || itemComplexity === complexity)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    // Set the current year
    const currentYearElement = document.getElementById("currentYear");
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    }

    // Set the last modified date
    const lastModifiedElement = document.getElementById("lastModified");
    if (lastModifiedElement) {
        const lastModified = document.lastModified;
        lastModifiedElement.textContent = lastModified;
    }

    // Community page functionality
    const groupForm = document.getElementById("groupForm");
    const groupsContainer = document.getElementById("groupsContainer");

    if (groupForm && groupsContainer) {
        // Load existing groups from localStorage
        const savedGroups = JSON.parse(localStorage.getItem("rpgGroups")) || [];
        savedGroups.forEach(group => addGroupToDOM(group));

        groupForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const groupName = document.getElementById("groupName").value;
            const groupDescription = document.getElementById("groupDescription").value;
            const groupContact = document.getElementById("groupContact").value;

            const newGroup = {
                name: groupName,
                description: groupDescription,
                contact: groupContact
            };

            savedGroups.push(newGroup);
            localStorage.setItem("rpgGroups", JSON.stringify(savedGroups));
            addGroupToDOM(newGroup);

            groupForm.reset();
        });
    }

    function addGroupToDOM(group) {
        const groupElement = document.createElement("div");
        groupElement.classList.add("group-item");
        
        const groupNameElement = document.createElement("h3");
        groupNameElement.textContent = group.name;
        
        const groupDescriptionElement = document.createElement("p");
        groupDescriptionElement.textContent = group.description;
        
        const groupContactElement = document.createElement("p");
        groupContactElement.textContent = `Contact: ${group.contact}`;
        
        groupElement.appendChild(groupNameElement);
        groupElement.appendChild(groupDescriptionElement);
        groupElement.appendChild(groupContactElement);
        
        groupsContainer.appendChild(groupElement);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navUl = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navUl.classList.toggle('show');
    });
});
