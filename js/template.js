function setTaskViewingStatus(name) {

    // Stores the application data
    var matrix = [];
    var globals = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    if (!(matrix && matrix.length))
        matrix = [];

    globals = matrix[6];

    if (!(globals && globals.length))
        globals = [];

    switch (name) {
        case "current":
            globals[1] = name;
            matrix[6] = globals;
            localStorage.setItem('matrix', JSON.stringify(matrix));
            break;

        case "completed":
            globals[1] = name;
            matrix[6] = globals;
            localStorage.setItem('matrix', JSON.stringify(matrix));
            break;

        case "deleted":
            globals[1] = name;
            matrix[6] = globals;
            localStorage.setItem('matrix', JSON.stringify(matrix));
            break;

    }

    clearList("urgent");
    loadList("urgent");

    clearList("plan");
    loadList("plan");

    clearList("delegate");
    loadList("delegate");

    clearList("eliminate");
    loadList("eliminate");

}
function newTask(type) {

    switch (type) {

        case "urgent":

            // Set the modal title to match the action
            document.getElementById("urgentModalLabel").innerText = "New Urgent Task";

            // Clear form fields
            document.forms["urgent"]["name"].value = "";
            document.forms["urgent"]["time"].value = "";
            document.forms["urgent"]["emailReminder"].checked = false;
            document.forms["urgent"]["textReminder"].checked = false;

            break;

        case "plan":

            // Set the modal title to match the action
            document.getElementById("planModalLabel").innerText = "New Planned Task";

            // Clear form fields
            document.forms["plan"]["name"].value = "";
            document.forms["plan"]["date"].value = "";
            document.forms["plan"]["emailReminder"].checked = false;
            document.forms["plan"]["textReminder"].checked = false;

            break;

        case "delegate":

            // Set the modal title to match the action
            document.getElementById("delegateModalLabel").innerText = "New Delegated Task";

            // Clear form fields
            document.forms["delegate"]["name"].value = "";
            document.forms["delegate"]["date"].value = "";
            document.forms["delegate"]["other"].value = "";
            document.forms["delegate"]["emailReminder"].checked = false;
            document.forms["delegate"]["textReminder"].checked = false;

            break;

        case "eliminate":

            // Set the modal title to match the action
            document.getElementById("eliminateModalLabel").innerText = "New Eliminate Task";

            // Clear form fields
            document.forms["eliminate"]["name"].value = "";

            break;

    }

}

function loadTask(item) {

    // Stores the application data
    var matrix = [];
    var tasks = [];
    var id = item.dataset.id;
    var task = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    if (!(matrix && matrix.length))
        matrix = [];

    switch (item.dataset.type) {

        case "urgent":

            tasks = matrix[0];
            task = tasks[id];

            // Set the modal title to match the action
            document.getElementById("urgentModalLabel").innerText = "Update Urgent Task";

            // Populate form fields
            document.forms["urgent"]["tid"].value = id;
            document.forms["urgent"]["name"].value = task[1];
            document.forms["urgent"]["priority"].value = task[2];
            document.forms["urgent"]["time"].value = task[5];
            document.forms["urgent"]["emailReminder"].checked = task[6];
            document.forms["urgent"]["textReminder"].checked = task[7];                 
            document.forms["urgent"]["action"].value = "update";

            break;

        case "plan":

            tasks = matrix[1];
            task = tasks[id];

            // Set the modal title to match the action
            document.getElementById("planModalLabel").innerText = "Update Planned Task";

            // Populate form fields
            document.forms["plan"]["tid"].value = id;
            document.forms["plan"]["name"].value = task[1];
            document.forms["plan"]["priority"].value = task[2];
            document.forms["plan"]["date"].value = task[4];
            document.forms["plan"]["action"].value = "update";

            break;

        case "delegate":

            tasks = matrix[2];
            task = tasks[id];

            // Set the modal title to match the action
            document.getElementById("delegateModalLabel").innerText = "Update Delegated Task";

            // Populate form fields
            document.forms["delegate"]["tid"].value = id;
            document.forms["delegate"]["name"].value = task[1];
            document.forms["delegate"]["priority"].value = task[2];
            document.forms["delegate"]["date"].value = task[4];
            document.forms["delegate"]["other"].value = task[5];
            document.forms["delegate"]["action"].value = "update";

            break;

        case "eliminate":

            tasks = matrix[3];
            task = tasks[id];

            // Set the modal title to match the action
            document.getElementById("eliminateModalLabel").innerText = "Update Eliminate Task";

            // Populate form fields
            document.forms["eliminate"]["tid"].value = id;
            document.forms["eliminate"]["name"].value = task[1];
            document.forms["eliminate"]["action"].value = "update";

            break;

    }

}
function validateLogin() {

    var username = document.forms["login"]["inputEmail"].value;
    var password = document.forms["login"]["inputPassword"].value;

    if (username == 'demo@test.com' && password == 'demo')
        return true;

    document.getElementById("notification").innerText = " Invalid login and/or password combination.";
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


function updateTask(listItem) {

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
            document.forms["urgent"]["name"].value = task[1];
            document.forms["urgent"]["priority"].value = task[2];
            document.forms["urgent"]["time"].value = task[5];
            document.forms["urgent"]["emailReminder"].value = task[6];
            document.forms["urgent"]["phoneReminder"].value = task[7];                               
            document.forms["urgent"]["action"].value = "update";

            break;

        case "plan":

            tasks = matrix[1];
            task = tasks[id];

            // Populate form fields
            document.forms["plan"]["tid"].value = id;
            document.forms["plan"]["name"].value = task[1];
            document.forms["plan"]["priority"].value = task[2];
            document.forms["plan"]["date"].value = task[4];
            document.forms["plan"]["action"].value = "update";

            break;

        case "delegate":

            tasks = matrix[2];
            task = tasks[id];

            // Populate form fields
            document.forms["delegate"]["tid"].value = id;
            document.forms["delegate"]["name"].value = task[1];
            document.forms["delegate"]["priority"].value = task[2];
            document.forms["delegate"]["date"].value = task[4];
            document.forms["delegate"]["other"].value = task[5];
            document.forms["delegate"]["action"].value = "update";

            break;

        case "eliminate":

            tasks = matrix[3];
            task = tasks[id];

            // Populate form fields
            document.forms["eliminate"]["tid"].value = id;
            document.forms["eliminate"]["name"].value = task[1];
            document.forms["eliminate"]["action"].value = "update";

            break;

    }

}
function loadList(name) {

    // Stores the application data
    var matrix = [];
    var globals = [];
    var tasks = [];
    var task = [];
    var view = "";

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    if (!(matrix && matrix.length))
        matrix = [];

    globals = matrix[6];

    if (!(globals && globals.length))
        globals = [];

    view = globals[1];

    switch (name) {

        case "urgent":

            tasks = matrix[0];

            if (tasks !== null) {

                /* Urget Tasks */
                var list = document.getElementById('urgentList');

                for (var i in tasks) {

                    task = tasks[i];

                    if (task[3] == view) {

                        var li = document.createElement("li");
                        var input = document.createElement("input");
                        var btn = document.createElement("button");
                        var span = document.createElement("span");
                        var div = document.createElement("div");
                        var attr = "";

                        if (view != "deleted") {

                            attr = document.createAttribute("type");
                            attr.value = "checkbox";
                            input.setAttributeNode(attr);
                            attr = document.createAttribute("onclick");
                            attr.value = "checkTask(this);";
                            input.setAttributeNode(attr);
                            attr = document.createAttribute("data-id");
                            attr.value = i;
                            input.setAttributeNode(attr);
                            attr = document.createAttribute("data-type");
                            attr.value = "urgent";
                            input.setAttributeNode(attr);

                            if (task[3] && task[3] == "completed")
                                input.checked = true;

                        }

                        attr = document.createAttribute("class");
                        attr.value = i + " list-group-item";
                        li.setAttributeNode(attr);

                        attr = document.createAttribute("class");
                        attr.value = "btn btn-default btn-sm";
                        btn.setAttributeNode(attr);

                        if (view != "deleted") {

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

                        }

                        btn.innerHTML = task[1];

                        if (task[3] && task[3] == "completed")
                            btn.style.textDecoration = "line-through";

                            if (task[5]) {
                                attr = document.createAttribute("class");
                                attr.value = "date";
                                div.setAttributeNode(attr);
                                div.innerHTML = task[5];
                            }                            

                        attr = document.createAttribute("class");
                        attr.value = "badge";
                        span.setAttributeNode(attr);

                        span.setAttribute("class", "badge");
                        span.innerHTML = '<a onclick="removeTask(this)" data-id="' + i + '" data-type="urgent">X</a>';

                        if (view != "deleted")
                            li.appendChild(input);
                        li.appendChild(span);
                        li.appendChild(btn);
                        if (task[5])
                            li.appendChild(div);                        
                        list.appendChild(li);

                    }

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

                    if (task[3] == view) {

                        var li = document.createElement("li");
                        var input = document.createElement("input");
                        var btn = document.createElement("button");
                        var span = document.createElement("span");
                        var div = document.createElement("div");
                        var attr = "";

                        if (view != "deleted") {

                            attr = document.createAttribute("type");
                            attr.value = "checkbox";
                            input.setAttributeNode(attr);
                            attr = document.createAttribute("onclick");
                            attr.value = "checkTask(this);";
                            input.setAttributeNode(attr);
                            attr = document.createAttribute("data-id");
                            attr.value = i;
                            input.setAttributeNode(attr);
                            attr = document.createAttribute("data-type");
                            attr.value = "plan";
                            input.setAttributeNode(attr);

                            if (task[3] && task[3] == "completed")
                                input.checked = true;

                        }

                        attr = document.createAttribute("class");
                        attr.value = i + " list-group-item";
                        li.setAttributeNode(attr);

                        attr = document.createAttribute("class");
                        attr.value = "btn btn-default btn-sm";
                        btn.setAttributeNode(attr);

                        if (view != "deleted") {

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

                        }

                        btn.innerHTML = task[1];

                        if (task[3] && task[3] == "completed")
                            btn.style.textDecoration = "line-through";

                        if (task[4]) {
                            attr = document.createAttribute("class");
                            attr.value = "date";
                            div.setAttributeNode(attr);
                            div.innerHTML = task[4];
                        }

                        attr = document.createAttribute("class");
                        attr.value = "badge";
                        span.setAttributeNode(attr);

                        span.setAttribute("class", "badge");
                        span.innerHTML = '<a onclick="removeTask(this)" data-id="' + i + '" data-type="plan">X</a>';

                        if (view != "deleted")
                            li.appendChild(input);
                        li.appendChild(span);
                        li.appendChild(btn);
                        if (task[4])
                            li.appendChild(div);
                        list.appendChild(li);

                    }

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

                    if (task[3] == view) {

                        var li = document.createElement("li");
                        var input = document.createElement("input");
                        var btn = document.createElement("button");
                        var span = document.createElement("span");
                        var div1 = document.createElement("div");
                        var div2 = document.createElement("div");
                        var attr = "";

                        if (view != "deleted") {

                            attr = document.createAttribute("type");
                            attr.value = "checkbox";
                            input.setAttributeNode(attr);
                            attr = document.createAttribute("onclick");
                            attr.value = "checkTask(this);";
                            input.setAttributeNode(attr);
                            attr = document.createAttribute("data-id");
                            attr.value = i;
                            input.setAttributeNode(attr);
                            attr = document.createAttribute("data-type");
                            attr.value = "delegate";
                            input.setAttributeNode(attr);

                            if (task[3] && task[3] == "completed")
                                input.checked = true;

                        }

                        attr = document.createAttribute("class");
                        attr.value = i + " list-group-item";
                        li.setAttributeNode(attr);

                        attr = document.createAttribute("class");
                        attr.value = "btn btn-default btn-sm";
                        btn.setAttributeNode(attr);

                        if (view != "deleted") {

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

                        }

                        btn.innerHTML = task[1];

                        if (task[3] && task[3] == "completed")
                            btn.style.textDecoration = "line-through";

                        if (task[5]) {
                            attr = document.createAttribute("class");
                            attr.value = "delegatedto";
                            div2.setAttributeNode(attr);
                            div2.innerHTML = task[5];
                        }

                        if (task[4]) {
                            attr = document.createAttribute("class");
                            attr.value = "date";
                            div1.setAttributeNode(attr);
                            div1.innerHTML = task[4];
                        }

                        attr = document.createAttribute("class");
                        attr.value = "badge";
                        span.setAttributeNode(attr);

                        span.setAttribute("class", "badge");
                        span.innerHTML = '<a onclick="removeTask(this)" data-id="' + i + '" data-type="delegate">X</a>';

                        if (view != "deleted")
                            li.appendChild(input);
                        li.appendChild(span);
                        li.appendChild(btn);
                        if (task[5])
                            li.appendChild(div2);
                        if (task[4])
                            li.appendChild(div1);
                        li.appendChild(div2);
                        list.appendChild(li);

                    }

                }
            }

            break;

        case "eliminate":

            tasks = matrix[3];

            if (tasks !== null) {

                /* Urget Tasks */
                var list = document.getElementById('eliminateList');

                for (var i in tasks) {

                    task = tasks[i];

                    if (task[3] == view) {

                        var li = document.createElement("li");
                        var input = document.createElement("input");
                        var btn = document.createElement("button");
                        var span = document.createElement("span");
                        var attr = "";

                        if (view != "deleted") {

                            attr = document.createAttribute("type");
                            attr.value = "checkbox";
                            input.setAttributeNode(attr);
                            attr = document.createAttribute("onclick");
                            attr.value = "checkTask(this);";
                            input.setAttributeNode(attr);
                            attr = document.createAttribute("data-id");
                            attr.value = i;
                            input.setAttributeNode(attr);
                            attr = document.createAttribute("data-type");
                            attr.value = "eliminate";
                            input.setAttributeNode(attr);

                            if (task[3] && task[3] == "completed")
                                input.checked = true;

                        }

                        attr = document.createAttribute("class");
                        attr.value = i + " list-group-item";
                        li.setAttributeNode(attr);

                        attr = document.createAttribute("class");
                        attr.value = "btn btn-default btn-sm";
                        btn.setAttributeNode(attr);

                        if (view != "deleted") {

                            attr = document.createAttribute("onclick");
                            attr.value = "loadTask(this);";
                            btn.setAttributeNode(attr);

                            attr = document.createAttribute("data-id");
                            attr.value = i;
                            btn.setAttributeNode(attr);

                            attr = document.createAttribute("data-type");
                            attr.value = "eliminate";
                            btn.setAttributeNode(attr);

                            attr = document.createAttribute("data-toggle");
                            attr.value = "modal";
                            btn.setAttributeNode(attr);

                            attr = document.createAttribute("data-target");
                            attr.value = "#eliminateModal";
                            btn.setAttributeNode(attr);

                        }

                        btn.innerHTML = task[1];

                        if (task[3] && task[3] == "completed")
                            btn.style.textDecoration = "line-through";

                        attr = document.createAttribute("class");
                        attr.value = "badge";
                        span.setAttributeNode(attr);

                        span.setAttribute("class", "badge");
                        span.innerHTML = '<a onclick="removeTask(this)" data-id="' + i + '" data-type="eliminate">X</a>';

                        if (view != "deleted")
                            li.appendChild(input);
                        li.appendChild(span);
                        li.appendChild(btn);
                        list.appendChild(li);

                    }
                }
            }

            break;

    }


}

function init() {

    // Stores the application data
    var matrix = [];
    var globals = [];
    var profile = [];
    var sort = [];
    var view = [];

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

    globals = matrix[6];

    if (!(globals && globals.length))
        globals = [];

    sort = globals[0];

    if (!(sort && sort.length))
        sort = [];

    // Load the sort options for each quandrant, or default if none
    if (sort[0])
        document.getElementById("urgentSortByList").value = sort[0];
    else {
        document.getElementById("urgentSortByList").value = "default";
        sort[0] = "default";
    }

    if (sort[1])
        document.getElementById("planSortByList").value = sort[1];
    else {
        document.getElementById("planSortByList").value = "default";
        sort[1] = "default";
    }

    if (sort[2])
        document.getElementById("delegateSortByList").value = sort[2];
    else {
        document.getElementById("delegateSortByList").value = "default";
        sort[2] = "default";
    }

    if (sort[3])
        document.getElementById("eliminateSortByList").value = sort[3];
    else {
        document.getElementById("eliminateSortByList").value = "default";
        sort[3] = "default";
    }

    globals[0] = sort;
    matrix[6] = globals;
    localStorage.setItem('matrix', JSON.stringify(matrix));

    // Load the task selctor initial value, or default if none
    if (globals[1])
        document.getElementById("taskViewSelector").value = globals[1];
    else {
        document.getElementById("taskViewSelector").value = "current";

        globals[1] = "current";
        matrix[6] = globals;
        localStorage.setItem('matrix', JSON.stringify(matrix));

    }

    if (settings[0])
        document.getElementById("urgentModal").getElementsByClassName("modal-header")[0].style.backgroundColor = settings[0];
    else
        document.getElementById("urgentModal").getElementsByClassName("modal-header")[0].style.backgroundColor = "#f14141";

    if (settings[1])
        document.getElementById("planModal").getElementsByClassName("modal-header")[0].style.backgroundColor = settings[1];
    else
        document.getElementById("planModal").getElementsByClassName("modal-header")[0].style.backgroundColor = "#3cb0ea";

    if (settings[2])
        document.getElementById("delegateModal").getElementsByClassName("modal-header")[0].style.backgroundColor = settings[2];
    else
        document.getElementById("delegateModal").getElementsByClassName("modal-header")[0].style.backgroundColor = "#89b309";

    if (settings[3])
        document.getElementById("eliminateModal").getElementsByClassName("modal-header")[0].style.backgroundColor = settings[3];
    else
        document.getElementById("eliminateModal").getElementsByClassName("modal-header")[0].style.backgroundColor = "grey";

}

function removeTask(listItem) {

    // Stores the application data
    var matrix = [];
    var tasks = [];
    var task = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    switch (listItem.dataset.type) {

        case "urgent":

            tasks = matrix[0];
        
            if (!(tasks && tasks.length))
                tasks = [];
                
            task = tasks[listItem.dataset.id];

            if (!(task && task.length))
                task = [];

            if (task[3] == "deleted") {
                tasks.splice(listItem.dataset.id, 1);
            } else {
                task[3] = "deleted";
                tasks[listItem.dataset.id] = task;
            }

            matrix[0] = tasks;
            localStorage.setItem("matrix", JSON.stringify(matrix));
            clearList("urgent");
            loadList("urgent");
            break;

        case "plan":

            tasks = matrix[1];
        
            if (!(tasks && tasks.length))
                tasks = [];
                
            task = tasks[listItem.dataset.id];

            if (!(task && task.length))
                task = [];
            if (task[3] == "deleted") {
                tasks.splice(listItem.dataset.id, 1);
            } else {
                task[3] = "deleted";
                tasks[listItem.dataset.id] = task;
            }

            matrix[1] = tasks;
            localStorage.setItem("matrix", JSON.stringify(matrix));
            clearList("plan");
            loadList("plan");
            break;

        case "delegate":

            tasks = matrix[2];
        
            if (!(tasks && tasks.length))
                tasks = [];
                
            task = tasks[listItem.dataset.id];

            if (!(task && task.length))
                task = [];
            if (task[3] == "deleted") {
                tasks.splice(listItem.dataset.id, 1);
            } else {
                task[3] = "deleted";
                tasks[listItem.dataset.id] = task;
            }

            matrix[2] = tasks;
            localStorage.setItem("matrix", JSON.stringify(matrix));
            clearList("delegate");
            loadList("delegate");
            break;

        case "eliminate":

            tasks = matrix[3];
        
            if (!(tasks && tasks.length))
                tasks = [];
                
            task = tasks[listItem.dataset.id];

            if (!(task && task.length))
                task = [];
            if (task[3] == "deleted") {
                tasks.splice(listItem.dataset.id, 1);
            } else {
                task[3] = "deleted";
                tasks[listItem.dataset.id] = task;
            }

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
    var globals = [];
    var tasks = [];
    var task = [];
    var buffer = [];
    var action = "";
    var index = 0;
    var sort = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    if (!(matrix && matrix.length))
        matrix = [];

    globals = matrix[6];

    if (!(globals && globals.length))
        globals = [];

    switch (type) {

        case "urgent":

            var tname = "";
            var priority = 0;
            var ttime = "";

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
            priority = document.forms["urgent"]["priority"].value;
            ttime = document.forms["urgent"]["time"].value;

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
            attr = document.createAttribute("data-id");
            attr.value = index;
            input.setAttributeNode(attr);
            attr = document.createAttribute("data-type");
            attr.value = "urgent";
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
            var temp = tasks[index];
            task[0] = index;
            task[1] = tname;
            task[2] = priority;

            if (temp)
                task[3] = temp[3];
            else
                task[3] = "current";

            task[5] = ttime;

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

            sort = globals[0];
            
            if (!(sort && sort.length))
                sort = [];
            
            // Sort the list after the new task has been added.
            sortUrgentTasks(sort[0]);

            // Manually toggle the urgent modal
            $('#urgentModal').modal('toggle');

            break;

        case "plan":

            var tname = "";
            var priority = 0;
            var tdate = "";

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
            priority = document.forms["plan"]["priority"].value;
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
            attr = document.createAttribute("data-id");
            attr.value = index;
            input.setAttributeNode(attr);
            attr = document.createAttribute("data-type");
            attr.value = "plan";
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
            var temp = tasks[index];
            task[0] = index;
            task[1] = tname;
            task[2] = priority;

            if (temp)
                task[3] = temp[3];
            else
                task[3] = "current";

            task[4] = tdate;

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

            sort = globals[0];

            if (!(sort && sort.length))
                sort = [];

            // Sort the list after the new task has been added.
            sortPlannedTasks(sort[1]);

            // Manually toggle the urgent modal
            $('#planModal').modal('toggle');

            break;

        case "delegate":

            var tname = "";
            var priority = 0;
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
            priority = document.forms["delegate"]["priority"].value;
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
            attr = document.createAttribute("data-id");
            attr.value = index;
            input.setAttributeNode(attr);
            attr = document.createAttribute("data-type");
            attr.value = "delegate";
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
            var temp = tasks[index];
            task[0] = index;
            task[1] = tname;
            task[2] = priority;

            if (temp)
                task[3] = temp[3];
            else
                task[3] = "current";

            task[4] = tdate;
            task[5] = tother;

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

            sort = globals[0];
            
            if (!(sort && sort.length))
                sort = [];
            
            // Sort the list after the new task has been added.
            sortDelegatedTasks(sort[2]);

            // Manually toggle the urgent modal
            $('#delegateModal').modal('toggle');

            break;

        case "eliminate":

            var tname = "";

            if (matrix[3] && matrix[3].length)
                tasks = matrix[3];

            action = document.forms["eliminate"]["action"].value;

            if (action == 'new') {
                index = tasks.length;
            } else if (action == 'update') {
                index = document.forms["eliminate"]["tid"].value;
            }

            // Task name that will be added to the list and localStorage
            tname = document.forms["eliminate"]["name"].value;

            var list = document.getElementById('eliminateList');

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
            attr = document.createAttribute("data-id");
            attr.value = index;
            input.setAttributeNode(attr);
            attr = document.createAttribute("data-type");
            attr.value = "eliminate";
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
            attr.value = "eliminate";
            btn.setAttributeNode(attr);

            attr = document.createAttribute("data-toggle");
            attr.value = "modal";
            btn.setAttributeNode(attr);

            attr = document.createAttribute("data-target");
            attr.value = "#eliminateModal";
            btn.setAttributeNode(attr);

            btn.innerHTML = tname;

            attr = document.createAttribute("class");
            attr.value = "badge";
            span.setAttributeNode(attr);

            span.setAttribute("class", "badge");
            span.innerHTML = '<a onclick="removeTask(this)" data-id="' + index + '" data-type="eliminate">X</a>';

            li.appendChild(input);
            li.appendChild(span);
            li.appendChild(btn);
            list.appendChild(li);

            // Check the action and type of data
            var temp = tasks[index];
            task[0] = index;
            task[1] = tname;

            if (temp)
                task[3] = temp[3];
            else
                task[3] = "current";

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

            sort = globals[0];
            
            if (!(sort && sort.length))
                sort = [];
            
            // Sort the list after the new task has been added.
            sortEliminatedTasks(sort[3]);

            // Manually toggle the urgent modal
            $('#eliminateModal').modal('toggle');

    }

    // Return false to prevent the form from submitting
    return false;

}
function checkTask(box) {

    // Stores the application data
    var matrix = [];
    var tasks = [];
    var task = [];
    var index = 0;

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    if (box.dataset.type == 'urgent') {
        index = 0;
        task[1] = "";
        task[2] = "";
    } else if (box.dataset.type == 'plan')
        index = 1;
    else if (box.dataset.type == 'delegate')
        index = 2;
    else if (box.dataset.type == 'eliminate')
        index = 3;

    if (matrix[index] && matrix[index].length)
        tasks = matrix[index];

    task = tasks[box.dataset.id];

    var isChecked = box.checked;

    if (isChecked) {
        task[3] = "completed";
    } else {
        task[3] = "current";
    }

    matrix[index] = tasks;
    localStorage.setItem("matrix", JSON.stringify(matrix));

    if (box.dataset.type == 'urgent') {
        clearList("urgent");
        loadList("urgent");
    } else if (box.dataset.type == 'plan') {
        clearList("plan");
        loadList("plan");
    } else if (box.dataset.type == 'delegate') {
        clearList("delegate");
        loadList("delegate");
    } else if (box.dataset.type == 'eliminate') {
        clearList("eliminate");
        loadList("eliminate");
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
