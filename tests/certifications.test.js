import assert from 'node:assert/strict';
import { test } from 'node:test';
import { certifications } from '../src/content/certifications.js';
import { skillGroups, skillQualifications } from '../src/content/skills.js';

// Expected details from the owner's supplied completion certificates.
const expected = [
  {
    title: 'Data Engineering with dbt',
    completedAt: '2026-11-17',
    skills: ['Data Engineering', 'Data Build Tool (dbt)'],
    credentialUrl: 'https://www.linkedin.com/learning/certificates/81caf578728cf549bf38349393d7c47961fefc9bdb13887b88edc14e8cc5e30a',
  },
  {
    title: 'Azure Data Factory Administration Essential Training: Manage, Secure, and Monitor Environments',
    completedAt: '2026-11-18',
    skills: ['Cloud Administration', 'Azure Data Factory', 'Data Management'],
    credentialUrl: 'https://www.linkedin.com/learning/certificates/d0c4038f62756cc6b2f0a30d490e3bedb2f4e6367117449af98a577dea035b4f',
  },
  {
    title: 'PySpark Essential Training: Introduction to Building Data Pipelines',
    completedAt: '2026-11-18',
    skills: ['PySpark', 'Data Engineering'],
    credentialUrl: 'https://www.linkedin.com/learning/certificates/8a8d5e7f6d5962d9ceaf5aa92c26e0cfc19a3826c6b11685d590d530c7217065',
  },
  {
    title: 'Learning Microsoft Fabric',
    completedAt: '2026-11-18',
    skills: ['Microsoft Fabric', 'Big Data Analytics', 'Data Analytics'],
    credentialUrl: 'https://www.linkedin.com/learning/certificates/4e98528b26d064e92032d0db2f302a51ea3923f9d8052cd45fcc45c143ed9876',
  },
  {
    title: 'Learning Data Governance',
    completedAt: '2026-11-19',
    skills: ['Data Governance'],
    credentialUrl: 'https://www.linkedin.com/learning/certificates/e9ef65216e31a69bfb369a0d2f55c3aede0e553caec545c35a88e91a4cf41b66',
  },
  {
    title: 'GitHub Actions for CI/CD: Build, Test, and Deploy',
    completedAt: '2026-11-18',
    skills: ['GitHub', 'Continuous Integration and Continuous Delivery (CI/CD)'],
    credentialUrl: 'https://www.linkedin.com/learning/certificates/f019c4381aaf63e092f8182a15899d0fcdb26b9095dd4e35dd7a2d0709c20f56',
  },
];

test('the six completion certificates have unique IDs and retain their priority order', () => {
  assert.equal(certifications.length, 6);
  assert.equal(new Set(certifications.map(course => course.id)).size, 6);
  assert.ok(certifications.every(course => typeof course.id === 'string' && course.id.length > 0));
  assert.deepEqual(certifications.map(course => course.title), expected.map(course => course.title));
});

for (const course of expected) {
  test(`preserves the supplied course details: ${course.title}`, () => {
    const actual = certifications.find(record => record.title === course.title);
    assert.ok(actual);
    assert.equal(actual.issuer, 'LinkedIn Learning');
    assert.equal(actual.completedAt, course.completedAt);
    assert.equal(new Date(actual.completedAt).toISOString().slice(0, 10), actual.completedAt);
    assert.deepEqual(actual.skills, course.skills);
    assert.equal(actual.credentialUrl, course.credentialUrl);
    const url = new URL(actual.credentialUrl);
    assert.equal(url.protocol, 'https:');
    assert.equal(url.hostname, 'www.linkedin.com');
    assert.match(url.pathname, /^\/learning\/certificates\/[a-f0-9]{64}$/);
  });
}

test('the six skill categories preserve the toolkit without duplicate entries', () => {
  assert.deepEqual(skillGroups, [
    { name: 'Languages', skills: ['SQL', 'Python', 'JavaScript'] },
    { name: 'Databases', skills: ['SQL Server', 'PostgreSQL', 'MongoDB'] },
    { name: 'Business Intelligence', skills: ['Power BI', 'DAX', 'Excel'] },
    { name: 'Data Engineering', skills: ['ETL/ELT', 'Data Warehousing', 'Dimensional Modeling', 'PySpark', 'Spark SQL'] },
    { name: 'Cloud & Analytics Tools', skills: ['Databricks', 'dbt', 'Azure Data Factory', 'Microsoft Fabric'] },
    { name: 'Development & CI/CD', skills: ['Git', 'GitHub', 'React', 'Node.js', 'GitHub Actions'] },
  ]);
  const skills = skillGroups.flatMap(group => group.skills).map(skill => skill.toLowerCase());
  assert.equal(new Set(skills).size, skills.length);
});

test('coursework and foundations stay qualified within the single skills grid', () => {
  assert.deepEqual(skillQualifications, {
    PostgreSQL: 'Foundations',
    'ETL/ELT': 'ELT foundations',
    'Spark SQL': 'Foundations',
    dbt: 'Coursework',
    'Azure Data Factory': 'Coursework',
    'Microsoft Fabric': 'Coursework',
  });
  const skills = skillGroups.flatMap(group => group.skills);
  assert.ok(Object.keys(skillQualifications).every(skill => skills.includes(skill)));
  const governance = certifications.find(course => course.title === 'Learning Data Governance');
  assert.deepEqual(governance.skills, ['Data Governance']);
});
