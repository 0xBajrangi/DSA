const pattern = (n) => {
  for (let i = 0; i < n; i++) {
    const pattern = [];
    for (let j = 0; j <= i; j++) {
      pattern.push("*")
    }
    console.log(pattern.join(" "))
  }
}

pattern(5)