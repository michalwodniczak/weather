import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Wrapper, Form, Input, Button } from "./styled";
import { setSearchFailure, setSearchSuccess, setStatus, setInputValue } from "./searchSlice";
import { getSearch } from "../getSearch";

export const Search = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const initialQuery = searchParams.get("query") || "";
    const [inputValue, setLocalInputValue] = useState(initialQuery);


    useEffect(() => {
        if (initialQuery) {
            dispatch(setInputValue(initialQuery));
        }
    }, [dispatch, initialQuery]);

    const onChangeInput = ({ target }) => {
        const inputQuery = target.value.trim() !== "" ? target.value : undefined;
        if (/^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ\s]*$/.test(inputQuery))
            setLocalInputValue(inputQuery);
    };

    const onClickSearch = async () => {
        if (!inputValue || !inputValue.trim()) {
            searchParams.delete("query");
            history.push(`${location.pathname}?${searchParams.toString()}`);
            return;
        }

        dispatch(setStatus("loading"));
        searchParams.set("query", inputValue);
        history.push(`${location.pathname}?${searchParams.toString()}`);

        try {
            const result = await getSearch(inputValue)
            dispatch(setSearchSuccess(result))
        } catch (error) {
            dispatch(setSearchFailure(error.message))
        }
        setLocalInputValue("");
    };

    return (
        <Wrapper>
            <Form onSubmit={(e) => { e.preventDefault(); onClickSearch(); }}>
                <Input
                    placeholder="Find your city"
                    onChange={onChangeInput}
                    value={inputValue || ""}
                    required
                />
                <Button onClick={onClickSearch}>Search</Button>
            </Form>
        </Wrapper>
    );
};