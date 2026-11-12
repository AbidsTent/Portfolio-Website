export default function ProjectStatus({ status }) {
  return status ? <span className="project-status">{status}</span> : null;
}
