function solve(list , criteria) {
  let [key , value]=criteria.split("-")
  JSON.parse(list)
  .filter(x=> x[key]==value || key=="all")
  .forEach((x ,i)=> {
      console.log(`${i}. ${x.first_name} ${x.last_name} - ${x.email}`);
  })
}