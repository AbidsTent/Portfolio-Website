export default function ProjectStatus({ status }) {
  return status ? <span className="project-status" data-status={status.toLowerCase()}>{status}</span> : null;
}
