import Home from './home.js';
import Menu from './menu.js';
import Navbar from './navbar.js';
import Contact from './contact.js';
import Appetizers from './appetizer.js';
import Order from './order.js';

const Index = () => {
  function italicsBody() {
    document.body.style.fontFamily = "Cambria, Cochin, Georgia, Times, 'Times New Roman', serif";
  }
  italicsBody();
  
  const content = document.getElementById('content');
  const navbar = Navbar();
  content.appendChild(navbar);
  const home = Home();
  content.appendChild(home);
  
  // NAVBAR CLICKING
  
  const menu = Menu();
  const contact = Contact();
  const appetizer = Appetizers();
  const order = Order();
  
  const link1 = document.getElementById('home');
  link1.addEventListener('click', () => {
    content.replaceChild(home, content.childNodes[1]);
  });
  
  const link2 = document.getElementById('menu');
  link2.addEventListener('click', () => {
    content.replaceChild(menu, content.childNodes[1]);
  });
  
  const link3 = document.getElementById('contact');
  link3.addEventListener('click', () => {
    content.replaceChild(contact, content.childNodes[1]);
  });  

const link4 = document.getElementById('appetizers');
  link4.addEventListener('click', () => {
    content.replaceChild(appetizer, content.childNodes[1]);
  });

  const link5 = document.getElementById('order');
  link5.addEventListener('click', () => {
    content.replaceChild(order, content.childNodes[1]);
  });  
};
export default Index;
