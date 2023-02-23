import uuid from "react-uuid"

const getRandomName = () => {
    return "user-" + Math.floor(Math.random() * 100)
}

const getRandomId = () => {
    return "123" + Math.floor(Math.random() * 100)
}

const getRandomImage = () => {
    return `https://picsum.photos/${Math.floor(Math.random() * 100)}/${Math.floor(Math.random() * 100)}`
}

const getRandomUniqueId = () => {
    return uuid()
}


// commet looks on nested form
const commentMockData = [
    {
        userProfile: "https://picsum.photos/100/100",
        userName: "user-1",
        userId: "",
        comment: "mt test commet",
        commentId: "0001",
        replyId: "",
        timeStamp: Date.now() - 30000,
        reply: [
            {
                userProfile: "https://picsum.photos/100/100",
                userName: "user-2",
                userId: "",
                comment: "At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies. At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.",
                commentId: "1",
                replyId: "",
                timeStamp: Date.now() - 30000,
                reply: [
                    {
                        userProfile: "https://picsum.photos/100/100",
                        userName: "user-1",
                        userId: "",
                        comment: "At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies. At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.",
                        commentId: "2",
                        replyId: "",
                        timeStamp: Date.now() - 30000,
                        reply: [

                        ]
                    }
                ]
            },
            {
                userProfile: "https://picsum.photos/100/100",
                userName: "user-1",
                userId: "",
                comment: "At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies. At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.",
                commentId: "3",
                replyId: "",
                timeStamp: Date.now() - 30000,
                reply: [

                ]
            }
        ]
    },
    {
        userProfile: "https://picsum.photos/100/101",
        userName: "user-2",
        userId: "4",
        comment: "At w3schools.com you will learn how to make a website. They offer free tutorials in all web development technologies.",
        commentId: "4",
        replayId: "",
        timeStamp: Date.now() - 30000000,
    }
]


export {
    getRandomName,
    getRandomId,
    getRandomImage,
    getRandomUniqueId,
    commentMockData,
}