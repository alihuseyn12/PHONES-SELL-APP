let productMenger = {
    _itmsPerpage: 6,
    _products: null,
    load: function (products) {
        this._products = products;
    },
    getPaginatabelProduct: function (page) {

        let from = (page - 1) * this._itmsPerpage;
        let to = from + this._itmsPerpage;
        return this._products.slice(from, to);

    }
}


function BasketProduct(id, name, prices, counter) {
    this.id = id;
    this.name = name;
    this.prices = prices;
    this.counter = counter;

}
let renderOnPage = {

    render: function (obj, addDom) {
        let _createDom = document.getElementById(addDom);
        let basketId = "basket_id";

        for (let f of obj) {
            let dv = document.createElement("div");
            dv.className = "col-md-4";

            let img = document.createElement("img");
            img.src = "img/" + f.photo;


            let p = document.createElement("p");
            p.innerHTML = `${f.name} ${f.prices} ${f.currency}`;

            let p2 = document.createElement("p");
            p2.innerHTML = f.description;

            let btn = document.createElement("button");
            btn.innerHTML = "Add to Basket";
            btn.className = "btn btn-success";

            btn.addEventListener("click", function () {
                let counter = parseInt(document.getElementById(basketId).innerHTML);
                let bascetproduct = new BasketProduct(f.id, f.name, f.prices, counter);
                // console.log(bascetproduct);
                counter++;
                let bascetDs = JSON.stringify(bascetproduct);
                localStorage.setItem("basket", bascetDs);
                console.log(bascetDs)
                document.getElementById(basketId).innerHTML = counter;
            })


            dv.appendChild(img);
            dv.appendChild(p);
            dv.appendChild(p2);
            dv.appendChild(btn);
            _createDom.appendChild(dv);
        }

    }
}