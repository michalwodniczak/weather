import { useSelector } from "react-redux";
import { Wrapper, ErrorText, Query } from "./styled";
import { selectInputValue, selectData, selectStatus } from "../../../Search/searchSlice";

export const ErrorPage = () => {
    const query = useSelector(selectInputValue);
    const data = useSelector(selectData);
    const status = useSelector(selectStatus);

    if (data === null && status === "error") {
        return (
            <Wrapper>
                <ErrorText>Sorry we dont have data now</ErrorText>
            </Wrapper>
        )
    };

    if (query && status === "error") {
        return (
            <Wrapper>
                <ErrorText>Sorry <Query>{query}</Query> is not a City, Please correct this name of City and try again</ErrorText>
            </Wrapper>
        );
    };
};