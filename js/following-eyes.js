

const leftEye = document.querySelector('.left-eye');
const rightEye = document.querySelector('.right-eye');
const leftEyeball = document.querySelector('.left-eye .eyeball');
const rightEyeball = document.querySelector('.right-eye .eyeball');

document.addEventListener('mousemove', (e) => {
  const eyeRect = leftEye.getBoundingClientRect();
  const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  const eyeCenterY = eyeRect.top + eyeRect.height / 2;

  const mouseX = e.clientX;
  const mouseY = e.clientY;

  const deltaXLeft = mouseX - eyeCenterX;
  const deltaYLeft = mouseY - eyeCenterY;
  const angleLeft = Math.atan2(deltaYLeft, deltaXLeft);
  
  const deltaXRight = mouseX - (eyeRect.left + rightEye.getBoundingClientRect().width / 2);
  const deltaYRight = mouseY - (eyeRect.top + rightEye.getBoundingClientRect().height / 2);
  const angleRight = Math.atan2(deltaYRight, deltaXRight);

  leftEyeball.style.transform = `translate(-50%, -50%) translate(${Math.cos(angleLeft) * 10}px, ${Math.sin(angleLeft) * 10}px)`;
  rightEyeball.style.transform = `translate(-50%, -50%) translate(${Math.cos(angleRight) * 10}px, ${Math.sin(angleRight) * 10}px)`;
});
