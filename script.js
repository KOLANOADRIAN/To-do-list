{
    const SayHello = () => {
        console.log("Welcome in To to list")
    }

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
            <li ${ListWithObject.done ? "style= \"text-decoration: line-through\"" :""}>

            ${ListWithObject.volume}
            
            </li>
            `;
        };
        document.querySelector(".js-tasks").innerHTML = htmlString;
    };

    const init = () => {
        SayHello();
        render();


    }
    init();
}