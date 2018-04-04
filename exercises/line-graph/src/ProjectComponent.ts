export interface ProjectComponent { //All components in this project need to implement this
    render: () => void; //Function to attach html to shadowdom
    connectedCallback: () => void; //This is where render needs to run
}