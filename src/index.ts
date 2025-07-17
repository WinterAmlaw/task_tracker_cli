#!/usr/bin/env node

import process from "process";

type Command = "add" | "update" | "delete" | "list" | "mark-in-progress" | "mark-done";
type TaskId = number | "done" | "todo" | "in-progress";
type TaskDescription = string;

class TaskTracker{
  command: Command;
  taskId: TaskId;
  taskDescription: TaskDescription;
  constructor(command: Command, taskId: TaskId, taskDescription: TaskDescription){
    this.command = command;
    this.taskId = taskId;
    this.taskDescription = taskDescription;
  }




  run(){
    switch (this.command) {
      case "add":
          console.log(this.command + this.taskId);
        break;
    
      default:
        break;
    }
  }
}




const taskTracker = new TaskTracker(process.argv[2], process.argv[3], process.argv[4])
// function execute() {
//   console.log(process.argv[2])
  
// };

// execute();