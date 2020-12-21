
const cardListDetails = [
    {
        title: "Google",
        imageUrl:
            "https://pngimg.com/uploads/google/google_PNG19638.png",
        description:
            "Lorem ipsum dolor sit amet, at solum copiosae maiestatis eos, in nominavi philosophia his, an saepe admodum pri.",
        details: [
            "Lorem ipsum dolor sit amet",
            "at solum copiosae maiestatis eos",
        ],
    },
    {
        title: "Ibm",
        imageUrl:
            "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        description:
            "Lorem ipsum dolor sit amet, at solum copiosae maiestatis eos, in nominavi philosophia his, an saepe admodum pri.",
        details: [
            "Lorem ipsum dolor sit amet",
            "at solum copiosae maiestatis eos",
        ],
    },
    {
        title: "Facebook",
        imageUrl:
            "https://logodownload.org/wp-content/uploads/2014/09/facebook-logo-1.png",
        description:
            "Lorem ipsum dolor sit amet, at solum copiosae maiestatis eos, in nominavi philosophia his, an saepe admodum pri.",
        details: [
            "Lorem ipsum dolor sit amet",
            "at solum copiosae maiestatis eos",
        ],
    },
    {
        title: "Twitter",
        imageUrl:
            "https://www.pikpng.com/pngl/m/17-170048_download-red-logo-png-twitter-logo-red-png.png",
        description:
            "Lorem ipsum dolor sit amet, at solum copiosae maiestatis eos, in nominavi philosophia his, an saepe admodum pri.",
        details: [
            "Lorem ipsum dolor sit amet",
            "at solum copiosae maiestatis eos",
        ],
    }
]

export const getFilterdCardData = (appliedFilters: string[]) => {
    if (appliedFilters.length) {
        const filteredList = [];
        appliedFilters.forEach(name => {
            const item = cardListDetails.find(item => item.title.toLowerCase() === name.toLowerCase());
            if (item)
                filteredList.push(item)
        });
        return filteredList;
    } else return cardListDetails
}