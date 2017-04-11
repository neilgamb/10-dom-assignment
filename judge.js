
let people = [
    { name: 'John', pic: "https://randomuser.me/api/portraits/men/18.jpg" },
    { name: 'bill', pic: "https://randomuser.me/api/portraits/men/90.jpg" },
    { name: 'jack', pic: "https://randomuser.me/api/portraits/men/22.jpg" },
    { name: 'danny', pic: "https://randomuser.me/api/portraits/men/25.jpg" },
    { name: 'bob', pic: "https://randomuser.me/api/portraits/men/42.jpg" },
    { name: 'frank', pic: "https://randomuser.me/api/portraits/men/58.jpg" },
    { name: 'dave', pic: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: 'ron', pic: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'matt', pic: "https://randomuser.me/api/portraits/men/0.jpg" },
    { name: 'nate', pic: "https://randomuser.me/api/portraits/men/26.jpg" },
    { name: 'jill', pic: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'jane', pic: "https://randomuser.me/api/portraits/women/72.jpg" },
    { name: 'jessica', pic: "https://randomuser.me/api/portraits/women/92.jpg" },
    { name: 'melissa', pic: "https://randomuser.me/api/portraits/women/82.jpg" },
    { name: 'maggie', pic: "https://randomuser.me/api/portraits/women/38.jpg" },
    { name: 'beth', pic: "https://randomuser.me/api/portraits/women/84.jpg" },
    { name: 'lizzy', pic: "https://randomuser.me/api/portraits/women/85.jpg" },
    { name: 'nancy', pic: "https://randomuser.me/api/portraits/women/40.jpg" },
    { name: 'amy', pic: "https://randomuser.me/api/portraits/women/52.jpg" },
    { name: 'kate', pic: "https://randomuser.me/api/portraits/women/9.jpg" },
]

function init() {
            let i = 0;


    function next() {

        let parent = document.querySelector('main ul');

        let el = document.createElement('li');
        el.classList.add(people[i].name.toLowerCase());

        let id = document.createElement('p');
        id.textContent = people[i].name;

        let pic = document.createElement("IMG");
        pic.src = people[i].pic;
        pic.height = 250;

        let btnLike = document.createElement('button');
        btnLike.textContent = 'Like';

        let btnNope = document.createElement('button');
        btnNope.textContent = 'Nope';

        el.appendChild(id);
        el.appendChild(pic);
        el.appendChild(btnLike);
        el.appendChild(btnNope);

        parent.appendChild(el);

        btnLike.addEventListener('click', function () {
            console.log("You liked " + people[i].name);
            i++;
            next();
        })

        btnNope.addEventListener('click', function () {
            console.log("You noped " + people[i].name);
            i++;
            next();

        })

    }

    next();

}




window.addEventListener('load', init);

