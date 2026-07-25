export default  class Project {
  #tasks = []
  constructor(name, id) {
    this.name = name
    this.id = crypto.randomUUID()
  }
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