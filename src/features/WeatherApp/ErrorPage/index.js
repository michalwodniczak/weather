import { useSelector } from "react-redux";
import { Wrapper, ErrorText, Query } from "./styled";
import { selectInputValue} from "../../../Search/searchSlice";

export const ErrorPage = () => {
    const query = useSelector(selectInputValue);

    return (
        <Wrapper>
            <ErrorText>Sorry <Query>{query}</Query> is not a City, Please correct this name of City and try again</ErrorText>
        </Wrapper>
    );
};