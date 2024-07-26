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
