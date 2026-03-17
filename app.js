// Configuration Data for the Dynamic Grid
const repositoryData = [
    {
        title: "Banking System",
        description: "A robust simulation of a bank offering account creation, secure deposits, withdrawals, and balance tracking using Classes.",
        folder: "Mini Project(Banking System)",
        icon: "fa-solid fa-building-columns",
        color: "#10b981", // Emerald
        link: "https://github.com/ayushkumarjena15/Advance-Python-TNP/tree/main/Mini%20Project(Banking%20System)"
    },
    {
        title: "Student Analyser",
        description: "A powerful Python data-processing system that analyzes student marks, calculates aggregate performances, and generates grade reports.",
        folder: "Mini Project(Student Performance Analyser)",
        icon: "fa-solid fa-chart-pie",
        color: "#6366f1", // Indigo
        link: "https://github.com/ayushkumarjena15/Advance-Python-TNP/tree/main/Mini%20Project(Student%20Performance%20Analyser)"
    },
    {
        title: "Python Assessments",
        description: "15 intensive logical and algorithm-based challenges simulating interview environments, focusing on Data Structures and Loops.",
        folder: "Python Assessment",
        icon: "fa-solid fa-brain",
        color: "#f43f5e", // Rose
        link: "https://github.com/ayushkumarjena15/Advance-Python-TNP/tree/main/Python%20Assessment"
    },
    {
        title: "Daily Practice Modules",
        description: "5 dedicated directories acting as a daily brain-gym. Contains logic exercises on Tuple Unpacking, Comprehensions, and Sorting.",
        folder: "Practice-1 to 5",
        icon: "fa-solid fa-dumbbell",
        color: "#f59e0b", // Amber
        link: "https://github.com/ayushkumarjena15/Advance-Python-TNP"
    },
    {
        title: "Evening Session Work",
        description: "Core logic scripts engineered during strictly scheduled deep-work evening python programming sessions.",
        folder: "Evening session Work",
        icon: "fa-solid fa-moon",
        color: "#8b5cf6", // Violet
        link: "https://github.com/ayushkumarjena15/Advance-Python-TNP/tree/main/Evening%20session%20Work"
    },
    {
        title: "Core Mechanics",
        description: "Standalone scripts emphasizing core language behavior such as Global/Local Scoping, List Operations, & Functional Programming.",
        folder: "Root Scripts",
        icon: "fa-brands fa-python",
        color: "#38bdf8", // Sky
        link: "https://github.com/ayushkumarjena15/Advance-Python-TNP/blob/main/Global.py"
    }
];

// Document Load Event
document.addEventListener("DOMContentLoaded", () => {
    const gridContainer = document.getElementById("grid-container");

    // Inject data dynamically with delay for stagger animation
    repositoryData.forEach((item, index) => {
        const cardElement = document.createElement("a");
        cardElement.href = item.link;
        cardElement.target = "_blank";
        cardElement.className = "card animate-on-load";
        cardElement.style.animationDelay = `${index * 0.15}s`;
        cardElement.style.textDecoration = "none";
        cardElement.style.color = "inherit";

        cardElement.innerHTML = `
            <div class="card-icon" style="color: ${item.color}; background: ${item.color}15;">
                <i class="${item.icon}"></i>
            </div>
            <h3 class="card-title">${item.title}</h3>
            <p class="card-desc">${item.description}</p>
            <div class="card-footer">
                <span class="card-badge"><i class="fas fa-folder"></i> ${item.folder}</span>
                <span class="card-link"><i class="fas fa-arrow-right"></i></span>
            </div>
        `;

        gridContainer.appendChild(cardElement);
    });

    // 3D Tilt Effect for premium feel 
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const xOffset = ((x / rect.width) - 0.5) * 10;
            const yOffset = ((y / rect.height) - 0.5) * 10;
            
            card.style.transform = `perspective(1000px) rotateY(${xOffset}deg) rotateX(${-yOffset}deg) translateY(-5px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)`;
        });
    });
});
