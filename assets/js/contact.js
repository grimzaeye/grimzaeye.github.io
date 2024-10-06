// EmailJS 초기화
(function() {
  emailjs.init("YOUR_USER_ID"); // EmailJS에서 제공하는 user ID
})();

// 이메일 형식 확인 함수
function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // 이메일 형식 검사 정규 표현식
  return re.test(String(email).toLowerCase());
}

// 이름에 특수 문자가 있는지 확인하는 함수
function validateName(name) {
  const re = /^[a-zA-Z\s]+$/; // 특수문자 없는 문자와 공백만 허용
  return re.test(String(name));
}

// 폼 전송 이벤트 처리
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // 기본 폼 제출 방지

  // 폼 데이터 가져오기
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // 입력 데이터 검증
  if (!validateName(name)) {
      alert("Please enter a valid name (letters and spaces only).");
      return; // 유효하지 않으면 전송 중단
  }

  if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return; // 유효하지 않으면 전송 중단
  }

  if (message.trim() === "") {
      alert("Please enter your message.");
      return; // 메시지가 비어 있을 경우 전송 중단
  }

  // EmailJS를 통해 이메일 전송
  emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this, 'YOUR_USER_ID')
      .then((result) => {
          console.log('Message sent successfully:', result.text);
          alert('Your message has been sent successfully!');
      }, (error) => {
          console.error('Error sending message:', error.text);
          alert('There was an error sending your message. Please try again.');
      });
});
