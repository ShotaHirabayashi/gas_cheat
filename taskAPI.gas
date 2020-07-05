//https://github.com/gsuitedevs/apps-script-samples/blob/master/tasks/simpleTasks/simpleTasks.gs
//https://www.virment.com/how-to-deploy-google-apps-script-as-webapp/



/**
 * Returns the ID and name of every task list in the user's account.
 * @return {Array.<Object>} The task list data.
 */
function getTaskLists() {
  var taskLists = Tasks.Tasklists.list().getItems();
  if (!taskLists) {
    return [];
  }
  return taskLists.map(function(taskList) {
    return {
      id: taskList.getId(),
      name: taskList.getTitle()
    };
  });
}


/**
 * Returns information about the tasks within a given task list.
 * @param {String} taskListId The ID of the task list.
 * @return {Array.<Object>} The task data.
 */
function getTasks(taskListId) {
  var tasks = Tasks.Tasks.list(taskListId).getItems();
  if (!tasks) {
    return [];
  }
  return tasks.map(function(task) {
    return {
      id: task.getId(),
      title: task.getTitle(),
      notes: task.getNotes(),
      completed: Boolean(task.getCompleted())
    };
  }).filter(function(task) {
    return task.title;
  });
}


/**
 * Sets the completed status of a given task.
 * @param {String} taskListId The ID of the task list.
 * @param {String} taskId The ID of the task.
 * @param {Boolean} completed True if the task should be marked as complete, false otherwise.
 */
function setCompleted(taskListId, taskId, completed) {
  var task = Tasks.newTask();
  if (completed) {
    task.setStatus('completed');
  } else {
    task.setStatus('needsAction');
    task.setCompleted(null);
  }
  Tasks.Tasks.patch(task, taskListId, taskId);
}



/**
 * Adds a new task to the task list.
 * @param {String} taskListId The ID of the task list.
 * @param {String} title The title of the new task.
 * @param {String} memo The memo of the new task.
 */
function addTask(taskListId, title,memo) {
    var task = {
    title: title, //  タイトル
    notes: memo, // メモ
  };
  task = Tasks.Tasks.insert(task, taskListId);
  Logger.log("追加されたタスクのID：" + task.id);
}


/**
 * Delete a task 
 * @param {String} taskListId The ID of the task list.
 * @param {String} taskId The ID of the task.
 */
function deleteTask(taskListId,taskId){
  Tasks.Tasks.remove(taskListId, taskId);
}





//================
// 呼び出し
//================


//リストの名前とIDを全取得
function checkListId(){ 
  var myTaskLists = getTaskLists();
  for(let i =0; i < myTaskLists.length;i++){
    console.log(myTaskLists[i].name + ":" + myTaskLists[i].id);
  }
}

//タスクを全て取得
function callGetTask(){
  
  var myTaskLists = getTaskLists();
  var text = '';
  var bar = '\n================\n'; 
  //全体のTODOはスキップする
  for(let j =1 ; j < myTaskLists.length; j++){
    var myList = getTasks( myTaskLists[j].id );
    var name = myTaskLists[j].name;
    text += '\n' + name + "\n" ;
    let id = myTaskLists[j].id;
    var myTasks　= getTasks(id);
    for(let i =0 ; i < myTasks.length; i++){
      var title = myTasks[i].title + "\n";
      text += title;
    }
    text += bar;
  }
  return text;
}

//タスクを追加
function callAddTask(){
  var myTaskLists = getTaskLists();
  var myTaskListID       = myTaskLists[1].id
  addTask( myTaskListID ,'テスト','test');
}

//未完反転
function callSetCompleted(){
  var myTaskLists = getTaskLists();
  var myTaskListID       = myTaskLists[1].id
  var myTasks       = getTasks( myTaskListID )
  var myFirstTaskID = myTasks[0].id
  setCompleted( myTaskListID, myFirstTaskID, true);
  
}
