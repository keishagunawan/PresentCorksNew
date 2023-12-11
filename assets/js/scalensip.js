/* SCALE N SIP BANNER & INTERACTIVE */

const banner = document.querySelector('.scaleNsip-banner');
const bannerimage = banner.querySelector('.bannerimage');
const bannerVideo = banner.querySelector('.bannervideo');

banner.addEventListener('mouseover', () => {
    bannerimage.style.opacity = '0'; // Hide the image
    bannerVideo.play(); // Start playing the video
});

banner.addEventListener('mouseout', () => {
    bannerimage.style.opacity = '1'; // Show the image on mouseout
    bannerVideo.pause(); // Pause the video
    bannerVideo.currentTime = 0; // Reset video to the beginning
});

// JavaScript function to update subcategory dropdown based on the selected category
function updateSubcategories(setNumber) {
    var categoryDropdown = document.getElementById("categoryDropdown" + setNumber);
    var subcategoryDropdown = document.getElementById("subcategoryDropdown" + setNumber);

    // Get the selected category and subcategory
    var selectedCategory = categoryDropdown.options[categoryDropdown.selectedIndex].value;

    // Clear existing options in subcategory dropdown
    subcategoryDropdown.innerHTML = '';

    // Populate subcategory dropdown based on the selected category
    switch (selectedCategory) {
        case "category1":
            addOption(subcategoryDropdown, "subcat1-1", "16 oz");

            break;
        case "category2":
            addOption(subcategoryDropdown, "subcat2-1", "16 oz");
            addOption(subcategoryDropdown, "subcat2-2", "20 oz");
            addOption(subcategoryDropdown, "subcat2-3", "40 oz");
            break;
        case "category3":
            addOption(subcategoryDropdown, "subcat3-1", "16 oz");
            addOption(subcategoryDropdown, "subcat3-2", "20 oz");
            break;
        case "category4":
            addOption(subcategoryDropdown, "subcat4-1", "16 oz");
            break;
        case "category5":
            addOption(subcategoryDropdown, "subcat5-1", "20 oz");
            break;
        case "category6":
            addOption(subcategoryDropdown, "subcat6-1", "16 oz");
            addOption(subcategoryDropdown, "subcat6-2", "20 oz");
            addOption(subcategoryDropdown, "subcat6-3", "25 oz");
            break;
        case "category7":
            addOption(subcategoryDropdown, "subcat7-1", "20 oz");
            break;
        case "category8":
            addOption(subcategoryDropdown, "subcat8-1", "20 oz");
            addOption(subcategoryDropdown, "subcat8-2", "32 oz");
            break;
        case "category9":
            addOption(subcategoryDropdown, "subcat9-1", "16 oz");
            addOption(subcategoryDropdown, "subcat9-2", "20 oz");
            addOption(subcategoryDropdown, "subcat9-3", "24 oz");
            addOption(subcategoryDropdown, "subcat9-4", "25 oz");
            break;
        case "category10":
            addOption(subcategoryDropdown, "subcat10-1", "16 oz");
            addOption(subcategoryDropdown, "subcat10-2", "20 oz");
            break;

        // Add cases for other categories and their respective subcategories
    }
    updateResultImage(setNumber);
}

// Helper function to add options to a dropdown
function addOption(dropdown, value, text) {
    var option = document.createElement("option");
    option.value = value;
    option.text = text;
    dropdown.add(option);
}

// Additional functions for updating the result image
function getImagePath(subcategory) {

    // Customize this function based on your image naming convention and folder structure
    return "PresentCorks/assets/image/" + subcategory + ".png";
}

function updateResultImage(setNumber) {
    var subcategoryDropdown = document.getElementById("subcategoryDropdown" + setNumber);
    var resultImage = document.getElementById("resultImage" + setNumber);

    var selectedSubcategory = subcategoryDropdown.options[subcategoryDropdown.selectedIndex].value;

    var imagePath = 'assets/image/subcat1-1.png';


    if (selectedSubcategory === "subcat1-1") {
        imagePath = 'assets/image/subcat1-1.png';
    }
    else if (selectedSubcategory === "subcat2-1") {
        imagePath = 'assets/image/subcat2-1.png';
    }
    else if (selectedSubcategory === "subcat2-2") {
        imagePath = 'assets/image/subcat2-2.png';
    }
    else if (selectedSubcategory === "subcat2-3") {
        imagePath = 'assets/image/subcat2-3.png';
    }
    else if (selectedSubcategory === "subcat3-1") {
        imagePath = 'assets/image/subcat3-1.png';
    }
    else if (selectedSubcategory === "subcat3-2") {
        imagePath = 'assets/image/subcat3-2.png';
    }
    else if (selectedSubcategory === "subcat4-1") {
        imagePath = 'assets/image/subcat4-1.png';
    }
    else if (selectedSubcategory === "subcat5-1") {
        imagePath = 'assets/image/subcat5-1.png';
    }
    else if (selectedSubcategory === "subcat6-1") {
        imagePath = 'assets/image/subcat6-1.png';
    }
    else if (selectedSubcategory === "subcat6-2") {
        imagePath = 'assets/image/subcat6-2.png';
    }
    else if (selectedSubcategory === "subcat6-3") {
        imagePath = 'assets/image/subcat6-3.png';
    }
    else if (selectedSubcategory === "subcat7-1") {
        imagePath = 'assets/image/subcat7-1.png';
    }
    else if (selectedSubcategory === "subcat8-1") {
        imagePath = 'assets/image/subcat8-1.png';
    }
    else if (selectedSubcategory === "subcat8-2") {
        imagePath = 'assets/image/subcat8-2.png';
    }
    else if (selectedSubcategory === "subcat9-1") {
        imagePath = 'assets/image/subcat9-1.png';
    }
    else if (selectedSubcategory === "subcat9-2") {
        imagePath = 'assets/image/subcat9-2.png';
    }
    else if (selectedSubcategory === "subcat9-3") {
        imagePath = 'assets/image/subcat9-3.png';
    }
    else if (selectedSubcategory === "subcat9-4") {
        imagePath = 'assets/image/subcat9-4.png';
    }
    else if (selectedSubcategory === "subcat10-1") {
        imagePath = 'assets/image/subcat10-1.png';
    }
    else if (selectedSubcategory === "subcat10-2") {
        imagePath = 'assets/image/subcat10-2.png';
    }

    resultImage.innerHTML = '<img src="' + imagePath + '" alt= "Selected Image" style="max-width: 100%; height: auto;">';

}
