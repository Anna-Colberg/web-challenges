import styled from "styled-components";
/* import useSWR from "swr"; */
import StyledButton from "@/components/Button";

export default function ProductForm({onSubmit, defaultValues = { name:"", description: "", price: 0, currency: "EUR" }}) {



  /* const { mutate } = useSWR("/api/products");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate();
    event.target.reset();
  } */

  return (
    <StyledForm onSubmit={onSubmit}>
      <StyledHeading>Add a new Fish</StyledHeading>
      <StyledLabel htmlFor="name">
        Name:
        <input type="text" defaultValue={defaultValues.name} id="name" name="name" />
      </StyledLabel>
      <StyledLabel htmlFor="description">
        Description:
        <input type="text" defaultValue={defaultValues.description} id="description" name="description" />
      </StyledLabel>
      <StyledLabel htmlFor="price">
        Price:
        <input type="number" defaultValue={defaultValues.price} id="price" name="price" min="0" />
      </StyledLabel>
      <StyledLabel htmlFor="currency">
        Currency:
        <select id="currency" defaultValue={defaultValues.currency} name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </StyledLabel>
      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;

export const StyledLabel = styled.label`
  display: flex;
  justify-content: space-between;
  gap: 5px;
`;
