const salaryData = [
    { jobTitle: 'Software Engineer', company: 'TSC', salary: 90000 },
    { jobTitle: 'Data Analyst', company: 'Unicode', salary: 75000 },
    { jobTitle: 'Product Manager', company: 'Amazon', salary: 110000 },
    // Add more salary data as needed
  ];
  
  // Function to display salary data in the table
  function displaySalaryData() {
    const salaryTable = document.getElementById('salary-table');
    const salaryDataBody = document.getElementById('salary-data');
  
    salaryData.forEach(salary => {
      const row = document.createElement('tr');
      const jobTitleCell = document.createElement('td');
      const companyCell = document.createElement('td');
      const salaryCell = document.createElement('td');
  
      jobTitleCell.textContent = salary.jobTitle;
      companyCell.textContent = salary.company;
      salaryCell.textContent = `${salary.salary}`;
  
      row.appendChild(jobTitleCell);
      row.appendChild(companyCell);
      row.appendChild(salaryCell);
      salaryDataBody.appendChild(row);
    });
  
    salaryTable.appendChild(salaryDataBody);
  }
  
  // Call the function to display salary data when the page loads
  window.addEventListener('load', displaySalaryData);