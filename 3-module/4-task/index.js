function showSalary(users, age) {
  // let result = [];
  // users.forEach(function (item) {
  //   if (item.age <= age) {
  //     result.push(`${item.name}, ${item.balance}`);
  //   }
  // });

  // return result.join("\n");
  return users
    .filter((item) => item.age <= age)
    .map((item) => `${item.name}, ${item.balance}`)
    .join("\n");
}
