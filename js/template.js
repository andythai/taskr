function validateLogin() {

    var username = document.forms["login"]["inputEmail"].value;
    var password = document.forms["login"]["inputPassword"].value;

    if (username == 'demo@test.com' && password == 'demo')
        return true;

    document.getElementById("notification").innerText =" Invalid login and/or password combination.";
    document.forms["login"]["inputEmail"].value = "";
    document.forms["login"]["inputPassword"].value = "";

    return false;

}
function validRegistration() {
    alert("Account created, please login.");
    return true;
}
function loadSettings() {

    var matrix = [];
    var settings = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));
    settings = matrix[5];

    if (!(settings && settings.length))
        settings = [];

    if (settings[0])
        document.forms["settings"]["urgentBGColor"].value = settings[0];

    if (settings[1])
        document.forms["settings"]["planBGColor"].value = settings[1];

    if (settings[2])
        document.forms["settings"]["delegateBGColor"].value = settings[2];

    if (settings[3])
        document.forms["settings"]["eliminateBGColor"].value = settings[3];
    
}
function saveSettings() {

    var matrix = [];
    var settings = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));
    settings = matrix[5];

    if (!(settings && settings.length))
        settings = [];

    settings[0] = document.forms["settings"]["urgentBGColor"].value;
    settings[1] = document.forms["settings"]["planBGColor"].value;
    settings[2] = document.forms["settings"]["delegateBGColor"].value;
    settings[3] = document.forms["settings"]["eliminateBGColor"].value;

    matrix[5] = settings;
    localStorage.setItem('matrix', JSON.stringify(matrix));

    alert("Settings saved.");

}

function loadProfile() {
 
    var matrix = [];
    var profile = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));
    profile = matrix[4];

    if (!(profile && profile.length))
        profile = [];

    if (profile[0])
        document.forms["profile"]["firstName"].value = profile[0];

    if (profile[1])
        document.forms["profile"]["lastName"].value = profile[1];

    if (profile[2])
        document.forms["profile"]["email"].value = profile[2];

    if (profile[3])
        document.forms["profile"]["password"].value = profile[3];

}
function saveProfile() {

    var matrix = [];
    var profile = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    profile[0] = document.forms["profile"]["firstName"].value;
    profile[1] = document.forms["profile"]["lastName"].value;
    profile[2] = document.forms["profile"]["email"].value;
    profile[3] = document.forms["profile"]["password"].value;

    matrix[4] = profile;
    localStorage.setItem('matrix', JSON.stringify(matrix));
    alert("Profile Saved.");

}


function loadTask(listItem) {

    // Stores the application data
    var matrix = [];
    var tasks = [];
    var id = listItem.dataset.id;
    var task = [];


    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    if (!(matrix && matrix.length))
        matrix = [];

    switch (listItem.dataset.type) {

        case "urgent":

            tasks = matrix[0];
            task = tasks[id];

            // Populate form fields
            document.forms["urgent"]["tid"].value = id;
            document.forms["urgent"]["name"].value = task[0];
            document.forms["urgent"]["action"].value = "update";

            break;

        case "plan":

            tasks = matrix[1];
            task = tasks[id];

            // Populate form fields
            document.forms["plan"]["tid"].value = id;
            document.forms["plan"]["name"].value = task[0];
            document.forms["plan"]["date"].value = task[1];
            document.forms["plan"]["action"].value = "update";

            break;

        case "delegate":

            tasks = matrix[2];
            task = tasks[id];

            // Populate form fields
            document.forms["delegate"]["tid"].value = id;
            document.forms["delegate"]["name"].value = task[0];
            document.forms["delegate"]["date"].value = task[1];
            document.forms["delegate"]["other"].value = task[2];
            document.forms["delegate"]["action"].value = "update";

            break;

            case "eliminate":
            
                        tasks = matrix[3];
                        task = tasks[id];
            
                        // Populate form fields
                        document.forms["eliminate"]["tid"].value = id;
                        document.forms["eliminate"]["name"].value = task[0];
                        document.forms["eliminate"]["action"].value = "update";
            
                        break;

    }

}
function loadList(name) {

    // Stores the application data
    var matrix = [];
    var tasks = [];
    var task = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    if (!(matrix && matrix.length))
        matrix = [];

    switch (name) {

        case "urgent":

            tasks = matrix[0];

            if (tasks !== null) {

                /* Urget Tasks */
                var list = document.getElementById('urgentList');

                for (var i in tasks) {

                    var li = document.createElement("li");
                    var input = document.createElement("input");
                    var btn = document.createElement("button");
                    var span = document.createElement("span");

                    var attr = document.createAttribute("type");
                    attr.value = "checkbox";
                    input.setAttributeNode(attr);
                    attr = document.createAttribute("onclick");
                    attr.value = "checkTask(this);";
                    input.setAttributeNode(attr);

                    attr = document.createAttribute("class");
                    attr.value = i + " list-group-item";
                    li.setAttributeNode(attr);

                    attr = document.createAttribute("class");
                    attr.value = "btn btn-default btn-sm";
                    btn.setAttributeNode(attr);

                    attr = document.createAttribute("onclick");
                    attr.value = "loadTask(this);";
                    btn.setAttributeNode(attr);

                    attr = document.createAttribute("data-id");
                    attr.value = i;
                    btn.setAttributeNode(attr);

                    attr = document.createAttribute("data-type");
                    attr.value = "urgent";
                    btn.setAttributeNode(attr);

                    attr = document.createAttribute("data-toggle");
                    attr.value = "modal";
                    btn.setAttributeNode(attr);

                    attr = document.createAttribute("data-target");
                    attr.value = "#urgentModal";
                    btn.setAttributeNode(attr);

                    btn.innerHTML = tasks[i];

                    attr = document.createAttribute("class");
                    attr.value = "badge";
                    span.setAttributeNode(attr);

                    span.setAttribute("class", "badge");
                    span.innerHTML = '<a onclick="removeTask(this)" data-id="' + i + '" data-type="urgent">X</a>';

                    li.appendChild(input);
                    li.appendChild(span);
                    li.appendChild(btn);
                    list.appendChild(li);

                }
            }

            break;

        case "plan":

            tasks = matrix[1];

            if (tasks !== null) {

                /* Planning Tasks */
                var list = document.getElementById('planList');

                for (var i in tasks) {

                    task = tasks[i];

                    var li = document.createElement("li");
                    var input = document.createElement("input");
                    var btn = document.createElement("button");
                    var span = document.createElement("span");
                    var div = document.createElement("div");

                    var attr = document.createAttribute("type");
                    attr.value = "checkbox";
                    input.setAttributeNode(attr);
                    attr = document.createAttribute("onclick");
                    attr.value = "checkTask(this);";
                    input.setAttributeNode(attr);

                    attr = document.createAttribute("class");
                    attr.value = i + " list-group-item";
                    li.setAttributeNode(attr);

                    attr = document.createAttribute("class");
                    attr.value = "btn btn-default btn-sm";
                    btn.setAttributeNode(attr);

                    attr = document.createAttribute("onclick");
                    attr.value = "loadTask(this);";
                    btn.setAttributeNode(attr);

                    attr = document.createAttribute("data-id");
                    attr.value = i;
                    btn.setAttributeNode(attr);

                    attr = document.createAttribute("data-type");
                    attr.value = "plan";
                    btn.setAttributeNode(attr);

                    attr = document.createAttribute("data-toggle");
                    attr.value = "modal";
                    btn.setAttributeNode(attr);

                    attr = document.createAttribute("data-target");
                    attr.value = "#planModal";
                    btn.setAttributeNode(attr);

                    btn.innerHTML = task[0];

                    if (task[1]) {
                        attr = document.createAttribute("class");
                        attr.value = "date";
                        div.setAttributeNode(attr);
                        div.innerHTML = task[1];
                    }

                    attr = document.createAttribute("class");
                    attr.value = "badge";
                    span.setAttributeNode(attr);

                    span.setAttribute("class", "badge");
                    span.innerHTML = '<a onclick="removeTask(this)" data-id="' + i + '" data-type="plan">X</a>';

                    li.appendChild(input);
                    li.appendChild(span);
                    li.appendChild(btn);
                    if (task[1])
                        li.appendChild(div);
                    list.appendChild(li);

                }
            }

            break;

        case "delegate":

            tasks = matrix[2];

            if (tasks !== null) {

                /* Planning Tasks */
                var list = document.getElementById('delegateList');

                for (var i in tasks) {

                    task = tasks[i];

                    var li = document.createElement("li");
                    var input = document.createElement("input");
                    var btn = document.createElement("button");
                    var span = document.createElement("span");
                    var div1 = document.createElement("div");
                    var div2 = document.createElement("div");

                    var attr = document.createAttribute("type");
                    attr.value = "checkbox";
                    input.setAttributeNode(attr);
                    attr = document.createAttribute("onclick");
                    attr.value = "checkTask(this);";
                    input.setAttributeNode(attr);

                    attr = document.createAttribute("class");
                    attr.value = i + " list-group-item";
                    li.setAttributeNode(attr);

                    attr = document.createAttribute("class");
                    attr.value = "btn btn-default btn-sm";
                    btn.setAttributeNode(attr);

                    attr = document.createAttribute("onclick");
                    attr.value = "loadTask(this);";
                    btn.setAttributeNode(attr);

                    attr = document.createAttribute("data-id");
                    attr.value = i;
                    btn.setAttributeNode(attr);

                    attr = document.createAttribute("data-type");
                    attr.value = "delegate";
                    btn.setAttributeNode(attr);

                    attr = document.createAttribute("data-toggle");
                    attr.value = "modal";
                    btn.setAttributeNode(attr);

                    attr = document.createAttribute("data-target");
                    attr.value = "#delegateModal";
                    btn.setAttributeNode(attr);

                    btn.innerHTML = task[0];

                    if (task[2]) {
                        attr = document.createAttribute("class");
                        attr.value = "delegatedto";
                        div2.setAttributeNode(attr);
                        div2.innerHTML = task[2];
                    }

                    if (task[1]) {
                        attr = document.createAttribute("class");
                        attr.value = "date";
                        div1.setAttributeNode(attr);
                        div1.innerHTML = task[1];
                    }

                    attr = document.createAttribute("class");
                    attr.value = "badge";
                    span.setAttributeNode(attr);

                    span.setAttribute("class", "badge");
                    span.innerHTML = '<a onclick="removeTask(this)" data-id="' + i + '" data-type="delegate">X</a>';

                    li.appendChild(input);
                    li.appendChild(span);
                    li.appendChild(btn);
                    if (task[2])
                        li.appendChild(div2);
                    if (task[1])
                        li.appendChild(div1);                  
                    li.appendChild(div2);
                    list.appendChild(li);

                }
            }

            break;

        case "eliminate":

            tasks = matrix[3];

            if (tasks !== null) {

                /* Urget Tasks */
                var list = document.getElementById('eliminateList');

                for (var i in tasks) {

                    var li = document.createElement("li");
                    var input = document.createElement("input");
                    var link = document.createElement("a");
                    var span = document.createElement("span");

                    var attr = document.createAttribute("type");
                    attr.value = "checkbox";
                    input.setAttributeNode(attr);
                    attr = document.createAttribute("onclick");
                    attr.value = "checkTask(this);";
                    input.setAttributeNode(attr);

                    attr = document.createAttribute("class");
                    attr.value = i + " list-group-item";
                    li.setAttributeNode(attr);

                    attr = document.createAttribute("class");
                    attr.value = "badge";
                    span.setAttributeNode(attr);

                    span.setAttribute("class", "badge");
                    span.innerHTML = '<a onclick="removeTask(this)" data-id="' + i + '" data-type="eliminate">X</a>';

                    li.appendChild(input);
                    li.appendChild(span);
                    li.appendChild(document.createTextNode(tasks[i]));
                    list.appendChild(li);
                }
            }

            break;

    }


}

function init() {

    // Stores the application data
    var matrix = [];
    var profile = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    if (!(matrix && matrix.length))
        matrix = [];

    // Populate the lists
    loadList("urgent");
    loadList("plan");
    loadList("delegate");
    loadList("eliminate");

    // Welcome message
    profile = matrix[4];

    if (!(profile && profile.length))
        profile = [];

    if (profile[0])
        document.getElementById("welcome").innerHTML = "Welcome, " + profile[0] + ".";

    settings = matrix[5];
        
    if (!(settings && settings.length))
        settings = [];

    if (settings[0])
        document.getElementById("urgentBox").style.backgroundColor = settings[0];

    if (settings[1])
        document.getElementById("planBox").style.backgroundColor = settings[1];

    if (settings[2])
        document.getElementById("delegateBox").style.backgroundColor = settings[2];

    if (settings[3])
        document.getElementById("eliminateBox").style.backgroundColor = settings[3];

}

function removeTask(listItem) {

    // Stores the application data
    var matrix = [];
    var tasks = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    switch (listItem.dataset.type) {

        case "urgent":
            tasks = matrix[0];
            tasks.splice(listItem.dataset.id, 1);
            matrix[0] = tasks;
            localStorage.setItem("matrix", JSON.stringify(matrix));
            clearList("urgent");
            loadList("urgent");
            break;

        case "plan":
            tasks = matrix[1];
            tasks.splice(listItem.dataset.id, 1);
            matrix[1] = tasks;
            localStorage.setItem("matrix", JSON.stringify(matrix));
            clearList("plan");
            loadList("plan");
            break;

        case "delegate":
            tasks = matrix[2];
            tasks.splice(listItem.dataset.id, 1);
            matrix[2] = tasks;
            localStorage.setItem("matrix", JSON.stringify(matrix));
            clearList("delegate");
            loadList("delegate");
            break;

        case "eliminate":
            tasks = matrix[3];
            tasks.splice(listItem.dataset.id.id, 1);
            matrix[3] = tasks;
            localStorage.setItem("matrix", JSON.stringify(matrix));
            clearList("eliminate");
            loadList("eliminate");
            break;

    }

}
function addTask(type) {

    // Stores the application data
    var matrix = [];
    var tasks = [];
    var task = [];
    var action = "";
    var index = 0;

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    if (!(matrix && matrix.length))
        matrix = [];

    switch (type) {

        case "urgent":

            var tname = "";

            if (matrix[0] && matrix[0].length)
                tasks = matrix[0];

            action = document.forms["urgent"]["action"].value;

            if (action == 'new') {
                index = tasks.length;
            } else if (action == 'update') {
                index = document.forms["urgent"]["tid"].value;
            }

            // Task name that will be added to the list and localStorage
            tname = document.forms["urgent"]["name"].value;

            /* Urget Tasks */
            var list = document.getElementById('urgentList');

            var li = document.createElement("li");
            var input = document.createElement("input");
            var btn = document.createElement("button");
            var span = document.createElement("span");

            var attr = document.createAttribute("type");
            attr.value = "checkbox";
            input.setAttributeNode(attr);
            attr = document.createAttribute("onclick");
            attr.value = "checkTask(this);";
            input.setAttributeNode(attr);

            attr = document.createAttribute("class");
            attr.value = index + " list-group-item";
            li.setAttributeNode(attr);

            attr = document.createAttribute("class");
            attr.value = "btn btn-default btn-sm";
            btn.setAttributeNode(attr);

            attr = document.createAttribute("onclick");
            attr.value = "loadTask(this);";
            btn.setAttributeNode(attr);

            attr = document.createAttribute("data-id");
            attr.value = index;
            btn.setAttributeNode(attr);

            attr = document.createAttribute("data-type");
            attr.value = "urgent";
            btn.setAttributeNode(attr);

            attr = document.createAttribute("data-toggle");
            attr.value = "modal";
            btn.setAttributeNode(attr);

            attr = document.createAttribute("data-target");
            attr.value = "#urgentModal";
            btn.setAttributeNode(attr);

            btn.innerHTML = tname;

            attr = document.createAttribute("class");
            attr.value = "badge";
            span.setAttributeNode(attr);

            span.setAttribute("class", "badge");
            span.innerHTML = '<a onclick="removeTask(this)" data-id="' + index + '" data-type="urgent">X</a>';

            li.appendChild(input);
            li.appendChild(span);
            li.appendChild(btn);
            list.appendChild(li);

            // Check the action and type of data
            var task = [];
            task[0] = tname;
            action = document.forms["urgent"]["action"].value;

            switch (action) {
                case "new":
                    tasks[index] = task;
                    matrix[0] = tasks;
                    localStorage.setItem('matrix', JSON.stringify(matrix));
                    break;
                case "update":
                    tasks[index] = task;
                    matrix[0] = tasks;
                    localStorage.setItem('matrix', JSON.stringify(matrix));
                    clearList("urgent");
                    loadList("urgent");
                    document.forms["urgent"]["action"].value = "new";
                    break;
            }

            // Clear form fields
            document.forms["urgent"]["name"].value = "";

            break;

        case "plan":

            var tname = "";
            var tdate = "";
            var tother = "";

            if (matrix[1] && matrix[1].length)
                tasks = matrix[1];

            action = document.forms["plan"]["action"].value;

            if (action == 'new') {
                index = tasks.length;
            } else if (action == 'update') {
                index = document.forms["plan"]["tid"].value;
            }

            // Task name that will be added to the list and localStorage
            tname = document.forms["plan"]["name"].value;
            tdate = document.forms["plan"]["date"].value;

            var list = document.getElementById('planList');

            var li = document.createElement("li");
            var input = document.createElement("input");
            var btn = document.createElement("button");
            var span = document.createElement("span");
            var div = document.createElement("div");

            var attr = document.createAttribute("type");
            attr.value = "checkbox";
            input.setAttributeNode(attr);
            attr = document.createAttribute("onclick");
            attr.value = "checkTask(this);";
            input.setAttributeNode(attr);

            attr = document.createAttribute("class");
            attr.value = index + " list-group-item";
            li.setAttributeNode(attr);

            attr = document.createAttribute("class");
            attr.value = "btn btn-default btn-sm";
            btn.setAttributeNode(attr);

            attr = document.createAttribute("onclick");
            attr.value = "loadTask(this);";
            btn.setAttributeNode(attr);

            attr = document.createAttribute("data-id");
            attr.value = index;
            btn.setAttributeNode(attr);

            attr = document.createAttribute("data-type");
            attr.value = "plan";
            btn.setAttributeNode(attr);

            attr = document.createAttribute("data-toggle");
            attr.value = "modal";
            btn.setAttributeNode(attr);

            attr = document.createAttribute("data-target");
            attr.value = "#planModal";
            btn.setAttributeNode(attr);

            btn.innerHTML = tname;
    
            if (tdate) {
                attr = document.createAttribute("class");
                attr.value = "date";
                div.setAttributeNode(attr);
                div.innerHTML = tdate;
            }    

            attr = document.createAttribute("class");
            attr.value = "badge";
            span.setAttributeNode(attr);

            span.setAttribute("class", "badge");
            span.innerHTML = '<a onclick="removeTask(this)" data-id="' + index + '" data-type="plan">X</a>';

            li.appendChild(input);
            li.appendChild(span);
            li.appendChild(btn);
            if (tdate)
                li.appendChild(div);
            list.appendChild(li);

            // Check the action and type of data
            var task = [];
            task[0] = tname;
            task[1] = tdate;
            action = document.forms["plan"]["action"].value;

            switch (action) {
                case "new":
                    tasks[index] = task;
                    matrix[1] = tasks;
                    localStorage.setItem('matrix', JSON.stringify(matrix));
                    break;
                case "update":
                    tasks[index] = task;
                    matrix[1] = tasks;
                    localStorage.setItem('matrix', JSON.stringify(matrix));
                    clearList("plan");
                    loadList("plan");
                    document.forms["plan"]["action"].value = "new";
                    break;
            }

            // Clear form fields
            document.forms["plan"]["name"].value = "";

            break;


        case "delegate":

            var tname = "";
            var tdate = "";
            var tother = "";

            if (matrix[2] && matrix[2].length)
                tasks = matrix[2];

            action = document.forms["delegate"]["action"].value;

            if (action == 'new') {
                index = tasks.length;
            } else if (action == 'update') {
                index = document.forms["delegate"]["tid"].value;
            }

            // Task name that will be added to the list and localStorage
            tname = document.forms["delegate"]["name"].value;
            tdate = document.forms["delegate"]["date"].value;
            tother = document.forms["delegate"]["other"].value;

            var list = document.getElementById('delegateList');

            var li = document.createElement("li");
            var input = document.createElement("input");
            var btn = document.createElement("button");
            var span = document.createElement("span");
            var div1 = document.createElement("div");
            var div2 = document.createElement("div");

            var attr = document.createAttribute("type");
            attr.value = "checkbox";
            input.setAttributeNode(attr);
            attr = document.createAttribute("onclick");
            attr.value = "checkTask(this);";
            input.setAttributeNode(attr);

            attr = document.createAttribute("class");
            attr.value = index + " list-group-item";
            li.setAttributeNode(attr);

            attr = document.createAttribute("class");
            attr.value = "btn btn-default btn-sm";
            btn.setAttributeNode(attr);

            attr = document.createAttribute("onclick");
            attr.value = "loadTask(this);";
            btn.setAttributeNode(attr);

            attr = document.createAttribute("data-id");
            attr.value = index;
            btn.setAttributeNode(attr);

            attr = document.createAttribute("data-type");
            attr.value = "delegate";
            btn.setAttributeNode(attr);

            attr = document.createAttribute("data-toggle");
            attr.value = "modal";
            btn.setAttributeNode(attr);

            attr = document.createAttribute("data-target");
            attr.value = "#delegateModal";
            btn.setAttributeNode(attr);

            btn.innerHTML = tname;

            if (tother) {
                attr = document.createAttribute("class");
                attr.value = "delegatedto";
                div2.setAttributeNode(attr);
                div2.innerHTML = tother;
            }

            if (tdate) {
                attr = document.createAttribute("class");
                attr.value = "date";
                div1.setAttributeNode(attr);
                div1.innerHTML = tdate;
            }

            attr = document.createAttribute("class");
            attr.value = "badge";
            span.setAttributeNode(attr);

            span.setAttribute("class", "badge");
            span.innerHTML = '<a onclick="removeTask(this)" data-id="' + index + '" data-type="delegate">X</a>';

            li.appendChild(input);
            li.appendChild(span);
            li.appendChild(btn);
            if (tother)
                li.appendChild(div2);
            if (tdate)
                li.appendChild(div1);
            list.appendChild(li);

            // Check the action and type of data
            var task = [];
            task[0] = tname;
            task[1] = tdate;
            task[2] = tother;
            action = document.forms["delegate"]["action"].value;

            switch (action) {
                case "new":
                    tasks[index] = task;
                    matrix[2] = tasks;
                    localStorage.setItem('matrix', JSON.stringify(matrix));
                    break;
                case "update":
                    tasks[index] = task;
                    matrix[2] = tasks;
                    localStorage.setItem('matrix', JSON.stringify(matrix));
                    clearList("delegate");
                    loadList("delegate");
                    document.forms["delegate"]["action"].value = "new";
                    break;
            }

            // Clear form fields
            document.forms["delegate"]["name"].value = "";
            document.forms["delegate"]["date"].value = "";
            //document.forms["delegate"]["other"].value = "";

            break;

        case "eliminate":

            var tname = "";

            if (matrix[3] && matrix[3].length)
                tasks = matrix[3];

                action = document.forms["delegate"]["action"].value;
                
                            if (action == 'new') {
                                index = tasks.length;
                            } else if (action == 'update') {
                                index = document.forms["eliminate"]["tid"].value;
                            }

            // Task name that will be added to the list and localStorage
            tname = document.forms["eliminate"]["name"].value;

            /* Urget Tasks */
            var list = document.getElementById('eliminateList');

            var li = document.createElement("li");
            var input = document.createElement("input");
            var link = document.createElement("a");
            var span = document.createElement("span");

            var attr = document.createAttribute("type");
            attr.value = "checkbox";
            input.setAttributeNode(attr);
            attr = document.createAttribute("onclick");
            attr.value = "checkTask(this);";
            input.setAttributeNode(attr);

            attr = document.createAttribute("class");
            attr.value = index + " list-group-item";
            li.setAttributeNode(attr);

            attr = document.createAttribute("class");
            attr.value = "badge";
            span.setAttributeNode(attr);

            span.setAttribute("class", "badge");
            span.innerHTML = '<a onclick="removeTask(this)" data-id="' + index + '" data-type="eliminate">X</a>';

            li.appendChild(input);
            li.appendChild(span);
            li.appendChild(document.createTextNode(tname));
            list.appendChild(li);

            // Check the action and type of data
            var task = [];
            task[0] = tname;
            action = document.forms["eliminate"]["action"].value;

            switch (action) {
                case "new":
                    tasks[index] = task;
                    matrix[3] = tasks;
                    localStorage.setItem('matrix', JSON.stringify(matrix));
                    break;
                case "update":
                    tasks[index] = task;
                    matrix[3] = tasks;
                    localStorage.setItem('matrix', JSON.stringify(matrix));
                    clearList("eliminate");
                    loadList("eliminate");
                    document.forms["eliminate"]["action"].value = "new";
                    break;
            }

            // Clear form fields
            document.forms["eliminate"]["name"].value = "";

    }

}
function updateTask(form) {

    alert('Updating task' + type);

    // Stores the application data
    var matrix = [];
    var tasks = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    switch (type) {

        case "urgent":

        /*
        // Check for the appropriate action
        alert(document.forms["urgent"]["action"].value);
 
        if (matrix[0] && matrix[0].length)
            tasks = matrix[0];
 
        // Task name that will be added to the list and localStorage
        tname = document.forms["urgent"]["name"].value;
 
        var list = document.getElementById('urgentList');
 
        var li = document.createElement("li");
        var input = document.createElement("input");
        var link = document.createElement("a");
        var span = document.createElement("span");
 
        var attr = document.createAttribute("type");
        attr.value = "checkbox";
        input.setAttributeNode(attr);
        attr = document.createAttribute("onclick");
        attr.value = "checkTask(this);";
        input.setAttributeNode(attr);
 
        attr = document.createAttribute("class");
        attr.value = tasks.length + " list-group-item";
        li.setAttributeNode(attr);
 
        attr = document.createAttribute("class");
        attr.value = "badge";
        span.setAttributeNode(attr);
 
        span.setAttribute("class", "badge");
        span.innerHTML = '<a id="' + tasks.length + '" class="urgent" onclick="removeTask(this)">X</a>';
 
        li.appendChild(input);
        li.appendChild(span);
        li.appendChild(document.createTextNode(tname));
        list.appendChild(li);
 
        // Add new task to localStorage
        var task = [];
        task[0] = tname;
        tasks[tasks.length] = task;
        matrix[0] = tasks;
        localStorage.setItem('matrix', JSON.stringify(matrix));
 
        // Clear form fields
        document.forms["urgent"]["name"].value = "";
 
        break;
        */

    }

}
function checkTask(task) {

    var isChecked = task.checked;

    if (isChecked) {
        task.parentElement.style.textDecoration = "line-through";
    } else {
        task.parentElement.style.textDecoration = "none";
    }

}
function clearList(name) {

    switch (name) {

        case "urgent":
            var list = document.getElementById("urgentList");
            while (list.firstChild) {
                list.removeChild(list.firstChild);
            }
            break;
        case "plan":
            var list = document.getElementById("planList");
            while (list.firstChild) {
                list.removeChild(list.firstChild);
            }
            break;
        case "delegate":
            var list = document.getElementById("delegateList");
            while (list.firstChild) {
                list.removeChild(list.firstChild);
            }
            break;
        case "eliminate":
            var list = document.getElementById("eliminateList");
            while (list.firstChild) {
                list.removeChild(list.firstChild);
            }
            break;

    }

}
