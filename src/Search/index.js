import { Wrapper, Form, Input, Button } from "./styled"

export const Search = () => {
    return (
        <Wrapper>
            <Form>
                <Input placeholder="Znajdz swoje miasto" />
                <Button>Szukaj</Button>
            </Form>
        </Wrapper>
    )
}