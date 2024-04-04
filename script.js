//get the data that we want to show
let users = [
    {
        profilePic: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1649864733863-5fc26dd2ec7d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        pendingMessage: 4 , 
        location : "Delhi , India" ,
        name: "Harshita" ,
        age: 23, 
        interests: [{
            icon : `<i class="ri-music-2-fill"></i>`,
            interest : "Music"
        } , {
            icon : `<i class="ri-quill-pen-line"></i>`,
            interest : "Writing"
        }],
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae asperiores earum numquam porro dolores deleniti?",
        isFriend:null

    },

    {
        profilePic: "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        pendingMessage: 3 , 
        location : "Bhopal , India" ,
        name: "Shivangi" ,
        age: 20, 
        interests: [{
            icon : `<i class="ri-music-2-fill"></i>`,
            interest : "Music"
        } , {
            icon : `<i class="ri-quill-pen-line"></i>`,
            interest : "Writing"
        }],
        
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae asperiores earum numquam porro dolores deleniti?",
        isFriend:null

    },

    {
        profilePic: "https://plus.unsplash.com/premium_photo-1668896123844-65224cf19b74?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1598897516650-e4dc73d8e417?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        pendingMessage: 14 , 
        location : "Banglore , India" ,
        name: "Nishi" ,
        age: 21, 
        interests: [{
            icon : `<i class="ri-music-2-fill"></i>`,
            interest : "Music"
        } , {
            icon : `<i class="ri-quill-pen-line"></i>`,
            interest : "Writing"
        }],
        
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae asperiores earum numquam porro dolores deleniti?",
        isFriend:null

    },

    {
        profilePic: "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        displayPic: "https://images.unsplash.com/photo-1571513722275-4b41940f54b8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", 
        pendingMessage: 9 , 
        location : "Mumbai , India" ,
        name: "Avinya" ,
        age: 19, 
        interests: [{
            icon : `<i class="ri-music-2-fill"></i>`,
            interest : "Music"
        } , {
            icon : `<i class="ri-quill-pen-line"></i>`,
            interest : "Writing"
        }],
        
        bio: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae asperiores earum numquam porro dolores deleniti?",
        isFriend:null

    }
]

let curr = 0;
let isAnimating = false;

function setData(index){
    select(".prflimg img").src = users[index].profilePic;
        select(".badge h5").textContent = users[index].pendingMessage;
        select(".location h3").textContent = users[index].location;
        select(".name h1:nth-child(1)" ).textContent = users[index].name;
        select(".name h1:nth-child(2)" ).textContent = users[index].age;

        let clutter = "";
        users[index].interests.forEach(function(interest){
            clutter += `<div class="tag flex items-center bg-white/30 px-3 py-1 rounded-full gap-3 ">
            ${interest.icon};
            <h3 class = "text-sm tracking-tight">${interest.interest}</h3>
        </div>`
        })

        select(".tags").innerHTML = clutter;
        select(".bio p").textContent = users[index].bio;

}

function select(elem){
        return document.querySelector(elem);
}
(function setInitial(){
        select(".maincard img").src = users[curr].displayPic;
        select(".incomingcard img").src = users[curr+1]?.displayPic;
        
        setData(curr);
        
        curr=2;

})();

function imageChange(){
    if(!isAnimating){
        isAnimating = true;

        let tl = gsap.timeline({
            onComplete: function(){
                
                isAnimating = false;

                let main = select(".maincard");
                let incoming = select(".incomingcard");
    
                incoming.classList.remove("z-[2]");
                incoming.classList.add("z-[3]");
                incoming.classList.remove("incomingcard");
    
                main.classList.remove("z-[3]");
                main.classList.add("z-[2]");
                gsap.set(main,{
                    scale: 1,
                    opacity: 1
                })
    
                if(curr === users.length) curr = 0;
                select(".maincard img").src = users[curr].displayPic;
                
                curr++;
                
                main.classList.remove("maincard");
                incoming.classList.add("maincard");
                main.classList.add("incomingcard");
    
            }
        });
        tl.to(".maincard",{
            scale : 1.1,
            opacity :0,
            ease: Circ,
            duration : .9
        },"a")
    
        .from(".incomingcard",{
            scale : .9,
            opacity : 0,
            ease: Circ,
            duration: 1.1
        },"a")
    
    }
    
};

    let deny = select(".deny");
    let accept = select(".accept");

    deny.addEventListener("click", function(){
        imageChange();
        setData(curr-1);
        gsap.from(".details .element", {
            y: "100%",
            opacity: 0,
            duration: 1.4,
            stagger: 0.1,
            ease: Power4.easeInOut,
        
        })
        
    });

    accept.addEventListener("click", function(){
        imageChange();
        setData(curr-1);
        gsap.from(".details .element", {
            y: "100%",
            opacity: 0,
            duration: 1.4,
            stagger: 0.1,
            ease: Power4.easeInOut,
        
        })
        
    });

(function containerCreator(){
    document.querySelectorAll(".element").
    forEach(function(element){
       let div =  document.createElement("div");
       div.classList.add(`${element.classList[1]}container`,'overflow-hidden');
        console.log(div);
        div.appendChild(element);
        select(".details").appendChild(div);

    })
})();

