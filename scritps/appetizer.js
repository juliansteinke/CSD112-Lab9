const Appetizers = () => {
const appetizerContent = document.createElement('div');
  appetizerContent.setAttribute('class', 'container');

  const appetizerHeader = document.createElement('h1');
  appetizerHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
  appetizerHeader.innerHTML = 'APPETIZERS';

  const appetizerList = document.createElement('ul');
  appetizerList.setAttribute('class', 'appetizerList');

  const appetizerItems = () => {
    const list = document.createElement('li');
    list.setAttribute('class', 'nav-item list-unstyled mx-2');
    list.setAttribute('id', 'appList')
    list.setAttribute('style', 'display: flex; flex-direction: row;')
    list.setAttri

    const app1 = document.createElement('h1');
    app1.setAttribute('id', 'app1');
    app1.setAttribute('class', 'text-center');
    app1.innerHTML = 'MOZZARELLA STICKS';
    list.appendChild(app1);
    const appParagraph1 = document.createElement('p');
    appParagraph1.setAttribute('class', 'my-3 pb-3');
    appParagraph1.innerHTML = 'We use only the freshest frozen mozzarella sticks, fried with care, sourced farm-to-table from your local Food Basics.';
    list.appendChild(appParagraph1);

    const app2 = document.createElement('h1');
    app2.setAttribute('id', 'app2');
    app2.setAttribute('class', 'text-center');
    app2.innerHTML = 'CRAB DUNKERS';
    list.appendChild(app2);
    const appParagraph2 = document.createElement('p');
    appParagraph2.setAttribute('class', 'my-3 pb-3');
    appParagraph2.innerHTML = 'A platter of deep-fried crab chunks and spinach, served with bacon ranch.';
    list.appendChild(appParagraph2);

    const app3 = document.createElement('h1');
    app3.setAttribute('id', 'app3');
    app3.setAttribute('class', 'text-center');
    app3.innerHTML = 'CHEESY GARLIC BREAD';
    list.appendChild(app3);
    const appParagraph3 = document.createElement('p');
    appParagraph3.setAttribute('class', 'my-3 pb-3');
    appParagraph3.innerHTML = 'A classic appetizer for the whole family! Served pipin\' hot!';
    list.appendChild(appParagraph3);

    return list;
  };

  appetizerContent.appendChild(appetizerHeader);
  appetizerContent.appendChild(appetizerItems());

  return appetizerContent;
};

export default Appetizers;