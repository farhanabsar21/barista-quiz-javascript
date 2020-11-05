const correctAnswer = ["B", "B", "B", "A", "A", "A", "A", "B", "A", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");

form.addEventListener("submit", e =>{
    //the default behaviour of submit prevented 
    e.preventDefault();

    // answer option for user
    let score = 0;
    const userAnswer = [form.q1.value, form.q2.value, form.q3.value, form.q4.value, form.q5.value, form.q6.value, form.q7.value, form.q8.value, form.q9.value, form.q10.value];
    
    //check answers
    userAnswer.forEach((answer,index) =>{
        if(answer === correctAnswer[index]){
            score += 10;
        }
    });

    // show the result in page
    scrollTo(0,0); // scroll to the x,y here x=0 y=0 means its going to the top
    
    result.classList.remove("d-none");

    //scroll animation
    let output = 0;
    const timer = setInterval(()=>{
        result.querySelector("span").textContent = `${output}%`;
        if(output === score){
            clearInterval(timer);
        }else{
            output++;
        }
    }, 10);
});

// window object (works as global so actually i dont have to write (window.something)

