let tasks=["Task 0", "Task 1"];

let input= prompt("Enter the thing You would like to do");

while(input!=='q'){

    if(input=='new'){
        let newTask = prompt("Enter The Task");
        tasks.push(newTask);
        console.log(`${newTask} :Task  Added Successfully`);
    }
    else if(input=='list'){
        console.log("TASK LIST");
        console.log("*****************");
        for(let i=0;i<tasks.length;i++){
            
            console.log(`${i}. ${ tasks[i]}`);
        }
        console.log("*****************");
    }
    else if(input=='del'){
        console.log("TASK LIST");
        console.log("*****************");
        for(let i=0;i<tasks.length;i++){
           
            console.log(`${i}. ${ tasks[i]}`);
        }
        console.log("*****************");
        let index = parseInt(prompt("Enter the Index of the Task"));
        if(index>=tasks.length || Number.isNaN(index)==true){
            console.log("INDEX NOT VALID");
        }else{
        console.log(`INDEX OF TASK TO DELETE: ${index}`);
        tasks.splice(index,1);
        console.log("Task Deleted Successfully");
        }
    }
    input= prompt("Enter the thing yo would like to do");

}
console.log('You Quit The App');