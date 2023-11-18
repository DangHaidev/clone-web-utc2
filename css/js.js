var slideIndex = 0;
  showSlides();

  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}
    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 2000); // Thời gian chuyển đổi tự động: 2 giây
  }

  // chờ khi trag được tải hết
  document.addEventListener("DOMContentLoaded", function() {
    var scrollTopBtn = document.getElementById("scrollTopBtn");
  
    window.addEventListener("scroll", function() {
      // Hiển thị hoặc ẩn nút cuộn lên dựa trên vị trí cuộn (20px )
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopBtn.style.display = "block";
      } else {
        scrollTopBtn.style.display = "none";
      }
    });
    // hoạt động sẽ xảy ra
    scrollTopBtn.addEventListener("click", function() {
      // cuộn mượt với smooth
      window.scrollTo({
        top: 0, // vị trí sẽ tới
        behavior: "smooth"
      });
    });
  });


  function CheckThongTin(){
    var email = document.getElementById("email").value;
    var testEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var noidung = document.getElementById("noidung").value;
    var fullname = document.getElementById("fullname").value;
    var nameRegex = /^[a-zA-Z]+ [a-zA-Z]+$/; // biểu thức chính quy
      if(email == "" || testEmail.test(email) == false){
        alert("Định dạng email sai");
      }
      else if(noidung == ""){
      alert("Nội dung không được để trống!!");
      } 
      else if (fullname == "" || nameRegex.test(fullname) == false){
        alert("Họ và tên không hợp lệ");
      }
  else{
    alert("Cảm ơn bạn đã đăng ký, thông tin sớm sẽ được gửi tới bạn!");
  }
}


// var intop = document.getElementsByClassName("after-nav");
//  window.addEventListener("scroll", function(){
//     intop.style.display = s
//  })