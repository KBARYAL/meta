
const nftCollection = [];
function mintNFT(name, description, owner, value) {
    const nft = { name, description, owner, value };
    nftCollection.push(nft);
}

function listNFTs() {
    nftCollection.forEach(nft => {
        console.log("Name: " + nft.name);
        console.log("Description: " + nft.description);
        console.log("Owner: " + nft.owner);
        console.log("Value: " + nft.value);
        console.log("---------------");
    });
}

function getTotalSupply() {
    console.log("Total NFTs: " + nftCollection.length);
}

mintNFT("CryptoPunk", "A unique digital punk", "Alice", 100);
mintNFT("Bored Ape", "A bored ape with a hat", "Bob", 150);
mintNFT("ArtBlock", "A generative art piece", "Charlie", 200)

listNFTs();
getTotalSupply();
