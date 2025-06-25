const jobs = [
  { title: "Frontend Developer", location: "Remote", type: "Full-Time" },
  { title: "Backend Developer", location: "New York", type: "Full-Time" },
  { title: "UI/UX Designer", location: "San Francisco", type: "Part-Time" },
  { title: "Data Scientist Intern", location: "Bangalore", type: "Internship" },
  { title: "Product Manager", location: "Remote", type: "Full-Time" }
];

const jobsContainer = document.getElementById("jobsContainer");

function displayJobs(jobList) {
  jobsContainer.innerHTML = "";
  if (jobList.length === 0) {
    jobsContainer.innerHTML = "<p>No jobs found.</p>";
    return;
  }
  jobList.forEach(job => {
    const jobCard = document.createElement("div");
    jobCard.classList.add("job-card");
    jobCard.innerHTML = `
      <h3 class="job-title">${job.title}</h3>
      <p class="job-meta">${job.location} | ${job.type}</p>
      <button onclick="applyJob('${job.title}')">Apply</button>
    `;
    jobsContainer.appendChild(jobCard);
  });
}

function filterJobs() {
  const search = document.getElementById("searchInput").value.toLowerCase();
  const location = document.getElementById("locationFilter").value;
  const type = document.getElementById("typeFilter").value;

  const filtered = jobs.filter(job => {
    return (
      job.title.toLowerCase().includes(search) &&
      (location === "" || job.location === location) &&
      (type === "" || job.type === type)
    );
  });

  displayJobs(filtered);
}

function applyJob(title) {
  alert(`You have applied for the ${title} position.`);
}

// Initial display
displayJobs(jobs);

// Live search as you type
document.getElementById("searchInput").addEventListener("input", filterJobs);
