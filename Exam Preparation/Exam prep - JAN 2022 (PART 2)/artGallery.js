class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = { picture: 200, photo: 50, item: 250 };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        let isInArray = false;
        if (!this.possibleArticles[articleModel]) {
            throw Error("This article model is not included in this gallery!")
        };
        for (const el of this.listOfArticles) {
            if (el.articleName === articleName && el.articleModel === articleModel) {
                el.quantity += quantity;
                isInArray = true;
            }
        }
        if (!isInArray) {
            this.listOfArticles.push({ articleModel, articleName, quantity })
        }

        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`
    }
    inviteGuest(guestName, personality) {
        let isInvited = false;
        this.guests.forEach(el => {
            if (el.guestName === guestName) {
                isInvited = true;
                throw new Error(`${guestName} has already been invited.`)
            }
        })
        let obj = { guestName, points: 0, purchaseArticle: 0 }

        switch (personality) {
            case 'Vip':
                obj.points += 500;
                break;
            case 'Middle':
                obj.points += 250;
                break;

            default:
                obj.points += 50;
                break;
        }
        if (!isInvited) {
            this.guests.push(obj);
        }

        return `You have successfully invited ${guestName}!`
    }
    buyArticle(articleModel, articleName, guestName){
        const foundName = this.listOfArticles.find(element => element.articleName === articleName && element.articleModel === articleModel);
        if (!foundName) {
            throw new Error("This article is not found.")
        } 
            if(foundName.quantity == 0) {
                return `The ${articleName} is not available.`
            }

        const foundGuest = this.guests.find(element => element.guestName === guestName);
        if (!foundGuest) {
            return "This guest is not invited."
        } 
        if (foundGuest.points < this.possibleArticles[articleModel]){
            return "You need to more points to purchase the article."
        } else {
            foundGuest.points -= this.possibleArticles[articleModel];
            foundGuest.purchaseArticle += 1;
            foundName.quantity -= 1;
        }
        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`
    }
    showGalleryInfo(criteria){
        let arr = [];
        switch (criteria) {
            case 'article':
                arr.push(['Articles information:'])
                this.listOfArticles.forEach(el => {
                    
                    arr.push(`${el.articleModel} - ${el.articleName} - ${el.quantity}`)
                    
                })
                break;
                case 'guest':
                    arr.push('Guests information:')
                this.guests.forEach(guest => {
                    arr.push(`${guest.guestName} - ${guest.purchaseArticle}`);
                })
                break;
        }
        return arr.join('\n');
    }
}
const artGallery = new ArtGallery('Curtis Mayfield'); 
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
artGallery.buyArticle('picture', 'Mona Liza', 'John');
artGallery.buyArticle('item', 'Ancient vase', 'Peter');
console.log(artGallery.showGalleryInfo('article'));
console.log(artGallery.showGalleryInfo('guest'));






