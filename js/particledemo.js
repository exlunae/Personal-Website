/**
 * Particleground demo
 * @author Jonathan Nicol - @mrjnicol
 */

document.addEventListener('DOMContentLoaded', function () {
  particleground(document.getElementById('particles'), {
    dotColor: 'white',
    lineColor: 'white',
    density: '9000',
    particleRadius: '1',
    lineWidth: '1',
  });
  var intro = document.getElementById('intro');
  intro.style.marginTop = - intro.offsetHeight / 2 + 'px';
}, false);
