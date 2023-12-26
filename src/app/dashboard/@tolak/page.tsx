import { PlainCard } from 'src/component/molecules/special/plain-card';
import { DataTableCase, DataTableCaseHeader, DataTableCaseTitle, DataTableCaseSubTitle } from "src/component/organisms/data-table/case";
import { CaseProvider } from "src/component/context/provider";

export default async function Page() {
  return (
    <CaseProvider>
      <PlainCard className="h-full w-full overflow-hidden">
        <DataTableCaseHeader>
          <DataTableCaseTitle text='kasus ditolak' />
          <DataTableCaseSubTitle text='case rejected' />
        </DataTableCaseHeader>
        <DataTableCase status="tolak"
          className="h-[50vh] w-full"
          pageSize={10} />
      </PlainCard>
    </CaseProvider>
  )
}