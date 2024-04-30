// Fetch data from the API
fetch('https://derek-web-service.onrender.com/')
    .then(response => response.json())
    .then(data => {
        // Display personal information
        document.getElementById('personal-info').innerHTML = `
            <h2>Personal Information</h2>
            <p>Name: ${data.Personal_Information[0].Name}</p>
            <p>Birthdate: ${data.Personal_Information[0].Birthdate}</p>
            <p>Gender: ${data.Personal_Information[0].Gender}</p>
            <p>Contact No: ${data.Personal_Information[0].Contact_No}</p>
            <p>Address: ${data.Personal_Information[0].Address}</p>
        `;

        // Display about me section
        document.getElementById('about-me').innerHTML = `
            <h2>About Me</h2>
            <p>${data.About_Me[0].Description}</p>
        `;

        // Display skills
        document.getElementById('skills').innerHTML = `
            <h2>Skills</h2>
            <ul>
                ${data.Skills.map(skill => `<li>${skill.Name}</li>`).join('')}
            </ul>
        `;

        // Display education
        document.getElementById('education').innerHTML = `
            <h2>Education</h2>
            <ul>
                ${data.Education.map(edu => `<li>${edu.Institution}, ${edu.Description}</li>`).join('')}
            </ul>
        `;

        // Display work experience
        document.getElementById('work-experience').innerHTML = `
            <h2>Work Experience</h2>
            <ul>
                ${data.Work_Experience.map(exp => `
                    <li>
                        <p>Company: ${exp.Company}</p>
                        <p>Job Title: ${exp.Job_Title}</p>
                        <p>Start Date: ${exp.Start_Date}</p>
                        <p>End Date: ${exp.End_Date}</p>
                        <p>Description: ${exp.Description}</p>
                    </li>
                `).join('')}
            </ul>
        `;

        // Display personal references
        document.getElementById('personal-references').innerHTML = `
            <h2>Personal References</h2>
            <ul>
                ${data.Personal_References.map(ref => `
                    <li>
                        <p>Name: ${ref.Name}</p>
                        <p>Contact No: ${ref.Contact_No}</p>
                        <p>Relationship: ${ref.Relationship}</p>
                    </li>
                `).join('')}
            </ul>
        `;
    })
    .catch(error => console.error('Error fetching data:', error));
