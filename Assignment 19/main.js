function findPrimes() {
  let startNum = parseInt(document.getElementById('startNum').value);
  let endNum = parseInt(document.getElementById('endNum').value);
  let primes = [];

  function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let j = 2; j <= Math.sqrt(num); j++) {
      if (num % j === 0) {
        return false;
      }
    }
    return true;
  }

  for (let i = startNum; i <= endNum; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  document.getElementById('primeNumbers').textContent = primes.join(', ');
}
