function quize() {
    
   
   document.getElementById("startSection").style.display = "none";

  let q1 = document.getElementById("Start");
  q1.innerHTML = `
    <div class="formate">
      <div class="q1">
        <p class="p">How many hours in a day?</p>
        <form>
          <input type="radio" name="q1">24hours <br>
          <input type="radio" name="q1">12hours <br>
          <input type="radio" name="q1">4hours <br>
          <input type="radio" name="q1">13hours <br>
          <button class="button" onclick="q2()">Next</button>
        </form>
      </div>
    </div>
  `;

  

}

function q2() {
  let q1 = document.getElementById("Start");
  q1.innerHTML = `
    <div class="formate">
      <div class="q2">
        <p class="p">What is the capital of India?</p>
        <form>
          <input type="radio" name="q2">Mumbai <br>
          <input type="radio" name="q2">Delhi <br>
          <input type="radio" name="q2">Ahmedabad <br>
          <input type="radio" name="q2">Surat <br>
          <button class="pre" onclick="quize()">Previous</button>
          <button class="button" onclick="q3()">Next</button>
        </form>
      </div>
    </div>
  `;
}

function q3() {
  let q1 = document.getElementById("Start");
  q1.innerHTML = `
    <div class="formate">
      <div class="q3">
        <p class="p">Which planet is known as the Red Planet?</p>
        <form>
          <input type="radio" name="q3">Earth <br>
          <input type="radio" name="q3">Mars <br>
          <input type="radio" name="q3">Jupiter <br>
          <input type="radio" name="q3">Venus <br>
          <button class="pre" onclick="q2()">Previous</button>
          <button class="button" onclick="finish()">Finish</button>
        </form>
      </div>
    </div>
  `;
}

function finish() {
  let q1 = document.getElementById("Start");
  q1.innerHTML = `<h3>Thank you for completing the quiz!</h3>`;
}