import React, { useState } from 'react';

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  const projects = [
    {
      name: 'Dashboard Application',
      description: 'The Dashboard Application is a web-based platform that provides users with an interactive interface to visualize and manage various datasets and metrics. It includes multiple components such as customer feedback, activity charts, and goal completion progress bars.',
      skills: ['React.js', 'JavaScript', 'API Integration', 'CSS Modules'],
    },
    {
      name: 'Real-Time Chat Application',
      description: 'Developed a real-time chat application using HTML5, CSS, JavaScript, and Node.js. The application allows users to communicate in real-time via text messages. Technologies Used: HTML5, CSS, JavaScript, Node.js. Designed the look and feel with HTML and CSS. Made the chat work smoothly using JavaScript.',
      skills: ['HTML5', 'CSS', 'JavaScript', 'Node.js'],
    },
    {
      name: 'Insurance Policy Management',
      description: 'The Insurance Policy Management Application is a full-stack web application designed to manage insurance policies. It allows users to create, update, view, and delete insurance policies, ensuring smooth handling of customer data, premium payments, and due dates.',
      skills: ['ReactJS', 'SpringBoot', 'MySQL Workbench', 'REST APIs '],
    },
    {
      name: 'ToDo List',
      description: 'Developed a dynamic and user-friendly to-do list application to enhance productivity and task management for users. Designed the user interface using HTML5 and CSS, ensuring a visually appealing and intuitive layout. Developed dynamic functionalities with JavaScript to handle task operations.',
      skills: ['HTML5', 'CSS', 'JavaScript'],
    },
    {
      name: 'Expense Tracker',
      description: 'The Expense Tracker is a web application designed to help users manage their finances efficiently by tracking income and expenses. Developed using HTML, CSS, and JavaScript, the application provides a user-friendly interface for adding, and deleting transactions. Implemented the front-end interface using HTML and CSS for a visually appealing and intuitive user experience. Developed client-side functionality with JavaScript to enable users to add and delete transactions easily. Managed the creation of the Expense Tracker app, ensuring it was easy to use and worked smoothly.',
      skills: ['HTML5', 'CSS', 'JavaScript'],
    },
    {
      name: 'Rotating Image Gallery',
      description: 'Developed a dynamic rotating image gallery that showcases a collection of images with smooth transitions and interactive features. Utilized HTML5 for structure, CSS for styling, and JavaScript for functionality. Implemented the rotation effect using CSS animations and JavaScript event handling. Utilized JavaScript libraries for smooth transitions and user interactions.',
      skills: ['HTML5', 'CSS', 'JavaScript'],
    },
  ];

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    textAlign: 'center',
    // backgroundImage: 'url(/project.jpg)',
    // backgroundSize: 'cover',
    // backgroundPosition: 'center',
    // backgroundRepeat: 'no-repeat',
    margin: 0,
    padding: 0,
    width: '100%',
    color: '#fff',
    paddingTop: '2rem',
    paddingBottom: '2rem',
    background: 'linear-gradient(180deg,rgb(44, 3, 3), #121212)',
  };

  const overlayStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
  };

  const contentStyle = {
    zIndex: 2,
    padding: '1rem',
    maxWidth: '1000px',
    margin: '0 auto',
  };

  const projectListStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  };

  const projectItemStyle = {
    cursor: 'pointer',
    fontSize: '1.5rem',
    margin: '1rem 0',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    transition: 'background-color 0.3s ease',
  };

  const projectItemHoverStyle = {
    backgroundColor: 'rgba(89, 77, 245, 0.4)',
  };

  const detailsStyle = {
    marginTop: '1rem',
    fontSize: '1.2rem',
    lineHeight: '1.5',
    color: '#050505', // Different color for skills to stand out
  };

  const skillsStyle = {
    marginTop: '0.5rem',
    fontSize: '1rem',
    color: '#050505', // Different color for skills to stand out
  };

  return (
    <div style={containerStyle}>
      <div style={overlayStyle}></div>
      <div style={contentStyle}>
        <h1>My Projects</h1>
        <ul style={projectListStyle}>
          {projects.map((project, index) => (
            <li
              key={index}
              style={{
                ...projectItemStyle,
                ...(activeProject === index ? projectItemHoverStyle : {}),
              }}
              onClick={() => setActiveProject(activeProject === index ? null : index)}
            >
              {project.name}
              {activeProject === index && (
                <div style={detailsStyle}>
                  <p>{project.description}</p>
                  <div style={skillsStyle}>
                    <strong>Skills Used:</strong> {project.skills.join(', ')}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Projects;
