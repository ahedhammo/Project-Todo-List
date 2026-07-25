import { format, isToday, isPast, formatDistanceToNow } from 'date-fns'
import ProjectsManager from './projectsManager.js'
import Project from './project.js'
import Task from './task.js'


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