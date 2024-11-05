const profileData = {
  title: "Resume",
  name: "Frederick Dodzi Mensah",
  sub_title: "LinuxSystem Administrator, and DevOps Engineer",
  logoURL: "assets/images/dp.jpg",
  about: {
    intro: `Experienced Linux System Administrator with over [4 years] of hands-on expertise in managing and optimizing Linux/RedHat, Ubuntu & Mac OS environments. Skilled in scripting (Shell, yaml, java,Python, Ansible) and proficient with DevOps tools such as Jenkins, Nagios, Datadog, and GitHub. Demonstrated ability to streamline system administration processes, debug issues efficiently, and implement effective solutions in hybrid and cloud-based environments. Strong communication skills with a proactive approach to troubleshooting and team collaboration...`,
    contact: {
      email: "mensahfrederickdodzi@gmail.com",
      phone: "+1 5068971680",
      address: "Fredericton-New Brunswick, Canada",
    },
  },
  links: [
    {
      title: "LinkedIn",
      src: "https://www.linkedin.com/in/frederick-Dodzi-Mensah",
      iconClass: "fa-brands fa-linkedin-in",
    },
    {
      title: "Github",
      src: "https://github.com/frederick-dmenssah",
      iconClass: "fa-brands fa-github",
    },
  ],
  skills: [
    {
      title: "Operating System",
      value: "Linux, Windows",
    },
    {
      title: "Languages",
      value: "Bash, Java,JavaScript,C++ & Python Scripting",
    },
    {
      title: "Version Control",
      value: "Git, GitHub",
    },
    {
      title: "CI-CD",
      value: "Jenkins, GitHub Actions",
    },
    {
      title: "Container & Orchestration",
      value: "Docker, Kubernetes",
    },
    {
      title: "Monitoring & Observability",
      value: "Prometheus, Grafana",
    },
    {
      title: "Cloud Computing",
      value: "AWS",
    },
    {
      title: "Infrastructure-as-Code & Configuration Mgt.",
      value: "Terraform, Ansible",
    },
  ],
  experiences: [
    {
      organization: "Consolidated, Bank Ghana",
      title: "Network Support Officer",
      date: "2020-03-25 - 2023-08-20",
      details: [
        `~Administered and maintained Linux/RedHat systems, performing tasks such as user management, log monitoring, and troubleshooting.
       ~ Executed scripting tasks using Shell, Python, and Ansible to automate routine administrative functions, reducing manual efforts by over 80%.
        ~Managed infrastructure using DevOps practices, configuring and optimizing Jenkins, Nagios, and Datadog for continuous integration and monitoring.
        ~Leveraged AWS services (EKS, EC2, S3, VPC) to deploy and manage scalable and secure cloud environments.
        ~Monitored system health and security, using Splunk for real-time data analysis and threat detection.
       ~ Followed Standard Operating Procedures (SOP) to efficiently resolve issues, ensuring minimal downtime and seamless operations.
       ~ part of the <strong>RummyCulture App</strong> team, worked on the development of core features like <strong>TDS summary & certificate</strong>, <strong>game join & re-join flow</strong> improvements,
        <strong>scorecard</strong>, <strong>withdrawal flow</strong>, <strong>user referral flow</strong>, and <strong>game bubble state</strong> optimizations.
        I ensured end-to-end responsibility, focusing on <strong>pixel-perfect UI</strong>, smooth UX, user testing, <strong>A/B experiments</strong>, cross-platform compatibility,
        and timely delivery.`,
        `Implemented the <strong>FT/UX</strong> (First Time User Experience) flow, boosting day1 metrics of Registration to Add Cash and Registration to Cash Game by around <strong>5%</strong>.`,
        `Integrated in-house <strong>help center SDK</strong>, offering self-help features like guided app core flows and callback scheduling for users, leading to a <strong>reduction in customer call volume</strong>.`,
        `Initiated the standardization of a React-Native <strong>custom UI library</strong>, encompassing reusable components, utilities, higher-order components, hooks, and animations for versatile project needs.`,
        `Addressed live issues such as App crashes, JS crashes, and ANRs using <strong>Sentry</strong> and <strong>Firebase Crashlytics</strong>. Mentored juniors through knowledge-sharing and code-review sessions to ensure bug-free code and optimal performance.`,
      ],
    },
    {
      organization: "Company 2",
      title: `Position`,
      date: "Date",
      details: [
        `As part of the <strong>Pricing and Promotion Team</strong>, worked on the migration of legacy projects from <strong>AngularJS to React-Redux</strong>, implementing a new design. I developed a React-based UI component library and utilities, now utilized across multiple projects.`,
        `Other responsibilities include implementing new features, as well as patching and resolving bugs in existing features, while also addressing on-call issues promptly.`,
      ],
    },
    {
      organization: "Company 3",
      title: `Position`,
      date: "Date",
      details: [
        `Created feature-specific modules within the internal CRM to enhance team operations. Utilized <strong>ReactJS</strong> with <strong>SCSS</strong> and <strong>Redux</strong> for frontend development, alongside <strong>NodeJS-Express</strong> with protobuf for backend functionality.`,
        `Developed a tailored <strong>Content Management System (CMS) for MPL's website</strong>, enabling seamless content and image updates across various pages in real-time.`,
      ],
    },
    {
      organization: "Premus Solution Hub",
      title: `System Administrator`,
      date: "2009-07-15 - 2013-05-30",
      details: [
        `Contributed to the development of a <strong>collaborative online
        blueprint editor</strong> by translating the design mockups into reusable UI components
        with industry-standard UX patterns using <strong>Angular</strong> with <strong>SCSS</strong>,
        <strong>NgRx</strong> and <strong>Angular-Material</strong> and adding actions to those by
        creating services to integrate backend REST-APIs.`,
        `Resolved UI/UX issues by refactoring React components and re-structuring CSS/SCSS of an internal project with the codebase of ReactJS-Redux.`,
      ],
    },
  ],
  projects: [
    {
      title: "Restaurant Review",
      duration: "Jun - Nov 2010",
      link: "https://github.com/imvpn22/restaurant-review-pwa",
      desc: `A web app to list, view and add reviews of restaurants.
      The app includes filtering based on location, cuisine, and rating.
      This project was a part of Udacity's <strong>Mobile Web Specialist</strong> nano degree program.
      Developed using <strong>HTML5</strong>, <strong>CSS3</strong> and <strong>JavaScript</strong>
      with Progressive Web-Application standards including full-responsiveness,
      offline support, and improved accessibility.`,
    },
    {
      title: "Kastle ULS",
      duration: "Jun - Aug 2017",
      link: "https://github.com/imvpn22/whiteboard",
      desc: `A simple <strong>web-app for collaborative brainstorming sessions</strong>.
      The app includes a real-time messaging and sketching platform for collaboration with Peers.
      It also has features to create groups(teams) and add/remove members.
      Developed using <strong>Node.js-Express</strong> with server-side-templating (EJS),
      <strong>CSS</strong>, <strong>JavaScript</strong> and <strong>Socket.io</strong>.`,
    },
  ],
  education: [
    {
      alma: "University of New Brunswickr",
      duration: "2021 - 2024",
      std: "B.Computer Science",
      score: "71.00%",
    },
    {
      alma: "University of Ghana",
      duration: "2003 - 2007",
      std: "BA, Economics and Mathematics",
      score: "89.80%",
    },
  ],
  certifications: [
    {
      desc: `<strong>Mobile Web Specialist Nanodegree</strong> by <strong>Udacity</strong>.
      (<a target='_blank' rel='noreferrer' href='https://confirm.udacity.com/RLMHXAWZ'>https://goo.gl/RGRzVn</a>)`,
      date: "May - Nov 2018",
    },
    {
      desc: `<strong>Introduction to Modern Application Development</strong>, a MOOC by <em> NPTEL (IIT Madras)
      and Hasura</em>. Ranked at <strong> top 10 percentile </strong> among more than 2500 candidates.
       (<a target='_blank' rel='noreferrer' href='https://nptel.ac.in/noc/E_Certificate/linkedin/noc17-cs06/NPTEL17CS0626270067AN.jpg'>
       https://goo.gl/X3HEdR</a>)`,
      date: "Jan - Mar 2017",
    },
  ],
  events: [],
};
