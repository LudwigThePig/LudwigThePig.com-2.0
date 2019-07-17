import * as React from 'react';
import { store } from '../redux/store';
import Project from './project';
import { project } from '../types';
import projects from '../../projects';
import { updateProjects } from '../redux/actions/projectsAction';
import axios from 'axios';


interface IProjectsState {
  projects: Array<project>
}

interface IProjectsProps {
  projects: Array<project>
}

class Projects extends React.Component <IProjectsProps, IProjectsState>  {

  private static getProjects() {
    return axios(`http://localhost:3000/api/v1/projects`)
      .then(data => data)
      .catch(console.error);
  }

  constructor(props: IProjectsProps) {
    super(props);
    this.state = {
      projects: store.getState().projects.projects
    }
  }

  componentDidMount() {
    Projects.getProjects()
      .then(data => store.dispatch(updateProjects(data.data)));
  }

  render() {
    const { projects } = this.state;
    return (
      <div>
        <h1>Projects</h1>
        { projects.map(proj => <Project {...proj} />) }
      </div>
    );
  }
} 
    
export default Projects;