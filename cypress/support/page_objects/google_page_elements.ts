export class google_page_elements{
    static search_box = "input[name='q']";
    static image_link = ":nth-child(2) > .gb_g";
    static gmail_link : string = ":nth-child(1) > .gb_g";
    static google_logo = "img[alt='Google']";
    static search_button = ".FPdoLc > center > .gNO89b";

    constructor() {
    }

    public print(){
        console.log(google_page_elements.google_logo)
        console.log(google_page_elements.search_box)
        console.log(google_page_elements.gmail_link)
    }
}
