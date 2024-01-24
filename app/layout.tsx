// import Loading from "@components/items/client-items/Loading";
import Loading from "@components/items/Loading";
import StorageProvider from "@components/items/StorageProvider";
import { DataProviders } from "@context/DataProviders";
import { StateProvider } from "@context/StateProvider";
import { find } from "@lib/api";
import "@styles/global.css";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const Posts = await find("Posts");
  const Config = await find("Config");
  return (
    <html lang="vi">
      <body>
        <StateProvider>
          <DataProviders>
            <StorageProvider Posts={Posts} Config={Config} />
            <Loading />
            <>{children}</>
          </DataProviders>
        </StateProvider>
      </body>
    </html>
  );
}
