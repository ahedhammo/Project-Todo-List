import { format, isToday, isPast, formatDistanceToNow } from 'date-fns'

class Task {
  constructor(name, priority, description, dueDate, completed, id) {
    this.name = name
    this.priority = priority
    this.description = description
    this.dueDate = dueDate
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

class Project {
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

class ProjectsManager {
  #projects = []

  createProject(project) {
    const projectName = project.name
    if (!this.checkDuplicateNames(projectName)) {
      this.#projects.push(project)
    }
  }
  checkDuplicateNames(project) {
    const projectNameValue = this.#projects.map(project => project.name);
    return projectNameValue.includes(project)
  }

  addTaskToProject(projectName, task) {
    const projectId = projectName.id
    const project = this.#projects.find(p => p.id === projectId)
    project.addTask(task)
  }

  getProjectById(project) {
   const projectId = project.id
   return this.#projects.find(p => p.id === projectId)
  }
  getAllProjects() {
    return this.#projects
  }
}

const projectBoard = new ProjectsManager()

const code1 = new Task("code1", 1, 'hi', new Date('2026-08-08'))
const code2 = new Task("code2", 2,)
const code3 = new Task("code3", 3,)
const code4 = new Task("code3", 3,)

const project1 = new Project("Project1")
const project2 = new Project("Project2")



projectBoard.createProject(project1)
projectBoard.createProject(project2)

projectBoard.addTaskToProject(project1, code1)
projectBoard.addTaskToProject(project2, code3)
projectBoard.addTaskToProject(project2, code4)



console.table(project1.getTasks())
console.table(projectBoard.getAllProjects())
