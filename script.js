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
            <p>Languages: ${data.Skills[0].Languages.join(', ')}</p>
        `;

        // Display education
        document.getElementById('education').innerHTML = `
            <h2>Education</h2>
            ${data.Education.map(edu => `
                <p>${edu.Institution}, ${edu.Description}</p>
            `).join('')}
        `;

        // Display work experience
        document.getElementById('work-experience').innerHTML = `
            <h2>Work Experience</h2>
            <p>Company: ${data.Work_Experience[0].Company}</p>
            <p>Job Title: ${data.Work_Experience[0].Job_Title}</p>
            <p>Start Date: ${data.Work_Experience[0].Start_Date}</p>
            <p>End Date: ${data.Work_Experience[0].End_Date}</p>
        `;

        // Display personal references
        document.getElementById('personal-references').innerHTML = `
            <h2>Personal References</h2>
            <p>Name: ${data.Personal_References[0].Name}</p>
            <p>Contact No: ${data.Personal_References[0].Contact_No}</p>
            <p>Relationship: ${data.Personal_References[0].Relationship}</p>
        `;
    })
    .catch(error => console.error('Error fetching data:', error));
