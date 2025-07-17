#!/usr/bin/env node
const TaskTracker = /** @class */ (function () {
    function TaskTracker(command, taskId, taskDescription) {
        this.command = command;
        this.taskId = taskId;
        this.taskDescription = taskDescription;
    }
    TaskTracker.prototype.run = function () {
        switch (command) {
            case "add":
                break;
            default:
                break;
        }
    };
    return TaskTracker;
}());
// function execute() {
//   console.log(process.argv[2])
// };
// execute();
