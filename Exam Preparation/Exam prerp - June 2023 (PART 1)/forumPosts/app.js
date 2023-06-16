window.addEventListener("load", solve);

function solve() {
  let publishButton = document.getElementById("publish-btn");
  let reviewList = document.getElementById("review-list");
  let clearBtn = document.getElementById('clear-btn')
  publishButton.addEventListener("click", () => {
    let title = document.getElementById("post-title");
    let category = document.getElementById("post-category");
    let content = document.getElementById("post-content");
    if (title.value === "" || category.value === "" || content.value === "") {
      return;
    }
    let liElement = document.createElement("li");
    liElement.classList.add("rpost");
    let article = document.createElement("article");
    let h4 = document.createElement("h4");
    h4.textContent = title.value;
    let p1 = document.createElement("p");
    p1.textContent = `Category: ${category.value}`;
    let p2 = document.createElement("p");
    p2.textContent = `Content: ${content.value}`;
    article.appendChild(h4);
    article.appendChild(p1);
    article.appendChild(p2);
    let editBtn = document.createElement("button");
    let approveBtn = document.createElement("button");
    editBtn.classList.add("action-btn", "edit");
    editBtn.textContent = "Edit";
    approveBtn.classList.add("action-btn", "approve");
    approveBtn.textContent = "Approve";
    liElement.appendChild(article);
    liElement.appendChild(approveBtn);
    liElement.appendChild(editBtn);
    reviewList.appendChild(liElement);
    title.value = "";
    category.value = "";
    content.value = "";

    editBtn.addEventListener("click", () => {
      title.value = h4.textContent;
      category.value = p1.textContent.split(": ")[1];
      content.value = p2.textContent.split(": ")[1];
      reviewList.removeChild(liElement);
    });

    approveBtn.addEventListener("click", () => {
      let publishedList = document.getElementById("published-list");
      let title = reviewList.querySelector(".rpost > article > h4");
      let category = reviewList.querySelectorAll(".rpost > article > p")[0];
      let content = reviewList.querySelectorAll(".rpost > article > p")[1];
      let li = document.createElement('li');
      li.classList.add('rpost');
      let article = document.createElement('article');
      let h4 = document.createElement('h4');
      let p1 = document.createElement('p');
      let p2 = document.createElement('p');
      h4.textContent = title.textContent;
      p1.textContent = category.textContent;
      p2.textContent = content.textContent;
      article.appendChild(h4);
      article.appendChild(p1);
      article.appendChild(p2);
      li.appendChild(article);
      publishedList.appendChild(li);
      let elementToBeRemoved = reviewList.querySelector('.rpost')
      reviewList.removeChild(elementToBeRemoved);
  });
  clearBtn.addEventListener('click', () => {
    let publishedList = document.querySelector('#published-list');
    let elementToRemove = document.querySelector('#published-list > .rpost');
    publishedList.removeChild(elementToRemove)
  })
});
}
