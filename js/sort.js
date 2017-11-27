function sortUrgentTasks(type) {

    // Stores the application data
    var matrix = [];
    var globals = [];
    var tasks = [];
    var sort = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    if (!(matrix && matrix.length))
        matrix = [];

    globals = matrix[6];

    if (!(globals && globals.length))
        globals = [];

    sort = globals[0];

    if (!(sort && sort.length))
        sort = [];

    tasks = matrix[0];

    if (!(tasks && tasks.length))
        tasks = [];

    switch (type) {

        case "priority":

            tasks.sort(function (a, b) {
                return b[2] - a[2];
            });
            sort[0] = "priority";

            break;

        case "ascending":

            tasks.sort(function (a, b) {

                var taskA = a[1].toLowerCase();
                var taskB = b[1].toLowerCase();

                if (taskA < taskB)
                    return -1;
                else if (taskA > taskB)
                    return 1;

                return 0;

            });
            sort[0] = "ascending";

            break;

        case "descending":

            tasks.reverse(function (a, b) {

                var taskA = a[1].toLowerCase();
                var taskB = b[1].toLowerCase();

                if (taskA < taskB)
                    return -1;
                else if (taskA > taskB)
                    return 1;

                return 0;

            });
            sort[0] = "descending";

            break;

        default:

            tasks.sort(function (a, b) {
                return a[0] - b[0];
            });
            sort[0] = "default";

    }

    // Store the newly sorted results
    globals[0] = sort;
    matrix[0] = tasks;
    matrix[6] = globals;
    localStorage.setItem('matrix', JSON.stringify(matrix));

    clearList("urgent");
    loadList("urgent");
    document.forms["urgent"]["action"].value = "new";

}
function sortPlannedTasks(type) {

    // Stores the application data
    var matrix = [];
    var globals = [];
    var tasks = [];
    var sort = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    if (!(matrix && matrix.length))
        matrix = [];

    globals = matrix[6];

    if (!(globals && globals.length))
        globals = [];

    sort = globals[0];

    if (!(sort && sort.length))
        sort = [];

    tasks = matrix[1];

    if (!(tasks && tasks.length))
        tasks = [];

    switch (type) {

        case "priority":

            tasks.sort(function (a, b) {
                return b[2] - a[2];
            });

            sort[1] = "priority";

            break;

        case "ascending":

            tasks.sort(function (a, b) {

                var taskA = a[1].toLowerCase();
                var taskB = b[1].toLowerCase();

                if (taskA < taskB)
                    return -1;
                else if (taskA > taskB)
                    return 1;

                return 0;

            });
            sort[1] = "ascending";

            break;

        case "descending":

            tasks.reverse(function (a, b) {

                var taskA = a[1].toLowerCase();
                var taskB = b[1].toLowerCase();

                if (taskA < taskB)
                    return -1;
                else if (taskA > taskB)
                    return 1;

                return 0;

            });
            sort[1] = "descending";

            break;

        default:

            tasks.sort(function (a, b) {
                return a[0] - b[0];
            });
            sort[1] = "default";

    }

    // Store the newly sorted results
    globals[0] = sort;
    matrix[1] = tasks;
    matrix[6] = globals;
    localStorage.setItem('matrix', JSON.stringify(matrix));

    clearList("plan");
    loadList("plan");
    document.forms["plan"]["action"].value = "new";

}
function sortDelegatedTasks(type) {

    // Stores the application data
    var matrix = [];
    var globals = [];
    var tasks = [];
    var sort = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    if (!(matrix && matrix.length))
        matrix = [];

    globals = matrix[6];

    if (!(globals && globals.length))
        globals = [];

    sort = globals[0];

    if (!(sort && sort.length))
        sort = [];

    tasks = matrix[2];

    if (!(tasks && tasks.length))
        tasks = [];

    switch (type) {

        case "priority":

            tasks.sort(function (a, b) {
                return b[2] - a[2];
            });

            sort[2] = "priority";

            break;

        case "ascending":

            tasks.sort(function (a, b) {

                var taskA = a[1].toLowerCase();
                var taskB = b[1].toLowerCase();

                if (taskA < taskB)
                    return -1;
                else if (taskA > taskB)
                    return 1;

                return 0;

            });
            sort[2] = "ascending";

            break;

        case "descending":

            tasks.reverse(function (a, b) {

                var taskA = a[1].toLowerCase();
                var taskB = b[1].toLowerCase();

                if (taskA < taskB)
                    return -1;
                else if (taskA > taskB)
                    return 1;

                return 0;

            });
            sort[2] = "descending";

            break;

        default:

            tasks.sort(function (a, b) {
                return a[0] - b[0];
            });
            sort[2] = "default";

    }

    // Store the newly sorted results
    globals[0] = sort;
    matrix[2] = tasks;
    matrix[6] = globals;
    localStorage.setItem('matrix', JSON.stringify(matrix));

    clearList("delegate");
    loadList("delegate");
    document.forms["delegate"]["action"].value = "new";

}
function sortEliminatedTasks(type) {

    // Stores the application data
    var matrix = [];
    var globals = [];
    var tasks = [];
    var sort = [];

    // Get the data from localStorage
    matrix = JSON.parse(localStorage.getItem("matrix"));

    if (!(matrix && matrix.length))
        matrix = [];

    globals = matrix[6];

    if (!(globals && globals.length))
        globals = [];

    sort = globals[0];

    if (!(sort && sort.length))
        sort = [];

    tasks = matrix[3];

    if (!(tasks && tasks.length))
        tasks = [];

    switch (type) {

        case "ascending":

            tasks.sort(function (a, b) {

                var taskA = a[1].toLowerCase();
                var taskB = b[1].toLowerCase();

                if (taskA < taskB)
                    return -1;
                else if (taskA > taskB)
                    return 1;

                return 0;

            });
            sort[3] = "ascending";

            break;

        case "descending":

            tasks.reverse(function (a, b) {

                var taskA = a[1].toLowerCase();
                var taskB = b[1].toLowerCase();

                if (taskA < taskB)
                    return -1;
                else if (taskA > taskB)
                    return 1;

                return 0;

            });
            sort[3] = "descending";

            break;

        default:

            tasks.sort(function (a, b) {
                return a[0] - b[0];
            });
            sort[3] = "default";

    }

    // Store the newly sorted results
    globals[0] = sort;
    matrix[3] = tasks;
    matrix[6] = globals;
    localStorage.setItem('matrix', JSON.stringify(matrix));

    clearList("eliminate");
    loadList("eliminate");
    document.forms["eliminate"]["action"].value = "new";

}
