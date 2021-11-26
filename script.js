Vue.createApp({
    data: () => ({
        card_num: "",
        color: "#eff5f8",
        user_name: "",


    }),
    methods: {
        allowed_nums(e) {
            let char = String.fromCharCode(e.keyCode);
            if (/^[0-9]+$/.test(char)) return true;
            else e.preventDefault();
        },
        allowed_сhar(e) {
            let char = String.fromCharCode(e.keyCode);
            if (/^[A-Za-z]+$/.test(char) || /^[ ]+$/.test(char)) return true;
            else e.preventDefault();
        },
    },
    computed: {
        card_distributor: function() {
            let card = this.card_num[0];
            if (card == "2") {
                return "img/systems/mir.png";
            } else if (card == "3") {
                return "img/systems/american-exp.png";
            } else if (card == "4") {
                return "img/systems/visa.png";
            } else if (card == "5") {
                return "img/systems/mastercard.png";
            } else if (card == "6") {
                return "img/systems/maestro.png";
            }
            return "img/systems/mir.png";
        },
        card_bank: function() {
            let card = this.card_num.slice(0, 6);
            if (card.match(/^(521178|548673|548601|415428|676371|477964|479004)$/)) {
                this.color = "#f01212";
                console.log(this.color);
                return "img/banks/alpha.png";
            } else if (card.match(/^(427229|527883|447520)$/)) {
                this.color = "#002475";
                console.log(this.color);
                return "img/banks/vtb.png";
            } else if (card.match(/^(548999|526483)$/)) {
                this.color = "#0a2063";
                console.log(this.color);
                return "img/banks/gazprombank.png";
            } else if (card.match(/^(533736|540616)$/)) {
                this.color = "#FF0006";
                console.log(this.color);
                return "img/banks/mts-bank.png";
            } else if (card.match(/^(434146|405870|544573|532301)$/)) {
                this.color = "#00b5e4";
                console.log(this.color);
                return "img/banks/otkrytie.png";
            } else if (card.match(/^(440503|554761)$/)) {
                this.color = "#631d20";
                console.log(this.color);
                return "img/banks/rosbank.png";
            } else if (card.match(/^(513691|510047)$/)) {
                this.color = "#77592d";
                console.log(this.color);
                return "img/banks/russian_standart.png";
            } else if (card.match(/^(462730|462729)$/)) {
                this.color = "#e5e60d";
                console.log(this.color);
                return "img/banks/raiffaizen.png";
            } else if (card.match(/^(427683|427901|427644|427601|427901|427631|427638|546938)$/)) {
                this.color = "#38ab35";
                console.log(this.color);
                return "img/banks/sberbank.png";
            } else if (card.match(/^(521324|437773)$/)) {
                this.color = "#ffdf00";
                console.log(this.color);
                return "img/banks/tinkoff.png";
            }
            return "img/banks/alpha.png";
        },
        num_input_checker: function() {
            const arr = [];
            for (let i = 15, j = 0; i > 0, j < 16; --i, ++j) {
                arr[j] = parseInt(this.card_num[i]);

            }
            for (let i = 0; i < 16; ++i) {
                if (i % 2 == 0) {
                    if (arr[i] * 2 > 9) {
                        arr[i] = ((arr[i] * 2) % 10) + Math.floor((arr[i] * 2) / 10);
                    } else {
                        arr[i] = arr[i] * 2;
                    }
                }
            }
            console.log(arr.reduce((a, b) => a + b, 0));
            if (this.card_num.length == 16 && arr.reduce((a, b) => a + b, 0) % 10 == 0) {
                return true;
            } else {
                return false;
            }
        },
        name_status_checker: function() {
            if (this.user_name.split(" ").length - 1 == 1 && this.user_name[this.user_name.length - 1] != " ") {
                return true;
            } else {
                return false;
            }
        },
    }
}).mount('#app');