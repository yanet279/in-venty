const users = [
    {
        id: 1,
        firstName: "Juan",
        lastName: "Pérez",
        comment: "En nuestro rubro, los clientes requieren información detallada sobre cada producto. IN-VENTY nos permite una mayor organización de la información que brindamos al público.",
        imageUrl: "https://randomuser.me/api/portraits/men/82.jpg",
        jobRole: "Socio Gerente de Imperial Motors S.A."
    },
    {
        id: 2,
        firstName: "Ana",
        lastName: "López",
        comment: "Interpreataron inmediatamente nuestras necesidades realizando un sitio que superó ampliamente nuestras expectativas, tanto a nivel técnico somo estético.",
        imageUrl: "https://randomuser.me/api/portraits/women/2.jpg",
        jobRole: "Socia en Restaurant La Marina"
    },
    {
        id: 3,
        firstName: "Carlos",
        lastName: "Ramírez",
        comment: "IN-VENTY realiza los trabajos a medida de lo que uno le solicita y siempre deja al cliente satisfecho. Nuestro trabajo es continuo logrando que uno pueda contar siempre con ellos.",
        imageUrl: "https://randomuser.me/api/portraits/men/17.jpg",
        jobRole: "Commercial Manager de Agri Star S.A."
    },
    {
        id: 4,
        firstName: "Paula",
        lastName: "González",
        comment: "Entusiasta de la inteligencia artificial.",
        imageUrl: "https://randomuser.me/api/portraits/women/4.jpg",
        jobRole: "Científica de Datos"
    }
];

let currentIndex = 0;

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const clienteDiv = document.getElementById('cliente');

function showUser(index) {
    const user = users[index];
    clienteDiv.innerHTML = `
        <img src="${user.imageUrl}" alt="Imagen de ${user.firstName}">
        <div class="info">
            <p class="name">${user.firstName} ${user.lastName}</p>
            <p>${user.comment}</p>
            <p class="rol">${user.jobRole}</p>
        </div>
    `;
    
    prevButton.disabled = index === 0;
    nextButton.disabled = index === users.length - 1;
}

showUser(currentIndex);

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        showUser(currentIndex);
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < users.length - 1) {
        currentIndex++;
        showUser(currentIndex);
    }
});