function addRecommendation(){
    var recommendationText = document.getElementById("recommendation_input");
    if (recommendationText.trim() !== ""){
        // var listItem = document.createElement("li");
        // listItem.textContent = recommendationText;
        var recommendationsList = document.getElementById("recommendations_list");
        recommendationsList.appendChild(listItem);
        document.getElementById("recommendation_input").value = "";
        // showPopup();
    }
}

function submitRecommendation(){
    var name = document.getElementById("nameInput").value;
    var recommendation = document.getElementById("recommendation_input").value;
    var newCard = document.getElementById("msg");
    newCard.className = "card";
    newCard.msg.display = "block";
    var recommendationContainer = document.getElementById("recommendationContainer");
    recommendationContainer.appendChild(newCard);
    document.getElementById("nameInput").value = "";
    document.getElementById("recommendation_input").value = "";
    // openPopup();
    addRecommendation()
}

function openPopup(){
    var popup = document.getElementById("popup");
    popup.style.display = "block";
}
function closePopup(){
    var popup = document.getElementById("popup");
    popup.style.display = "none";
}

function showPopup(){
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}
function closePopup(){
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', function(){
    showPopup()
});
var okButton = document.getElementById("okButton");
okButton.addEventListener("click", function (){
closePopup()
});