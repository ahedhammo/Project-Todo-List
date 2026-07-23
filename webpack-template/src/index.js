
class Task {
  constructor(name, priority, description, completed, id) {
    this.name = name
    this.priority = priority
    this.description = description
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
  removeTask(task) {
    const taskId = task.getId()
    const index = this.#tasks.findIndex(item => item.id === taskId);
    if (index !== -1) {
      this.#tasks.splice(index, 1);
    }
  }
  getTasks() {
    return this.#tasks
  }
  checkDuplicateNames(task) {
    const taskNameValue = this.#tasks.map(task => task.name);
    return taskNameValue.includes(task)
  }
}

const board = new TaskBoard()
const code = new Task("code", 1, "hi")
const code2 = new Task("code", 2, "hi")




board.addTask(code)
board.addTask(code2)
board.removeTask(code2)


console.table(board.getTasks())
