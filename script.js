document.addEventListener("DOMContentLoaded", function() {
    const questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", () => {
            // Primero, cerramos todas las respuestas abiertas
            questions.forEach(q => {
                const answer = q.nextElementSibling;
                if (answer.style.display === "block") {
                    answer.style.display = "none";
                }
            });

            // Luego, abrimos la respuesta de la pregunta seleccionada
            const answer = question.nextElementSibling;
            answer.style.display = "block";
        });
    });

    const radioButtons = document.querySelectorAll(".faq-answer input[type='radio']");
    radioButtons.forEach(radio => {
        radio.addEventListener("change", function() {
            const answer = this.closest(".faq-answer");
            const question = answer.previousElementSibling;
            question.classList.add("selected");
        });
    });
});

// **Script to show bubble with bible verse.**

document.addEventListener("DOMContentLoaded", function() {
    const bibleVerse = document.getElementById("bibleVerse");
    const verseBubble = document.getElementById("verseBubble");

    bibleVerse.addEventListener("click", function() {
        if (verseBubble.style.display === "block") {
            verseBubble.style.display = "none";
        } else {
            const rect = bibleVerse.getBoundingClientRect();
            verseBubble.style.top = `${rect.bottom + window.scrollY + 10}px`; // Add 10px for some space below the text
            verseBubble.style.display = "block";
        }
    });

    document.addEventListener("click", function(event) {
        if (!bibleVerse.contains(event.target) && !verseBubble.contains(event.target)) {
            verseBubble.style.display = "none";
        }
    });
});