{
    const SayHello = () => {
        console.log("Welcome in To to list")
    }
    window.addEventListener("load", function () {
        console.log("The page has loaded")
    });
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

    const render = () => {
        let htmlString = ""
        for (ListWithObject of ListWithObjects) {
            htmlString += `
            <li ${ListWithObject.done ? "style= \"text-decoration: line-through\"" : ""}>

            ${ListWithObject.volume}

            </li>
            `;
        };
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };
    const onFormSubmit = (event) => {
        event.preventDefault();
        const newTaskVolume = document.querySelector(".js-newTask").value.trim();
        console.log(newTaskVolume);
        if ( newTaskVolume === "") {
            return;
        }
        addNewTask(newTaskVolume);
    }
     const addNewTask = (newTaskVolume) => {
        ListWithObjects.push({
            volume: newTaskVolume,
        })
        render();
     }

    const init = () => {
        SayHello();
        render();
        const form = document.querySelector(".js-form");
        form.addEventListener("submit", onFormSubmit );

    }
    init();
}