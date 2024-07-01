const pattern = (n) => {
  for (let i = 0; i < n; i++) {
    let pattern = [];
    for (let j = 0; j < n; j++) {
      pattern.push('*')
    }
    console.log(pattern.join(" "))
  }
}

pattern(4)