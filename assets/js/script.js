let chat = document.querySelector(".customer");
chat.addEventListener("click", function(){
    const message = `Hallo Agung Saya Mau Tanya Kamu Nih...`
    const whatsapp = `https://wa.me/628112551922?text=${message}`
    open(whatsapp, "_blank")
});

let modal_button = document.querySelector("#modal-btn");
modal_button.addEventListener("click", function(e){
    e.preventDefault();
    let modal_id = e.target.getAttribute("for");

    let target = document.querySelector(`#${modal_id}`);

    target.classList.add("tampilkan")

    document.querySelector("body").classList.add("modal-active");
});

let close_modal = document.querySelector(".modal-close-btn");
close_modal.addEventListener("click", function(a){
    let tujuan = document.querySelector("#modal");
    tujuan.classList.remove("tampilkan");

    document.querySelector("body").classList.remove("modal-active");
});

let pesan = document.querySelector(".message");
pesan.addEventListener("click", function(){
    alert("Pesan Kamu terkirim, Thankyou.");
});