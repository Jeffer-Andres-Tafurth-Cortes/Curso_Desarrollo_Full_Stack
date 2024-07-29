// Este es un componente llamado ' Date '
function Dates() {
  const now = new Date()
  const a = 10
  const b = 20
  console.log(now);

  return (
    <>
      <h3>Hello World, it is {now.toString()}</h3>
      <h3>
        {a} plus {b} is {a + b}
      </h3>
    </>
  )
}

export default Dates