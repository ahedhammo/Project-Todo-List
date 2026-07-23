
class Task {
  constructor(name, priority, completed, id) {
    this.name = name
    this.priority = priority
    this.completed = false
    this.id = crypto.randomUUID()
  }

  toggleCompleted() {
    this.completed = !this.completed
  }

  getId() {
    return this.id
  }
}

class TaskBoard {
  #tasks = []
  addTask(task) {
    const taskName = task.name
    if (!this.checkDuplicateNames(taskName  )) {
      this.#tasks.push(task)
    }
  }
  removeTasks(task) {
    const taskId = task.getId()
    return taskId
  }
  getTasks() {
    return this.#tasks
  }
  checkDuplicateNames(task) {
    const taskNameValue = this.#tasks.map(task => task.name);
    if (taskNameValue.includes(task)) {
      return true
    }
  }
}

const board = new TaskBoard()
const code = new Task("code", 1)
const code2 = new Task("code", 2)

board.addTask(code)
board.addTask(code2)

console.log(board.checkDuplicateNames())
console.table(board.getTasks())
