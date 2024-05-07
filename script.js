// Fetch data from the API
fetch('https://derek-web-service.onrender.com/')
    .then(response => response.json())
    .then(data => {
        // Display personal information
        document.getElementById('personal-info').innerHTML = `
            <div class="section">
                <h2 class="text-xl font-bold mb-2">Personal Information</h2>
                <div class="avatar">
                    <img src="https://scontent.fceb6-1.fna.fbcdn.net/v/t39.30808-6/433753582_1898737753911022_8280625266758491858_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEgy0QuJPPZR2QwBgL7iJK3AN4fxbU2BYgA3h_FtTYFiJP0Rlz6xaYwz989Cf4UYQo0p07Esaq6jS04IB7Rhdu4&_nc_ohc=uw5Fm0vBMw0Q7kNvgEXesH9&_nc_zt=23&_nc_ht=scontent.fceb6-1.fna&oh=00_AfDTBFxuWX7IHBuPAGXknpO5wVHQ790rjAZejpuF1-oaLw&oe=663F7E1C" alt="Profile Picture">
                </div>
                <p><strong>Name:</strong> ${data.Personal_Information[0].Name}</p>
                <p><strong>Birthdate:</strong> ${data.Personal_Information[0].Birthdate}</p>
                <p><strong>Gender:</strong> ${data.Personal_Information[0].Gender}</p>
                <p><strong>Contact No:</strong> ${data.Personal_Information[0].Contact_No}</p>
                <p><strong>Address:</strong> ${data.Personal_Information[0].Address}</p>
            </div>
        `;

        // Display about me section
        document.getElementById('about-me').innerHTML = `
            <div class="section">
                <h2 class="text-xl font-bold mb-2">About Me</h2>
                <p>${data.About_Me[0].Description}</p>
            </div>
        `;

        // Display skills
        document.getElementById('skills').innerHTML = `
            <div class="section">
                <h2 class="text-xl font-bold mb-2">Skills</h2>
                <ul>
                    ${data.Skills.map(skill => `<li>${skill.Name}</li>`).join('')}
                </ul>
            </div>
        `;

        // Display education
        document.getElementById('education').innerHTML = `
            <div class="section">
                <h2 class="text-xl font-bold mb-2">Education</h2>
                <ul>
                    ${data.Education.map(edu => `<li>${edu.Institution}, ${edu.Description}</li>`).join('')}
                </ul>
            </div>
        `;

        // Display work experience
        document.getElementById('work-experience').innerHTML = `
            <div class="section">
                <h2 class="text-xl font-bold mb-2">Work Experience</h2>
                <ul>
                    ${data.Work_Experience.map(exp => `
                        <li>
                            <p><strong>Company:</strong> ${exp.Company}</p>
                            <p><strong>Job Title:</strong> ${exp.Job_Title}</p>
                            <p><strong>Start Date:</strong> ${exp.Start_Date}</p>
                            <p><strong>End Date:</strong> ${exp.End_Date}</p>
                            <p><strong>Description:</strong> ${exp.Description}</p>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;

        // Display personal references
        document.getElementById('personal-references').innerHTML = `
            <div class="section">
                <h2 class="text-xl font-bold mb-2">Personal References</h2>
                <ul>
                    ${data.Personal_References.map(ref => `
                        <li>
                            <p><strong>Name:</strong> ${ref.Name}</p>
                            <p><strong>Contact No:</strong> ${ref.Contact_No}</p>
                            <p><strong>Relationship:</strong> ${ref.Relationship}</p>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
    })
    .catch(error => console.error('Error fetching data:', error));
