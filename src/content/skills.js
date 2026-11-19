export const skillGroups = [
  { name: 'Languages', skills: ['SQL', 'Python', 'JavaScript'] },
  { name: 'Databases', skills: ['SQL Server', 'PostgreSQL', 'MongoDB'] },
  { name: 'Business Intelligence', skills: ['Power BI', 'DAX', 'Excel'] },
  {
    name: 'Data Engineering',
    skills: ['ETL/ELT', 'Data Warehousing', 'Dimensional Modeling', 'PySpark', 'Spark SQL'],
  },
  { name: 'Cloud & Analytics Tools', skills: ['Databricks', 'dbt', 'Azure Data Factory', 'Microsoft Fabric'] },
  { name: 'Development & CI/CD', skills: ['Git', 'GitHub', 'React', 'Node.js', 'GitHub Actions'] },
];

// Qualifications follow docs/CONTENT_VERIFICATION.md and the completed courses.
// GitHub Actions also has implementation evidence in this site's deployment workflow.
export const skillQualifications = {
  PostgreSQL: 'Foundations',
  'ETL/ELT': 'ELT foundations',
  'Spark SQL': 'Foundations',
  dbt: 'Coursework',
  'Azure Data Factory': 'Coursework',
  'Microsoft Fabric': 'Coursework',
};
