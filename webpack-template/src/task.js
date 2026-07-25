export default class Task {
  constructor(name, priority, description, dueDate) {
    this.name = name
    this.priority = priority
    this.description = description
    this.dueDate = dueDate
    this.notes = ''
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
