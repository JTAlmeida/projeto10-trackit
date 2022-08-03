import {
  HistoryWrapper,
  ContentWrapper,
  MyHabits,
  NoHistory,
  MyHistory,
} from "./History.style";

export default function History() {
  return (
    <>
      <HistoryWrapper>
        <ContentWrapper>
          <MyHistory>Histórico</MyHistory>
          <NoHistory>
            Em breve você poderá ver o histórico dos seus hábitos aqui!
          </NoHistory>
        </ContentWrapper>
      </HistoryWrapper>
    </>
  );
}
