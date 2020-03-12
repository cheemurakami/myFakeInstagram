   
let postsArray = [
    {
      imgUrl: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/87387900_200798944475354_3854568312053172106_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=2l5OqJSyFoUAX94umfi&oh=f001ad1a1b421c212b598c35316f9672&oe=5E90E241",
      caption: "From @rina_takei: 'Say cheese 📸'",
      tags: ["twitterweek", "catsofinstagram"],
      likes: 120137,
      accountName: "cats_of_instagram",
      postedAt: 1583903365292,
      comments: [
        {
          accountName: "amer_neko",
          text: "how cute!"
        },
        {
          accountName: "gaybee_the_baby",
          text: "awww"
        }
      ]
    },
    {
      imgUrl: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/89267930_796070044231373_8731896008847441907_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=105&_nc_ohc=OJJOONVw7kkAX_M3Z7q&oh=10ebe9f59c7c4fd854a88f22975877da&oe=5E9261B3",
      caption: "From @felicefelines: The best way to spend rainy days😽🌧",
      tags: ["twitterweek", "catsofinstagram"],
      likes: 10447,
      accountName: "cats_of_instagram",
      postedAt: 1583111113292,
      comments: [
        {
          accountName: "kitty_bangu_bangu",
          text: "🍆"
        },
        {
          accountName: "karma",
          text: "gachi"
        }
      ]
    },
    {
      imgUrl: "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/88981641_525735151411149_3221124151664799207_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=109&_nc_ohc=ntmTTKCXrzMAX8lS0KG&oh=2fe4453824abacb25aeb49417b06b4ec&oe=5E96EF98",
      caption: "From @ikura_0711: 'Cuteness overload❣️'",
      tags: ["twitterweek", "catsofinstagram"],
      likes: 19990,
      accountName: "cats_of_instagram",
      postedAt: 1583411113292,
      comments: [
        {
          accountName: "hab",
          text: "4head"
        },
        {
          accountName: "healing",
          text: "可愛い"
        }
      ]
    }
  ];

  const divParent = document.getElementById('main-container');
  
  
  // let imgElement = document.createElement('img'); まずimg element作る
  // imgElement.src = "https://scontent-sea1-1.cdninstagram.com/v/t51.2885-15/e35/s1080x1080/87387900_200798944475354_3854568312053172106_n.jpg?_nc_ht=scontent-sea1-1.cdninstagram.com&_nc_cat=102&_nc_ohc=2l5OqJSyFoUAX94umfi&oh=f001ad1a1b421c212b598c35316f9672&oe=5E90E241",
  // divParent.appendChild(imgElement);
  
  
  for (i=0; i<postsArray.length; i++){
    const post = postsArray[i];
    const postDiv = document.createElement('div');
    postDiv.classList.add('post-div');
    divParent.appendChild(postDiv);  

    let accNameElement = document.createElement('div');
    accNameElement.textContent = post.accountName;
    postDiv.appendChild(accNameElement);
      
    let imgElement = document.createElement('img');
    imgElement.classList.add('img');
    imgElement.src = post.imgUrl;
    postDiv.appendChild(imgElement);

    let iconElement = document.createElement('i');
    iconElement.classList.add('far','fa-hand-spock','like-icon');
    postDiv.appendChild(iconElement);

    let likesCount = document.createElement('span');
    likesCount.textContent = `${post.likes}likes`;
    postDiv.appendChild(likesCount);

    let captionElement = document.createElement('div');
    captionElement.textContent = post.caption;
    postDiv.appendChild(captionElement);

    let tagElement = document.createElement('div');
    // tagElement.textContent = post.tags; これだと#なしで出るからそれの付け方↓mapを使う
    const tagsWithSymbolArray = post.tags.map(x => '#' + x); // 新しく作った配列で最初x=current valueでなんでも入る
    tagElement.textContent = tagsWithSymbolArray; 
    postDiv.appendChild(tagElement);

    let postedAtDate = document.createElement('div');
    postedAtDate.classList.add('posted-at-date');
    let ddmmyyyy =  new Date(post.postedAt);
    const month = String(ddmmyyyy.getMonth()+1);
    const day = String(ddmmyyyy.getDate());
    const year = String(ddmmyyyy.getFullYear());

    postedAtDate.textContent = `Posted at : ${month}/${day}/${year}`;
    // postedAtDate.textContent =new Date(post.postedAt);
    postDiv.appendChild(postedAtDate);




    for(j=0; j<post.comments.length; j++){
        let commentsElement = document.createElement('div');
        commentsElement.textContent = `${post.comments[j].accountName}: ${post.comments[j].text}`;
        postDiv.appendChild(commentsElement);
    };

  };