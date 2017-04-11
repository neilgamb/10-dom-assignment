
let people = [
    { name: 'John', pic: "https://randomuser.me/api/portraits/men/18.jpg" },
    { name: 'Bill', pic: "https://randomuser.me/api/portraits/men/90.jpg" },
    { name: 'Jack', pic: "https://randomuser.me/api/portraits/men/22.jpg" },
    { name: 'Danny', pic: "https://randomuser.me/api/portraits/men/25.jpg" },
    { name: 'Bob', pic: "https://randomuser.me/api/portraits/men/42.jpg" },
    { name: 'Frank', pic: "https://randomuser.me/api/portraits/men/58.jpg" },
    { name: 'Dave', pic: "https://randomuser.me/api/portraits/men/3.jpg" },
    { name: 'Ron', pic: "https://randomuser.me/api/portraits/men/2.jpg" },
    { name: 'Matt', pic: "https://randomuser.me/api/portraits/men/0.jpg" },
    { name: 'Nate', pic: "https://randomuser.me/api/portraits/men/26.jpg" },
    { name: 'Jill', pic: "https://randomuser.me/api/portraits/women/1.jpg" },
    { name: 'Jane', pic: "https://randomuser.me/api/portraits/women/72.jpg" },
    { name: 'Jessica', pic: "https://randomuser.me/api/portraits/women/92.jpg" },
    { name: 'Melissa', pic: "https://randomuser.me/api/portraits/women/82.jpg" },
    { name: 'Maggie', pic: "https://randomuser.me/api/portraits/women/38.jpg" },
    { name: 'Beth', pic: "https://randomuser.me/api/portraits/women/84.jpg" },
    { name: 'Lizzy', pic: "https://randomuser.me/api/portraits/women/85.jpg" },
    { name: 'Nancy', pic: "https://randomuser.me/api/portraits/women/40.jpg" },
    { name: 'Amy', pic: "https://randomuser.me/api/portraits/women/52.jpg" },
    { name: 'Kate', pic: "https://randomuser.me/api/portraits/women/9.jpg" },
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
            btnLike.disabled = true;
            btnNope.disabled = true;
            pic.classList.add('fade');
            i++;
            next();
        })

        btnNope.addEventListener('click', function () {
            console.log("You noped " + people[i].name);
            btnLike.disabled = true;
            btnNope.disabled = true;
            pic.classList.add('fade');
            i++;
            next();

        })
    }

    next();

}




window.addEventListener('load', init);

