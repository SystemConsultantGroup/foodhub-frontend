import { StyledRadioInputLabel } from "components/inputs/RadioInput/items/styles";

export interface RadioInputProps {
    disabled?: boolean;
    checked?: boolean;
    name?: string;
    value?: string;
}

function RadioInputItem({disabled, checked, name, value}: RadioInputProps) {
    return (
        <>
            <StyledRadioInputLabel disabled={disabled} checked={checked}>
                <input hidden type="radio" name={name} value={value} disabled={disabled}/>
                {value}
            </StyledRadioInputLabel>
        </>
    )
}

export default RadioInputItem;