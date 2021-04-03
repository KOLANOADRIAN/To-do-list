{
    

    // załadowanie strony i przywitanie
    window.addEventListener("load", function () {
        console.log("The page has loaded... Welcome in To do list")
    });
    // zmiana tła
    const mode = () => {
        const conteiner__white = document.querySelector(".conteiner--white");
        conteiner__white.classList.toggle("conteiner--dark");
        button__dark.classList.toggle("button--white");
    }
    const button__dark = document.querySelector(".button--dark")
    button__dark.addEventListener("click", mode);


    // lista z objektami 
    const ListWithObjects = [
        {
            volume: "wykonać listę zadań samodzielnie",
            done: false,
        },
        {
            volume: "zjeść pierogi",
            done: true,
        },
    ];
     // tu łapiemy input
     const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskVolume = document.querySelector(".js-newTask").value.trim();
        console.log(newTaskVolume);
        if (newTaskVolume === "") {
            return;
        }
        addNewTask(newTaskVolume);
    }
    // pusch dodawanie do listy
    const addNewTask = (newTaskVolume) => {
        ListWithObjects.push({
            volume: newTaskVolume,
        })
        render();
    }
    // usuwanie
    const removeTask = (index) => {
        ListWithObjects.splice(index, 1);
        render();
    }
    const toogleDoneTask = (index) => {
        ListWithObjects[index].done = !ListWithObjects[index].done;
        render();
    }
    // renderowanie 
    const render = () => {
        let htmlString = ""
        for (ListWithObject of ListWithObjects) {
            htmlString += `
            <button class="js-done">zrobione</button>
            <li class= "section__listObject" ${ListWithObject.done ? "style= \"text-decoration: line-through\"" : ""}>
            ${ListWithObject.volume}
            </li>
            <button class="js-remove">usuń</button>
            `;
        };

        //  iterowanie forEach i usuwanie -- splice zadń
        document.querySelector(".js-tasks").innerHTML = htmlString;
        const removeButtons = document.querySelectorAll(".js-remove");
        console.log(removeButtons);
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });
         //  odznaczanie wykonanego
         const toogledoneButtons = document.querySelectorAll(".js-done");
         console.log(toogledoneButtons);
         toogledoneButtons.forEach((toogledoneButton, index) => {
             toogledoneButton.addEventListener("click", () => {
                 toogleDoneTask(index);
             });
         });
    };
   


    const init = () => {
        render();
        // tu wczeńniej była finkcja onFormSubmit po submit
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit);

    }
    init();
}