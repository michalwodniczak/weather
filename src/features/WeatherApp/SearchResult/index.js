import { useSelector } from "react-redux";
import { selectData, selectStatus } from "../../../Search/searchSlice";
import { Wrapper } from "./styled";
import { Item } from "../../../Item";
import { Loading } from "../Loading";
import { ErrorPage } from "../ErrorPage";

export const SearchResult = () => {
  const data = useSelector(selectData);
  const status = useSelector(selectStatus);


  if (status === "loading") {
    return <Loading />
  };

  if (status === "error" || data === null) {
    return <ErrorPage />
  };

  return (
    <Wrapper>
      <Item
        key={data?.name}
        title={data?.name}
        temp={data?.main.temp}
        tempFeel={data?.main.feels_like}
        wind={data?.wind.speed}
        pressure={data?.main.pressure}
        icon={data?.weather[0]?.icon}
        description={data?.weather[0]?.description}
      />
    </Wrapper>
  );
};