// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!

function Africa() {
  const popAfrica = "1.2 billion";
  const message = "My population size is ";
  console.log(`I am Africa. ${message} ${popAfrica} people!`);
  //debugger;
  
  function Nigeria() {
    const popNigeria = "190.9 million";
    const statesNigeria = 36;
    console.log(`I am Nigeria. ${message} ${popNigeria} people!`);
    //debugger;

      function Lagos() {
        const popLagos = "17.5 million";
        console.log(`I am Lagos. ${message} ${popLagos} people! I am among the ${statesNigeria} states in Nigeria.`)
        //debugger;
      }

      Lagos();
  }

  Nigeria();
}

Africa();


/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====
const counter = () => {
  // Return a function that when invoked increments and returns a counter variable.
};
// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
