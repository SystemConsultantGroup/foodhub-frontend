import RadioInputItem from "components/inputs/RadioInput/items/RadioInputItem";

function Radio() {
  return (
    <div>
      <RadioInputItem value="Option 1"></RadioInputItem>
      <RadioInputItem disabled={true} value="Option 2"></RadioInputItem>
      <RadioInputItem checked={true} value="Option3"></RadioInputItem>
    </div>
  )
}

export default Radio;