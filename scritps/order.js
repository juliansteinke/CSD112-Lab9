const Order = () => {
    const orderContent = document.createElement('div');
    orderContent.setAttribute('class', 'container');

    const orderHeader = document.createElement('h1');
    orderHeader.setAttribute('class', 'text-center my-3 pt-5 mb-5');
    orderHeader.innerHTML = 'ORDER ONLINE';

    const orderForm = () => { 
        const form = document.createElement('form');
        form.setAttribute('action', 'https://formspree.io/f/xgejjydn');
        form.setAttribute('method', 'POST');
        form.setAttribute('class', 'orderForm')

        const nameLabel = document.createElement('label');
        nameLabel.setAttribute('for', 'nameField');
        nameLabel.setAttribute('id', 'nameFieldLabel');
        nameLabel.innerHTML = 'Name: ';
        const nameInput = document.createElement('input');
        nameInput.setAttribute('type', 'text');
        nameInput.setAttribute('name', 'nameField');
        nameInput.setAttribute('id', 'nameField');
        form.appendChild(nameLabel);
        form.appendChild(nameInput);
        }
    
    orderContent.appendChild(orderHeader);
    orderContent.appendChild(orderForm());
    
    return orderContent;
    }
export default Order;