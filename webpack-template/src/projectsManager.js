export default  class ProjectsManager {
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