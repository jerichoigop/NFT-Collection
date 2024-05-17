let NFT_collection = [];

function mintNFT(name, nft_id, nft_date, nft_price) {
    const nft = {
        "name": name,
        "nft_id": nft_id,
        "nft_date": nft_date,
        "nft_price": nft_price
    };
    NFT_collection.push(nft);
    console.log("Minted: " + name);
}

function listNFTs() {
    for (let i = 0; i < NFT_collection.length; i++) {
        console.log("---------------------");
        console.log("ID: " + (i + 1));
        console.log("NAME: " + NFT_collection[i].name);
        console.log("NFT ID.: " + NFT_collection[i].nft_id);
        console.log("DATE: " + NFT_collection[i].nft_date);
        console.log("PRICE: " + NFT_collection[i].nft_price);
    }
}

function getTotalSupply() {
    console.log(NFT_collection.length);
}

mintNFT("Jacob", "4938482", "01/24/2017", "3,000");
mintNFT("Nikka", "3928293", "07/12/2022", "7,000");
mintNFT("Jazel", "4245422", "05/23/2007", "10,000");

listNFTs();
getTotalSupply();