import 'normalize.css';
import './style.scss';


document.querySelector('#app').innerHTML = `
  <div>
    Hello JS!
  </div>
`;

setupCounter(document.querySelector('#counter'));
