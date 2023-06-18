class productsPage {

    get addBackpack() {
        return $("#add-to-cart-sauce-labs-backpack");
    }

    get addBikelight() {
        return $("#add-to-cart-sauce-labs-bike-light");
    }

    get addBoltTshirt() {
        return $("#add-to-cart-sauce-labs-bolt-t-shirt");
    }

    get addJacket() {
        return $("#add-to-cart-sauce-labs-fleece-jacket");
    }

    get addOnesie() {
        return $("#add-to-cart-sauce-labs-onesie");
    }

    get addRedTshirt() {
        return $("#add-to-cart-test.allthethings()-t-shirt-(red)");
    }

    get removeBackpack() {
        return $("#remove-sauce-labs-backpack");
    }

    get removeBikelight() {
        return $("#remove-sauce-labs-bike-light");
    }

    get removeBoltTshirt() {
        return $("#remove-sauce-labs-bolt-t-shirt");
    }

    get removeJacket() {
        return $("#remove-sauce-labs-fleece-jacket");
    }

    get removeOnesie() {
        return $("#remove-sauce-labs-onesie");
    }

    get removeRedTshirt() {
        return $("#remove-test.allthethings()-t-shirt-(red)");
    }

    get bpackDescrBtn() {
        return $("#cart_contents_container > div > div.cart_list > div.cart_item > div.cart_item_label > div.inventory_item_desc");
    }

    get backlightDescrBtn() {
        return $("#cart_contents_container > div > div.cart_list > div:nth-child(4) > div.cart_item_label > div.inventory_item_desc");
    }

    get boltTshirtDescrBtn() {
        return $("#inventory_container > div > div:nth-child(3) > div.inventory_item_description > div.inventory_item_label > div");
    }

    get jacketDescrBtn() {
        return $("#inventory_container > div > div:nth-child(4) > div.inventory_item_description > div.inventory_item_label > div");
    }

    get onesieDescrBtn() {
        return $("#inventory_container > div > div:nth-child(5) > div.inventory_item_description > div.inventory_item_label > div");
    }

    get redTshirtDescrBtn() {
        return $("#inventory_container > div > div:nth-child(6) > div.inventory_item_description > div.inventory_item_label > div");
    }

    get backToProductsBtn() {
        return $("#back-to-products");
    }

    get contShoppBtn() {
        return $("#continue-shopping");
    }

    get sortMenu() {
        return $("#header_container > div.header_secondary_container > div > span");
    }

    get sortByNameAZ() {
        return $("#header_container > div.header_secondary_container > div > span > select > option:nth-child(1)");
    }

    get sortByNameZA() {
        return $("#header_container > div.header_secondary_container > div > span > select > option:nth-child(2)");
    }

    get sortByLowToHigh() {
        return $("#header_container > div.header_secondary_container > div > span > select > option:nth-child(3)");
    }

    get sortByHighToLow() {
        return $("#header_container > div.header_secondary_container > div > span > select > option:nth-child(4)");
    }

    get firstItem() {
        return $("#inventory_container > div > div:nth-child(1)");
    }

    get secondItem() {
        return $("#inventory_container > div > div:nth-child(2)");
    }

    get thirdItem() {
        return $("#inventory_container > div > div:nth-child(3)");
    }

    get fourthItem() {
        return $("#inventory_container > div > div:nth-child(4)");
    }

    get fifthItem() {
        return $("#inventory_container > div > div:nth-child(5)");
    }

    get sixthItem() {
        return $("#inventory_container > div > div:nth-child(6)");
    }

    get cartBtn() {
        return $("#shopping_cart_container > a");
    }

    async backToProducts() {
        await this.backToProductsBtn.click();
    }

    async redirect() {
        await this.redirectLink.click();
    }
}

export default new productsPage();