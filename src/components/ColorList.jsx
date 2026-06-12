export default function ColorList({array}) {
  return(
    <ul>
      {array.map((color, index) => (<li key={index}>{color}</li>))}
    </ul>
  )
}