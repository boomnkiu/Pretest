import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private http: HttpClient,
  ) { }

  title = 'angular-Pretest';

  ngOnInit() {
    this.Question1()
  }

  //Question1
  thisIsSyncFunction() {
    return fetch('https://codequiz.azurewebsites.net/data').then(res => res.json()).then((response) => {
      return response.data;
    });
  }
  //Question1
  async Question1() {
    const number1 = await this.thisIsSyncFunction()
    const calculation = number1 * 10;
    console.log(calculation);
  }

}

//Question3
/*
* Do not modify this class.
* Custom Dialog Element.

class MyDlg extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    const div = document.createElement('div');
    div.id = "container";
    div.style.position = "relative";
    div.style.width = div.style.height = "100px";
    div.style.border = "1px solid black";
    const closeBtn = document.createElement('button');
    closeBtn.textContent = "X";
    closeBtn.style.position = "absolute";
    closeBtn.style.right = "0";
    closeBtn.addEventListener('click', () => {
      if (this.dispatchEvent(new CustomEvent('close-dlg', { cancelable: true }))) {
        div.style.display = "none";
      }
    })
    div.appendChild(closeBtn);
    this.appendChild(div);
  }
}
// Define the new element
customElements.define('my-dlg', MyDlg);

Quiz: Write code to prevent dialog to close when click close button 

const dlg = document.getElementById('dlg');
const div = document.getElementById('container');
dlg.addEventListener("click", function (e) {
  dlg.style.display = "block";
  div.style.display = "block";
}, false);
/****/


//Question4
/*
const getRandomRGB = () => {
  const r = Math.floor(Math.random() * Math.floor(255));
  const g = Math.floor(Math.random() * Math.floor(255));
  const b = Math.floor(Math.random() * Math.floor(255));
  return `rgb(${r},${g},${b})`;
};

const colorPicker = document.getElementById('colorPicker');

for (let i=0; i<10000; ++i) {
  const btn = document.createElement('button');
  const rgb = getRandomRGB();
  btn.id = rgb;
  btn.textContent = rgb;
  btn.style.backgroundColor = rgb;
  colorPicker.appendChild(btn);
  btn.addEventListener("click", function(e) {
  setAnswerBoxText(rgb)
}, false); 
}

 function setAnswerBoxText(rgb){
   const answerBox = document.getElementById('answerBox');
   answerBox.innerHTML = rgb;
}
/****/

