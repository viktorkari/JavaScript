// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

fetch("https://dummyjson.com/carts?limit=3")
    .then(response => response.json())
    .then(data => {
        let {carts} = data;
        let containerDiv = document.createElement("div");
        for (const cart of carts) {
            let cartDiv = document.createElement("div");
            for (const key in cart) {
                if (Object.hasOwnProperty.call(cart, key)) {
                    let paragraph = document.createElement("p");
                    if (key === "products" && Array.isArray(cart[key])) {
                        let productsText = cart[key].map(product => JSON.stringify(product));
                        paragraph.textContent = `${key}: ${productsText}`;
                    } else {
                        paragraph.textContent = `${key}: ${cart[key]}`;
                    }
                    cartDiv.appendChild(paragraph);
                }
            }
            containerDiv.appendChild(cartDiv);
        }
        document.body.appendChild(containerDiv);
    });

//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список
//     під час відображення.

fetch("https://dummyjson.com/recipes?limit=3")
    .then(response => response.json())
    .then(data => {
        const recipes = data.recipes
        let containerDiv = document.createElement("div");
        recipes.forEach(recipe => {
            let recipesDiv = document.createElement("div");
            for (const key in recipe) {
                if (Object.hasOwnProperty.call(recipe, key)) {
                    let paragraph = document.createElement("p");
                    if (key === "ingredients" && Array.isArray(recipe[key])) {
                        let ingredientsList = document.createElement("ul");
                        recipe[key].forEach(ingredient => {
                            let listItem = document.createElement("li");
                            listItem.textContent = ingredient;
                            ingredientsList.appendChild(listItem);
                        });
                        paragraph.textContent = `${key}`;
                        paragraph.appendChild(ingredientsList);
                    } else {
                        paragraph.textContent = `${key}: ${recipe[key]}`;
                    }
                    recipesDiv.appendChild(paragraph);
                }
            }
            containerDiv.appendChild(recipesDiv);
        });
        document.body.appendChild(containerDiv);
    });

//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

fetch("http://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        const userList = document.createElement("ul");
        userList.id = "userList";
        document.body.appendChild(userList);

        users.forEach(user => {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.href = `https://jsonplaceholder.typicode.com/users?id=${user.id}`;
            link.textContent = `User ${user.id}: ${user.name}`;
            listItem.appendChild(link);
            userList.appendChild(listItem);
        });
    })

