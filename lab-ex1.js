let contacts = [{
    name: "Maxwell Wright",
    phone: "(0191) 719 6495",
    email: "Curabitur.egestas.nunc@nonummyac.co.uk"
    }, {
    name: "Raja Villarreal",
    phone: "0866 398 2895",
    email: "posuere.vulputate@sed.com"
    }, {
    name: "Helen Richards",
    phone: "0800 1111",
    email: "libero@convallis.edu"
    }];
    
    // write your code here
    let newName = prompt("Name of new contact, enter the name ", "Rahsi");
    let newPhone = prompt("Phone number, enter the number", "07450394");
    let newEmail = prompt("Email , enter email", "ghjkd@me.fi");
    let newContact={name:newName, phone:newPhone, email:newEmail}
    contacts.push(newContact)
    
    let last = contacts.length - 1;
    
    console.log(`${contacts[0].name} / ${contacts[0].phone} / ${contacts[0].email}`);
    console.log(`${contacts[last].name} / ${contacts[last].phone} / ${contacts[last].email}`);