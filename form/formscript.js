document.getElementById("jobForm").addEventListener("submit", function (e) 
{
    e.preventDefault();

    const form = this;
    const confirmMessage = document.getElementById("kopal");


    confirmMessage.style.display = "none";

    // REQUIRED // REQUIRED // REQUIRED // REQUIRED // REQUIRED // REQUIRED // REQUIRED

    const requiredFields = [
        "firstName",
        "lastName",
        "email",
        "phone",
        "position",
        "resume",
        "agree"
    ];

    let valid = true;

    // CHECK RERQUIRED // CHECK RERQUIRED // CHECK RERQUIRED // CHECK RERQUIRED // CHECK RERQUIRED

    requiredFields.forEach(id => 
        {
        const element = document.getElementById(id);

        // CHECKBOX VALIDATION
        
        if (element.type === "checkbox") 
            {
            if (!element.checked) 
                {
                valid = false;
            }
        } else {
            if (!element.value.trim()) 
                {
                valid = false;
            }
        }
    });

    if (!valid) 
        {
        alert("Please fill in all required fields.");
        return;
    }

    // CHECK RERQUIRED // CHECK RERQUIRED // CHECK RERQUIRED // CHECK RERQUIRED // CHECK RERQUIRED




    // FILE VALIDATIONS // FILE VALIDATIONS // FILE VALIDATIONS // FILE VALIDATIONS // FILE VALIDATIONS

    const fileInput = document.getElementById("resume");
    const file = fileInput.files[0];

    if (!file) 
        {
        alert("Please upload your CV/Resume.");
        return;
    }

    const allowedTypes = [
        "application/pdf",
        "application/msword",
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
    ];

    if (!allowedTypes.includes(file.type)) 
        {
        alert("Invalid file type. Upload PDF, DOC, or DOCX only.");
        return;
    }

    // FILE VALIDATIONS // FILE VALIDATIONS // FILE VALIDATIONS // FILE VALIDATIONS // FILE VALIDATIONS




    // DISPLAY CONFIRM // DISPLAY CONFIRM // DISPLAY CONFIRM // DISPLAY CONFIRM // DISPLAY CONFIRM

    confirmMessage.textContent = "Your application has been submitted successfully!";
    confirmMessage.style.display = "block";

    // DISPLAY CONFIRM // DISPLAY CONFIRM // DISPLAY CONFIRM // DISPLAY CONFIRM // DISPLAY CONFIRM
    



    // RESET // RESET  // RESET  // RESET  // RESET  // RESET  // RESET  // RESET  // RESET

    form.reset();
});
