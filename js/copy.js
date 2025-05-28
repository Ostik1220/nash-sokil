
  document.querySelectorAll('.support-svg').forEach(svg => {
    svg.addEventListener('click', function () {

      const textElement = this.closest('.support-item').querySelector('.support-text');

      const text = textElement.textContent;
      navigator.clipboard.writeText(text).then(() => {
        alert("Скопійовано: " + text);
      }).catch(err => {
        alert("Помилка копіювання: " + err);
      });
    });
  });
