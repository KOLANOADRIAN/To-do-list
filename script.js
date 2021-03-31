{
    // min 16:32 c.d
    // przywitanie
    const SayHello = () => {
        console.log("Welcome in To to list")
    }
    // załadowanie strony mogło by być przywitaniem
    window.addEventListener("load", function () {
        console.log("The page has loaded")
    });
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
// renderowanie 
    const render = () => {
        let htmlString = ""
        for (ListWithObject of ListWithObjects) {
            htmlString += `
            <li ${ListWithObject.done ? "style= \"text-decoration: line-through\"" : ""}>
            <button class="js-remove">usuń</button>
            ${ListWithObject.volume}

            </li>
            `;
        };
        //  iterowanie forEach i usuwanie -- splice zadń
        document.querySelector(".js-tasks").innerHTML = htmlString;
        const removeButtons = document.querySelectorAll(".js-remove");
        console.log(removeButtons);
        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                ListWithObjects.splice(index, 1);
                render();
            });
        });
    };
    // tu łapiemy input
    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskVolume = document.querySelector(".js-newTask").value.trim();
        console.log(newTaskVolume);
        if ( newTaskVolume === "") {
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

    const init = () => {
        SayHello();
        render();
        // tu wczeńniej była finkcja onFormSubmit po submit
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit );

    }
    init();
}